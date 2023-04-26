import { Injectable } from '@angular/core';
import {Product} from "./products";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // constructor(private client: HttpClient) { }
  // BASE_URL = 'http://127.0.0.1:8000';
  //
  // getProducts(): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/products/`);
  // }
  // getProductDetail(id: string): Observable<Product>{
  //   return this.client.get<Product>(`${this.BASE_URL}/products/${id}`);
  // }
  // getProductsByCategory(id: String): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/categories/${id}/products`)
  // }
  // getProductsSortedDesc(): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/products/cost_desc`)
  // }
  // getProductsSortedAsc(): Observable<Product[]>{
  //   return this.client.get<Product[]>(`${this.BASE_URL}/products/cost_asc`)
  // }
}
