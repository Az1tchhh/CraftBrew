import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule} from "@angular/router";
import { CategoryComponent } from './category/category.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistratinComponent } from './registratin/registratin.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryComponent,
    AuthenticationComponent,
    RegistratinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : '', component: ProductListComponent},
      {path : '', component: CategoryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
