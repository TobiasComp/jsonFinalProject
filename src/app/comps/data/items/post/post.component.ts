import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';
import { PostComment } from 'src/app/models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:Post
  constructor(private commentService:CommentService,private router:Router) { }

  ngOnInit() {
  }

  getCommentsByPost(post:Post){
    this.commentService.currentPost = post
    this.commentService.getCommentsByPost()
    this.router.navigateByUrl("comments");
  }

  addCommentToPost(post:Post){
    this.commentService.currentPost = post
    this.router.navigateByUrl("commentForm");
  }
 
}
