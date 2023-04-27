import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../products";
import {ProductsService} from "../products.service";
import {AppComponent} from "../app.component";



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  @Output() productsFiltered = new EventEmitter<Product[]>();
  searchText: any = '';

  products!:Product[];
  isLogged = AppComponent.isLogged;
  constructor(private productService: ProductsService) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

  Search(){
    if (!this.searchText){
      this.productsFiltered.emit(this.products);
      return;
    }

    const filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.productsFiltered.emit(filteredProducts);
  }
  logout(){
    localStorage.removeItem('token');
    AppComponent.isLogged = false;
    window.location.reload();
  }
}
