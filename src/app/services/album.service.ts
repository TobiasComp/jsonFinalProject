import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseServiceService<Album>{
  
  albumsByUser:Album[]

  constructor(__http:HttpClient, private userService:UserService,) { 
    super(__http,"albums")
    this.getData()
    this.dataBS.subscribe(data=>{
      this.data = data 
      if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
      if (userService.currentUser)
        this.getAlbumsByUser()
    })
  }
  getAlbumsByUser(){
    this.albumsByUser =  this.data.filter(album=>album.userId==this.userService.currentUser.id)
  }
}
