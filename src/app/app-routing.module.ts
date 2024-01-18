import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { PostsComponent } from './posts/posts.component';
import { AddpostComponent } from './addpost/addpost.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"countries",
    component:CountriesComponent,
    children:[
      {
        path:'countryDetails/:name',
        component:CountrydetailsComponent
      },
    ]
  },
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path:'addPost',
    component:AddpostComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
