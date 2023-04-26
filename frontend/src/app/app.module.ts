import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {  RouterModule  } from "@angular/router";
import { CategoryComponent } from './category/category.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistratinComponent } from './registratin/registratin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryComponent,
    AuthenticationComponent,
    RegistratinComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
