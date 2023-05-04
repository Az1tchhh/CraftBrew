import {Component, OnInit} from '@angular/core';
import {Product} from "../products";
import {ProductsService} from "../products.service";
import {AppComponent} from "../app.component";
import {OrdersService} from "../orders.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productsFiltered!:Product[];
  usernameID = AppComponent.usernameID;
  isLogged = AppComponent.isLogged;
  constructor(private productService: ProductsService,
              private orderService: OrdersService) {
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
  order(username: number, total_price: number){
    console.log(username)
    this.orderService.order(username, total_price).subscribe((data)=>{
      console.log(data)
    })
  }
}
