import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  intervalNumber:number
  
  index:number = 0;
  constructor(private postService:PostService,private photoService:PhotoService) { }

  ngOnDestroy(): void {
    clearInterval(this.intervalNumber)
  }

  ngOnInit() {
    // this.photoService.getLastPhotos()
    //   .subscribe(photos=>{
    //     this.lastPhotos = photos;
    //     console.log(this.lastPhotos);
    //     setTimeout(()=>this.initItem(),1000);
    //     this.intervalNumber = window.setInterval(()=>this.nextItem(),1000);
    
    //   })
    setTimeout(()=>this.initItem(),1000)
    this.intervalNumber = window.setInterval(()=>this.nextItem(),6000)
    //   this.postService.getLastPosts().subscribe(postsArr => {
    //     this.lastPosts = postsArr;
    //     let postIds:number[] = this.lastPosts.map(post=>post.id);
    //     this.commentService.getCommentsByPosts(postIds)
    //       .subscribe(allComments=>{
    //         this.lastPosts.forEach(post=>{
    //           post.comments = allComments.filter(comm=>comm.postId==post.id)
    //         });
    //     });
    //     setTimeout(console.log,2000,[this.lastPosts]);
        
    // });

  }
  initItem(){
    let firstLi = document.querySelector('.slider-li');
    firstLi.className = 'show';
  }

  nextItem(){
      
      
      let hideLi = document.querySelectorAll('.slider-ul>li')[this.index];
      hideLi.className = 'slider-li'
      if (this.index>=9)
        this.index = -1;
      let showLi = document.querySelectorAll('.slider-ul>li')[++this.index]
      showLi.className = 'show';
  }

}
