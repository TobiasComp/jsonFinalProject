import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService, private router:Router) { }

  ngOnInit() {

  }

  updateUser(userSelection: User){
    this.userService.currentUser = userSelection;
    this.router.navigateByUrl("todos");
  }

  addUser(){
    this.router.navigateByUrl("addUser");
  }
}
