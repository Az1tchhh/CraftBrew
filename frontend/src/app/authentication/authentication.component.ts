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
    this.loginService.getIdOfUser(this.username).subscribe((data)=>{
      AppComponent.usernameID = data.id
    })
    this.loginService.login(this.username, this.password).subscribe((data)=>{
      console.log(data);
      localStorage.setItem('token', data.access);
      localStorage.setItem('userId', AppComponent.usernameID.toString())
      AppComponent.isLogged = true;
      AppComponent.username = this.username
      this.router.navigate([''])
    })
  }
}
