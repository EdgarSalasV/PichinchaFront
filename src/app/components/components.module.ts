import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './common/button/button.component';
import { FilterProductsComponent } from './products/filter-products/filter-products.component';
import { TableProductsComponent } from './products/table-products/table-products.component';
import { LinkComponent } from './common/link/link.component';
import { RouterModule } from '@angular/router';
import { TextFieldComponent } from './common/text-field/text-field.component';
import { ItemTableProductsComponent } from './products/item-table-products/item-table-products.component';

@NgModule({
  declarations: [
    LinkComponent,
    ButtonComponent,
    FilterProductsComponent,
    TableProductsComponent,
    TextFieldComponent,
    ItemTableProductsComponent,
  ],
  exports: [
    LinkComponent,
    ButtonComponent,
    FilterProductsComponent,
    TableProductsComponent,
    TextFieldComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class ComponentsModule {}
