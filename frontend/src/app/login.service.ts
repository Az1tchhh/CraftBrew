import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken} from "./token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken>{
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {username, password});
  }
}
