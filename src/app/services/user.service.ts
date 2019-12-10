import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BaseServiceService } from './base-service.service';
import { Base } from '../models/base';

@Injectable({
  providedIn: 'root'
})

export class UserService extends BaseServiceService<User>{
  
  api:string = "https://jsonplaceholder.typicode.com/users";
  currentUser:User
  users:Base[]

  constructor( __http:HttpClient) {
    super(__http,"users");
    this.getData().subscribe(data=>this.users = data as User[])  
  }

}

