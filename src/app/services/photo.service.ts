import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { BaseServiceService } from './base-service.service';
import { Photo } from '../models/photo';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends BaseServiceService<Photo>{

  currentAlbum: Album
  photosByCurrentAlbum:Photo[]

  constructor(__http:HttpClient,private userService:UserService) {
    super(__http,"photos")
    this.getData()
    this.dataBS.subscribe(data=>{
      this.data = data  
      if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi]))
    })
  }

  getPhotosByAlbum(){
    this.photosByCurrentAlbum = this.data.filter( photo=>{
      return this.currentAlbum.id==photo.albumId
    })
  }
}
