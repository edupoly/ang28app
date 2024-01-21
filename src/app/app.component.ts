import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { PostService } from './post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


// Initialize Firebase
constructor(public router:Router){
}
  loginStatus:boolean=false;
  displayName:string|null='';
  photoURL:string|null='';
  ngDoCheck(){
    if(window.localStorage['logged']){
      this.loginStatus=true;
    }
    if(window.localStorage.getItem('displayName')){
      this.displayName=window.localStorage.getItem('displayName');
      this.photoURL=window.localStorage.getItem('photoURL');
      this.loginStatus=true;
    }
  }
  ngOnInit(){
    if(!window.localStorage['logged']){
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/posts'])
      this.loginStatus=true;
    }
  }
  logout(){
    window.localStorage.clear();
    this.displayName=null;
    this.photoURL=null;
    this.router.navigate(['/login'])
    this.loginStatus=false;
  }
}
