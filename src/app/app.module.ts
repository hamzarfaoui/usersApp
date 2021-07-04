import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';   
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
