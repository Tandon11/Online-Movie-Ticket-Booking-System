import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  checkUser(User: any){
    let headers = new HttpHeaders();
    headers = headers.set('email', User.email);
    console.log("Inside checkUser");
    return this.http.get<String>('http://localhost:8090/api/checkUsername', { headers: headers })
  }

  saveUser(User: any) {
    return this.http.post('http://localhost:8090/api/registerUser',User)
  }

  authenticateUser(User: any) {
    return this.http.post('http://localhost:8090/api/login', User);
  }
}
