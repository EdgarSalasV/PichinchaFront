import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './common/button/button.component';
import { FinanceProductsComponent } from '../view/finance-products/finance-products.component';
import { FilterProductsComponent } from './products/filter-products/filter-products.component';
import { TableProductsComponent } from './products/table-products/table-products.component';



@NgModule({
  declarations: [
    ButtonComponent,
    FinanceProductsComponent,
    FilterProductsComponent,
    TableProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
