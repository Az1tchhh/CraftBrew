import {Component, OnInit} from '@angular/core';
import {Product} from "../products";
import {ProductsService} from "../products.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productsFiltered!:Product[];

  isLogged = AppComponent.isLogged;
  constructor(private productService: ProductsService) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data)=>{
      console.log(data);
      this.productsFiltered = data;

    })
  }
  onProductsFound(products: Product[]) {
    this.productsFiltered = products;
    console.log(this.productsFiltered.length)
  }
  share(){

  }
  order(){}
}
