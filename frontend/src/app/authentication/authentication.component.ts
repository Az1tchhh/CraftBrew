import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent{
  username!:string;
  password!:string;


  constructor(private loginService: LoginService, private router: Router) {
  }
  login(){
    this.loginService.login(this.username, this.password).subscribe((data)=>{
      console.log(data);
      localStorage.setItem('token', data.access);
      AppComponent.isLogged = true;
      this.router.navigate([''])
    })
  }
}
