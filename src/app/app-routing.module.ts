import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { SampleComponent } from './sample/sample.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path:'college',component:CollegeComponent},
  {path:'sample',component:SampleComponent},
  {path:'newaccount',component:NewaccountComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
