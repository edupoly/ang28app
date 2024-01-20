import { GoogleAuthProvider,signInWithPopup,getAuth } from 'firebase/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
firebaseConfig = {
  apiKey: "AIzaSyDRMr3FH2ViAyOIZmv94QgoeaBrVM_62BQ",
  authDomain: "ang28authapp.firebaseapp.com",
  projectId: "ang28authapp",
  storageBucket: "ang28authapp.appspot.com",
  messagingSenderId: "178046339065",
  appId: "1:178046339065:web:1c03476100729295521f28"
};
  userDetails={
    email:'',
    password:''
  }
  constructor(public router:Router){
    
  }
  login(){
    window.localStorage.setItem('logged','true');
    this.router.navigate(['/countries']);
  }
  loginWithGoogle(){
    var app = initializeApp(this.firebaseConfig);
    var provider = new GoogleAuthProvider();
    var auth = getAuth(app);
    signInWithPopup(auth,provider).then((result:any)=>{
      console.log(result)
      window.localStorage.setItem("token",result['user']['accessToken'])
      window.localStorage.setItem("displayName",result['user']['displayName'])
      window.localStorage.setItem("photoURL",result['user']['photoURL'])
      this.login();
    })
  }
}
