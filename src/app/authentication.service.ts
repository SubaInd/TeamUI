import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from'../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;
  role:string;
  constructor(private http: HttpClient) { }
  login(username:String, password:String) {
    //this.url = "http://localhost:8086/login/" + username+"/"+password;
    this.url = environment.loginserviceurl+ username+"/"+password;
    const  headers = new  HttpHeaders().set("Accept", "application/json");

    return this.http.post<any>(this.url ,{headers})/* .subscribe(
      (data) => {
        this.role = data.role;

        console.log("in authservice "+this.role);
      },error => {
        return "error";
    })
      return this.rol */;
}
}
