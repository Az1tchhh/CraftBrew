import {Component, OnInit} from '@angular/core';
import {Product} from "../products";
import {ActivatedRoute} from "@angular/router";
import {comments} from "../commentaries";
import {ProductsService} from "../products.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product!: Product;
  comments = comments;
  constructor(private route: ActivatedRoute,
              private productService: ProductsService) {
  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.productService.getProductDetail(productIdFromRoute).subscribe((data)=>{
      this.product = data;
    })


  }

}
