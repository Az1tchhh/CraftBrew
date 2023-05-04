import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthToken} from "./token";
import {Observable} from "rxjs";
import {Commentary} from "./commentaries";
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  BASE_URL = 'http://127.0.0.1:8000/api/'
  constructor(private client: HttpClient) { }

  getCommentariesForProduct(id: number): Observable<Commentary[]>{
    return this.client.get<Commentary[]>(`${this.BASE_URL}products/${id}/comments/`);
  }
}
