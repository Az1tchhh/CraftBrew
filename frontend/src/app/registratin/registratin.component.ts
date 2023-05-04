import { Component } from '@angular/core';
import {LoginService} from "../login.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-registratin',
  templateUrl: './registratin.component.html',
  styleUrls: ['./registratin.component.css']
})
export class RegistratinComponent {
  username!:string;
  password!:string;
  email!:string;
  constructor(private loginService: LoginService,
              private router: Router) {
  }

  register(){

    this.loginService.register(this.username, this.email, this.password).subscribe((data)=>{
      console.log(data);
    })

  }
}
