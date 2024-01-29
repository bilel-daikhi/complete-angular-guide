import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  constructor(private httpClient:HttpClient) { }
  createPost(postData:{title:string,content:string}){
   return this.httpClient.
   post('https://angular-examples-27c55-default-rtdb.europe-west1.firebasedatabase.app/posts.json',postData,
   {
     observe: 'response'
   }
   )
   ;
  }
  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return  this.httpClient.get<{ [key: string]: Post }>('https://angular-examples-27c55-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
    {
      headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
      params: searchParams,
      responseType: 'json'
    })
 ;
  }
  clearPosts() {
   return    this.httpClient.delete('https://angular-examples-27c55-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
    
  }
}
