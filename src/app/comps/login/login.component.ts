import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Input() user:string
  // @Input() pass:string

  loginFormGroup = this.fb.group({
    user:['',Validators.required],
    pass:['',Validators.required]
  })
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
  }

  login(){
    
    console.log("This is the formgroup",this.loginFormGroup);
    
    this.router.navigateByUrl("home")
  }
}
