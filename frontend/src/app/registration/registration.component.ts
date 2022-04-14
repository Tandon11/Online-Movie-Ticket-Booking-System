import { Component, OnInit } from '@angular/core';
import {DataService} from "../Services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

  User = {
    email: "",
    password: "",
  }

  display = "none";

  ngOnInit(): void {
  }

  submitUser() {
    console.log("Inside Submit User");
    this.dataService.checkUser(this.User).subscribe(
      (response:any)=>{
        console.log("Hello" + response);
        if(!response.email) {
          console.log("inside if")
          this.dataService.saveUser(this.User).subscribe(data=>{
              console.log("Data Sent");
              console.log(data);
            },
            error => {
              console.log("inside error")
              console.log(error);
            });
          this.router.navigate(['login']);
        }

        else {
          console.log("Username Already Exists");
          this.openModal();
        }
      },
      error => {
        console.log(error);
      }
    );}

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

  okayConfirmation() {
    this.display = "none";
    window.location.reload();
    this.router.navigate(['registration']);
  }

}
