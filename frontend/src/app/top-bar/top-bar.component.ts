import { Component, EventEmitter, Output } from '@angular/core';
import {Product, products} from "../products";



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Output() productsFiltered = new EventEmitter<Product[]>();
  searchText: any = '';

  products = products;

  Search(){
    if (!this.searchText) {
      this.productsFiltered.emit(this.products);
      return;
    }

    const filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.productsFiltered.emit(filteredProducts);
  }
}
