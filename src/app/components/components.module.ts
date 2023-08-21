import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './common/button/button.component';
import { OptionsIconComponent } from './icons/options-icon/options-icon.component';
import { FinanceProductsComponent } from '../view/finance-products/finance-products.component';



@NgModule({
  declarations: [
    ButtonComponent,
    OptionsIconComponent,
    FinanceProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
