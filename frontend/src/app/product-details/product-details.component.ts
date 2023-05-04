import {Component, OnInit} from '@angular/core';
import {Product} from "../products";
import {ActivatedRoute} from "@angular/router";
import {Commentary} from "../commentaries";
import {ProductsService} from "../products.service";
import {AppComponent} from "../app.component";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product!: Product;
  productId = 0
  comments!: Commentary[];
  commentFromUser = ''
  clicked = false
  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private commentService: CommentsService) {
  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.productId = productIdFromRoute

    this.productService.getProductDetail(this.productId).subscribe((data)=>{
      this.product = data;

    })
  }
  Click(){
    if(this.clicked == false) {
      this.clicked = true

    }
    else this.clicked = false
    this.commentService.getCommentariesForProduct(this.productId).subscribe((data)=>{
      console.log(data);
      this.comments = data;
    })
  }
  submit(comment: string){
    // if(comment.length > 0){
    //   this.commentService
    // }
  }
}
