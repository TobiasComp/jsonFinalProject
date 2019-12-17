import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SuperService } from 'src/app/services/guards/super.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser:string='Bret'
  loginFormGroup = this.fb.group({
    user:[''],
    pass:['',Validators.required]
  })
  constructor(private router:Router,private fb:FormBuilder, private userService:UserService,
    private superService:SuperService) { }

  ngOnInit() {
  }

  login(){
    let userExists:boolean = false;
    this.userService.data.forEach(user=> {
      // console.log("this is th ecurrent user",this.userService.currentUser);
      // console.log("this is the selected user",this.selectedUser);
      
      if ( this.selectedUser == user.username ){
        this.userService.currentUser = user
        this.superService.isLoggedIn = true
        this.router.navigateByUrl("home")  
      }      
    } )
  }
  choice(ev){
    
    this.selectedUser = ev.target.value
    
  }
}
