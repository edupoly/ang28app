import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http:HttpClient) { }

  notifyNewPost$=new Subject();

  getAllPosts(){
    return this.http.get("http://localhost:3000/posts")
  }

  addNewPost(newpost:any){
    return this.http.post("http://localhost:3000/posts",newpost)
  }

  deletePostById(id:any){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
}
