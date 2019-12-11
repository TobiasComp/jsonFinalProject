import { Injectable } from '@angular/core';
import { Base } from '../models/base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService<T> {

  public data:T[]
  baseApi:string = "https://jsonplaceholder.typicode.com/"
  myApi:string 

  constructor(public http:HttpClient,private childApi:string) { 
    this.myApi = this.baseApi + childApi 
  }

  getData():Observable<T[]>{
    return this.http.get<T[]>(this.myApi)
  }

}

