import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { PostService } from './post.service';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebaseConfig = {
  apiKey: "AIzaSyDRMr3FH2ViAyOIZmv94QgoeaBrVM_62BQ",
  authDomain: "ang28authapp.firebaseapp.com",
  projectId: "ang28authapp",
  storageBucket: "ang28authapp.appspot.com",
  messagingSenderId: "178046339065",
  appId: "1:178046339065:web:1c03476100729295521f28"
};

// Initialize Firebase
constructor(public router:Router){
  initializeApp(this.firebaseConfig);
}
  loginStatus:boolean=false;
  ngDoCheck(){
    if(window.localStorage['logged']){
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
    this.router.navigate(['/login'])
    this.loginStatus=false;
  }
}
