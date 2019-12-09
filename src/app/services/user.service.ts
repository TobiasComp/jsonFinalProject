import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  api:string = "https://jsonplaceholder.typicode.com/users";
  currentUser:User
  users:User[]

  constructor(private http:HttpClient) {
    this.getAllUsers();
   }

  

  getAllUsers() {
    this.http.get(this.api)
    .subscribe(data=> { this.users=data as User[];})
  }


}

