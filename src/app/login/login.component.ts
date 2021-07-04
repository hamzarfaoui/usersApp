import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from "@angular/common/http";  
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email="";
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/800/500`);
  private reponse:any = []
  private exists= false;  
  user_status="";
  constructor(private authService:AuthService,public router: Router) {
    
  }

  ngOnInit(): void {
  }
  getData(){
    
    this.authService.login().subscribe((res)=>{
      this.reponse = res
      
      let data=(this.reponse.data.filter((x: { email: string; })=>x.email==this.email))[0]
      if(data){
        localStorage.setItem('user',JSON.stringify(data));
        this.router.navigate(['home']);
      }
     else{
        console.log("email doesn't exists");
        this.user_status = "User does not exists !!  please try again"
      } 
      
    })
  }
 }

 
