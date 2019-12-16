import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from 'src/app/models/album';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  display:string
  constructor(private photoService:PhotoService,private userService:UserService, private albumService:AlbumService,private router:Router) { }

  ngOnInit() {
    console.log(this.albumService);
    
    if (this.userService.currentUser){
      this.albumService.getAlbumsByUser()
      this.display = 'byUser'
    }
    else  
      this.display = 'all'
  }
  
  choice(ev){
    
    if (this.userService.currentUser && ev.target.value=='byUser'){
     this.display = 'byUser' 
       this.albumService.getAlbumsByUser()
     }
     else
       this.display = 'all'
     
 }
 getPhotos(album:Album){
   this.photoService.currentAlbum = album
   this.router.navigateByUrl("photos")
 }
//  addAlbumForm(){
//   this.router.navigateByUrl("albumForm");
// }

}
