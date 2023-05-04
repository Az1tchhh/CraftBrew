import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000/api/';

  getProducts(): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}products/`);
  }
  getProductDetail(id: number): Observable<Product>{
    return this.client.get<Product>(`${this.BASE_URL}products/${id}`);
  }
  // getProductsSortedDesc(): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/products/cost_desc`)
  // }
  // getProductsSortedAsc(): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/products/cost_asc`)
  // }
}
