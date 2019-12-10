import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  addUserForm = this.fb.group({
    name: [''],
    username: ['']
  })
  addUser(){
    
    let user = this.addUserForm.value
    user.id = this.userService.users.length+1
    this.userService.users.push(user)
    this.router.navigateByUrl("users")
  }
}
