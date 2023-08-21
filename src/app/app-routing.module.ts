import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceProductsComponent } from './view/finance-products/finance-products.component';

const routes: Routes = [
  { path: '', component: FinanceProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
