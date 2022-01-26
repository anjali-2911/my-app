import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { SampleComponent } from './sample/sample.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { AdmissionComponent } from './admission/admission.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    SampleComponent,
    NewaccountComponent,
    ForgetpasswordComponent,
    LoginComponent,
    AdmissionComponent,
    // HttpClient
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
