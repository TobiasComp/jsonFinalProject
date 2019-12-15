import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentGroupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    body: ['', Validators.required]
  })
  constructor(private commentService:CommentService, private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
  }

  addComment(){
    let newComment = this.commentGroupForm.value
    newComment.id = this.commentService.data.length+1
    newComment.postId = this.commentService.currentPost.id
    console.log(newComment);
    console.log(this.commentService.data);
    
    
    this.commentService.addDataItem(newComment)
    this.commentService.getCommentsByPost();
    this.router.navigateByUrl("comments")
  }
}
// "postId": number
//     "id": number
//     "name": string
//     "email": string
//     "body": string
// }