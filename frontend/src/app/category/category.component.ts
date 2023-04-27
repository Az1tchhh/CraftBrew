import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../products";
import {CategoriesService} from "../categories.service";
import {Category} from "../categories";
import {ProductsService} from "../products.service";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  @Output() productsCategorised = new EventEmitter<Product[]>();
  categories!:Category[];
  constructor(private categoryService: CategoriesService, private productService: ProductsService) {
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data;
    })
  }
  setList(id: number){
    if (id == 0){
      this.productService.getProducts().subscribe((data)=>{
        this.productsCategorised.emit(data);
      })
      return;
    }
    this.categoryService.getProductsByCategory(id).subscribe((data)=>{
      this.productsCategorised.emit(data);
    })
  }
}
