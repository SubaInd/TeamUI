import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {  AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  loading = false;
  roles: string;
    submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe((data) => {
      this.roles = data.roles;
      localStorage.setItem('curruser',data.username);
      console.log("in login component "+this.roles);
      if( this.roles == "admin"){
        console.log("admin user");
        this.returnUrl = "/admin"
        this.router.navigate([this.returnUrl]);
        
      }
      else if (this.roles == "user") {
        this.returnUrl = "/user"
        this.router.navigate([this.returnUrl]);
        
      } else if(this.roles== "sme"){
        this.returnUrl = "/sme"
        this.router.navigate([this.returnUrl]);
      }
     
      
    },error => {
      this.roles = "error";
      console.log("error");
  })
    
    
  }

}
