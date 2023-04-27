import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CategoryComponent,
    ProductDetailsComponent,
    ProductListComponent,
    RegistratinComponent,
    TopBarComponent
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
      {path : 'product/:id', component: ProductDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
