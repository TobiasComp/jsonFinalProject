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
  // users:User[]

  constructor( __http:HttpClient) {
    super(__http,"users");
    this.getData().subscribe(data=>{
      this.data = data as User[] 
      if (this.localStorageData)
        this.data = this.data.concat(this.localStorageData)
    })
  }

}

