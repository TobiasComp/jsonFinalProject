import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  currentAlbum: Album
  constructor(private photoService:PhotoService,private albumService:AlbumService) { 

  }

  ngOnInit() {
    if (this.photoService.currentAlbum)
      this.photoService.getPhotosByAlbum()
  }

}
