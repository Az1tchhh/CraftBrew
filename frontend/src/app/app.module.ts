import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistratinComponent } from './registratin/registratin.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BasketComponent } from './basket/basket.component';
import {AuthInterceptor} from "./AuthInterceptor";


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CategoryComponent,
    ProductDetailsComponent,
    ProductListComponent,
    RegistratinComponent,
    TopBarComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '', component: ProductListComponent},
      {path : 'registration', component: RegistratinComponent},
      {path : 'login', component: AuthenticationComponent},
      {path : 'product/:id', component: ProductDetailsComponent},
      {path : 'basket', component: BasketComponent}
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
