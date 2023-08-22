import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './common/button/button.component';
import { FilterProductsComponent } from './products/filter-products/filter-products.component';
import { TableProductsComponent } from './products/table-products/table-products.component';
import { LinkComponent } from './common/link/link.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LinkComponent,
    ButtonComponent,
    FilterProductsComponent,
    TableProductsComponent,
  ],
  exports: [
    LinkComponent,
    ButtonComponent,
    FilterProductsComponent,
    TableProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
