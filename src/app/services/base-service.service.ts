import { Injectable } from '@angular/core';
import { Base } from '../models/base';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


export class BaseServiceService<T> {

  
  baseApi:string = "https://jsonplaceholder.typicode.com/"
  myApi:string 
  localStorageData:T[]

  protected dataSubject:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])
  public dataBS:Observable<T[]> = this.dataSubject.asObservable()
  public data:T[]

  constructor(public http:HttpClient,public childApi:string) { 
    this.myApi = this.baseApi + childApi 
  }

  // getData():Observable<T[]>{
  //   if (localStorage.getItem(this.childApi))
  //     this.localStorageData = JSON.parse(localStorage.getItem(this.childApi))
  //   return this.http.get<T[]>(this.myApi)
  // }
  getData(){
    if (localStorage.getItem(this.childApi))
      this.localStorageData = JSON.parse(localStorage.getItem(this.childApi))
    this.http.get<T[]>(this.myApi).subscribe(myData=>this.dataSubject.next(myData))
  }

  addDataItem(item:T){

    // UPDATE THE SERVICE ARRAY
    this.data.push(item)

    // UPDATE THE LOCALSTORAGE
    let dynamicItems = []
    if (localStorage[this.childApi]) {
      dynamicItems = dynamicItems.concat( JSON.parse(localStorage[this.childApi]))
      dynamicItems.push(item);
      localStorage.setItem(this.childApi, JSON.stringify(dynamicItems))
    }
    else 
      localStorage.setItem(this.childApi,JSON.stringify(item))
  }
  

}

