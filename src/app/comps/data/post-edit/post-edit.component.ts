import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  myPost:Post
  postFormGroup:FormGroup = this.fb.group({
    title:[''],
    body:['']
  }) 
  constructor(private activatedRoute:ActivatedRoute,private postService:PostService,
    private router:Router,private fb:FormBuilder) { 
      activatedRoute.params.subscribe(data=>{
        this.myPost = postService.data.filter(post=>post.id==data.id)[0]
    })
  }

  ngOnInit() {
  }

  deletePost(){
    this.postService.deletePost(this.myPost.id)
    this.router.navigateByUrl('posts')

  }

  editPost(){
    let editedPost = this.postFormGroup.value
    if (editedPost.title=="")
      editedPost.completed = this.myPost.title
    if ( editedPost.body=="")
      editedPost.body = this.myPost.body
    editedPost.userId = this.myPost.userId
    editedPost.id = this.myPost.id
    
    this.postService.editPost(editedPost);
    this.router.navigateByUrl('posts')
    
  }
}
