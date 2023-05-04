import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  static isLogged: boolean;
  static username: string
  static usernameID: number
  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if(userId){
      AppComponent.usernameID = parseInt(userId, 10)
    }
    const token = localStorage.getItem('token');
    if(token){
      AppComponent.isLogged = true;
    }
    console.log(AppComponent.usernameID)
    console.log(AppComponent.isLogged)
  }
  title = 'Creaftebrewfront';
}
