import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(public ps:PostService){}
  posts:any;
  sharedPosts:any;
  ngOnInit(){
    this.ps.notifyNewPost$.subscribe(()=>{
      this.getAllPosts2()
    })
    this.getAllPosts2();
  }
  getAllPosts2(){
    this.ps.getAllPostsByAuthor(window.localStorage.getItem('emailid')).subscribe({
      next:(data)=>{
        this.posts=data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
    this.ps.getAllPosts().subscribe((res:any)=>{
      var temp = res.filter((post:any)=>{
        if(post.share?.includes(window.localStorage.getItem('emailid'))){
          return true
        }
        else{
          return false;
        }
      })
      this.sharedPosts=[...temp];
    })
  }
  delPost(id:any){
    this.ps.deletePostById(id).subscribe(()=>{
      // this.ps.notifyNewPost$.next(true);
      this.getAllPosts2();
    })
  }
}
