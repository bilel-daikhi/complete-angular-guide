import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent  implements OnInit{
  private errorSub: Subscription;
  loadedPosts : Post[] = [];
  error = null;
  constructor(private postService:PostsService){}
  isFetching = false;
  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.onFetchPosts();
  }
  onCreatePost(postData:{title:string,content:string}){
 this.postService.createPost(postData).subscribe({
  next:(value)=>{
    console.log(value);
    this.onFetchPosts();
  }
})
}
onHandleError() {
  this.error = null;
}

onFetchPosts() {
  this.isFetching = true;
 this.postService.fetchPosts().pipe(
    map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    })
  )
  .subscribe(posts => {
    this.isFetching = false;
    this.loadedPosts = posts;
  },
  error => {
    this.isFetching = false;
    this.error = error.message;
    console.log(error);
  }
);
}

onClearPosts() {
 this.postService.clearPosts().subscribe({
  next:value=>{
    console.log(value);
 this.onFetchPosts();
  }
 });

}
}


 