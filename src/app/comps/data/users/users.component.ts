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
  displayedColumns: string[] = ['id', 'name', 'username'];
  constructor(public userService: UserService, private router:Router) { }
  userSearchName: User[]

  ngOnInit() {

  }

  updateUser(userSelection: User){
    this.userService.currentUser = userSelection;
    this.router.navigateByUrl("todos");
  }

  addUser(ev){
    this.router.navigateByUrl("addUser");
  }

  userSearch(ev){
    console.log(ev);
    this.userSearchName = this.userService.data.filter(user=>user.name.includes(ev.target.value))
    console.log(this.userSearchName);
    
    
  }
  userSearchNameFunction():User[]{
    if (this.userSearchName)
      return this.userSearchName
    else
      return this.userService.data
  }
  
}
