import { Component, OnInit } from '@angular/core';
import {DataService} from "../Services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
  }

  User = {
    email: "",
    password: "",
  }

  errorMessage = 'invalid credentials';
  invalidLogin = false;

  handleLogin() {
    this.dataService.authenticateUser(this.User).subscribe(
      (response: any)=>{
          if(response.email === this.User.email && response.password === this.User.password) {
            console.log("Authentic User");
            sessionStorage.setItem('authenticatedUser', this.User.email);
            this.router.navigate(['dashboard']);
            this.invalidLogin = false;
          }
          else {
            this.invalidLogin = true;
          }
      },
      error => {
          console.log(error);
      }
    );}

  redirect() {
      this.router.navigate(['registration']);
  }

}
