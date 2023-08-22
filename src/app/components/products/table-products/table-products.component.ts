import { catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit  {
  public products: Product[] = [];
  public limit = 5;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAll()
      .pipe(catchError(this.apiService.handleError))
      .subscribe((res: Product[]) => {
        this.products = res;
      });
  }
}
