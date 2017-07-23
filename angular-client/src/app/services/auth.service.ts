import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthService {
  private prefixUrl: String = "http://localhost:3000"; // staviti u config fajl

  constructor(private http: Http) { 
  }

  loginUser(user) {
    var headers = new Headers();
    headers.append("content-type", "application/json");
    return this.http.post(this.prefixUrl + "/api/user/login", user, { headers: headers })
      .map(res => res.json());
  }

  registerUser(user) {
    var headers = new Headers();
    headers.append("content-type", "application/json");
    return this.http.post(this.prefixUrl + "/api/user/register", user, { headers: headers })
      .map(res => res.json());
  } 

}
