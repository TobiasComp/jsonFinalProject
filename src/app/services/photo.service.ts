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
  lastPhotos:Photo[] = []

  constructor(__http:HttpClient,private userService:UserService) {
    super(__http,"photos")
    this.getData()
    this.dataBS.subscribe(data=>{
      if (data.length>0){
      this.data = data  
      /* if (localStorage[this.childApi])
        this.data = this.data.concat(JSON.parse(localStorage[this.childApi])) */
      
      this.getLastPhotos(10);
      }
    })
  }

  getPhotosByAlbum(){
    this.photosByCurrentAlbum = this.data.filter( photo=>{
      return this.currentAlbum.id==photo.albumId
    })
  }

  getLastPhotos(amount){
    let len = this.data.length
      
      
      for(let i=len-1; i>=len-amount; i--)
        this.lastPhotos.push(this.data[i])
  }
}
