import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { PostService } from './post.service';
import { getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzCIhwSFtZ67A7nq1AjqQcB_2v9Awj7kA",
  authDomain: "blogpostapp-925e4.firebaseapp.com",
  databaseURL: "https://blogpostapp-925e4.firebaseio.com",
  projectId: "blogpostapp-925e4",
  storageBucket: "blogpostapp-925e4.appspot.com",
  messagingSenderId: "988396891672",
  appId: "1:988396891672:web:3e126b7fef8c338b105d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  auth=getAuth(app)
  provider = new GoogleAuthProvider();
  ngOnInit(){
    // signInWithPopup(this.auth,this.provider).then((result)=>{
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   console.log(credential)
    //   console.log(result.user)
    // }).catch(()=>{

    // })
  }
  
}
