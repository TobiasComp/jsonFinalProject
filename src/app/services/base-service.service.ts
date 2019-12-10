import { Injectable } from '@angular/core';
import { Base } from '../models/base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService<T> {

  protected data:T[]
  baseApi:string = "https://jsonplaceholder.typicode.com/"

  constructor(public http:HttpClient,private childApi:string) { }

  getData():Observable<T[]>{
    return this.http.get<T[]>(this.baseApi+this.childApi)
  }
}
