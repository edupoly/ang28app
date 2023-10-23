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
    author:''
  }
  addPost(){
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
