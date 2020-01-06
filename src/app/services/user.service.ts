import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BaseServiceService } from './base-service.service';
import { Base } from '../models/base';

@Injectable({
  providedIn: 'root'
})


export class UserService extends BaseServiceService<User>{
  
/*   api:string = "https://localhost:3000/users";
 */  currentUser:User
  // users:User[]

  constructor( __http:HttpClient) {
    super(__http,"users");
    this.getData()
    this.dataBS.subscribe(data=>{
      if (data.length>0){
        this.data = data
     /*  if (this.localStorageData)
        this.data = this.data.concat(this.localStorageData) */
    }
    })
  }

  /* addDataItem(item:User){
    console.log("this is the item");
    
    this.http.post<User>("http://localhost:3000/users", item).subscribe(err=>{
      console.log();
      
    })

  } */

}

