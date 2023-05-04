import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./categories";
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASE_URL = "http://localhost:8000/api";
  constructor(private client: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/categories/`);
  }
  getProductsByCategory(id: number): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}/categories/${id}/products`)
  }
}
