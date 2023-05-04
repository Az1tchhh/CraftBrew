import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Orders} from "./orders";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) { }

  order(user:number, total_price:number): Observable<Orders>{
    return this.client.post<Orders>(`${this.BASE_URL}/api/orders/`, {user, total_price})
  }
  userOrders(user:number): Observable<Orders[]>{
    return this.client.get<Orders[]>(`${this.BASE_URL}/api/user/${user}/orders/`)
  }
}
