import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userDetails={
    email:'',
    password:''
  }
  constructor(public router:Router){
    var provider = new GoogleAuthProvider();
    signInWithPopup()
  }
  login(){
    window.localStorage.setItem('logged','true');
    this.router.navigate(['/countries']);
  }
  loginWithGoogle(){

  }
}
