import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../orders.service";
import {AppComponent} from "../app.component";
import {Orders} from "../orders";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  basketList!:Orders[]
  constructor(private orderService: OrdersService) {
  }
  userId = AppComponent.usernameID
  ngOnInit(){
    this.orderService.userOrders(this.userId).subscribe((data)=>{
      console.log(data);
      this.basketList = data;
    })
  }

}
