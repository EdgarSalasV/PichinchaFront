import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceProductsComponent } from './view/finance-products/finance-products.component';
import { FormProductComponent } from './view/form-product/form-product.component';

const routes: Routes = [
  { path: '', component: FinanceProductsComponent },
  { path: 'create', component: FormProductComponent },
  { path: 'edit/:id', component: FormProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
