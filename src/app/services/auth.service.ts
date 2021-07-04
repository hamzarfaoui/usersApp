import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";  
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  public login()
  {
    return this.http.get(environment.base_url);
  }
  public isLoggedIn()
  {
    
    return localStorage.getItem('user') != null;
  }
}
