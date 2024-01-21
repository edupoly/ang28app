import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  constructor(public ps:PostService){}
  newPost:any={
    title:'',
    author:window.localStorage.getItem('emailid'),
    share:[],
    publishedOn:''
  }
  friends:string|null=null;
  addPost(){
    this.newPost.publishedOn=(new Date()).getTime();
    if(this.friends){
      this.newPost.share=[...this.friends.split(',')]
      console.log(this.newPost)
    }
    this.ps.addNewPost(this.newPost).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:()=>{},
      complete:()=>{
        this.ps.notifyNewPost$.next(true);
      }
    })
  }
}
