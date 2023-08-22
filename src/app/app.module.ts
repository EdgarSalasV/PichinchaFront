import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FormProductComponent } from './view/form-product/form-product.component';
import { FinanceProductsComponent } from './view/finance-products/finance-products.component';

@NgModule({
  declarations: [
    AppComponent,
    // Layout Components
    NavBarComponent,
    // View Components
    FormProductComponent,
    FinanceProductsComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
