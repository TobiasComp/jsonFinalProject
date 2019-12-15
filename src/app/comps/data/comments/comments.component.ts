import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService:CommentService) { 
  }

  ngOnInit() {
    // this.commentsByCurrentPost
    this.commentsService.dataBS.subscribe(comments=>{
      console.log(comments);
      console.log(comments.filter(comment=>comment.postId==this.commentsService.currentPost.id));
      
      // commentsByCurrentPost
      this.commentsService.commentsByCurrentPost = comments.filter(comment=>{
        return comment.postId==this.commentsService.currentPost.id
      
      })
      console.log("this is the current post",this.commentsService.currentPost);
      
      console.log("These are the comments on the current post",this.commentsService.commentsByCurrentPost);

    })
  }

}
