import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BaseServiceService } from './base-service.service';
import { Base } from '../models/base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserService extends BaseServiceService<User>{

  api: string = "http://localhost:3000/users";
  currentUser: User
  // users:User[]

  constructor(__http: HttpClient) {
    super(__http, "users");
    this.getData();
    // this.getData()
    this.dataBS.subscribe(data => {
      if (data.length > 0) {
        this.data = data

      }
    })
  }

  getData() {
    this.http.get<User[]>(this.api)
      .subscribe(data => {
        // console.log("these are the users", data);

        this.dataSubject.next(data)
      })
  }

  addDataItem(item: User) {
    console.log("this is the item", item);

    this.http.post<User>(this.api, item).subscribe(err => {
      console.log();

    })

  }

}

