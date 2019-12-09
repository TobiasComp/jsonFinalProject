import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit() {
  }

  addUserForm = this.fb.group({
    name: [''],
    username: ['']
  })
  addUser(){
    // console.log(this.addUserForm.value);
    // let user = this.addUserForm.value;
    // localStorage.setItem('newUser',JSON.stringify(user));
    // console.log(JSON.parse(localStorage.getItem('newUser')).id);
    let user = this.addUserForm.value
    user.id = this.userService.users.length+1
    this.userService.users.push(user)
  }
}
