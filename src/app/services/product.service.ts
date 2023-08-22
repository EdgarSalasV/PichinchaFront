import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError } from 'rxjs';
import { iProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: iProduct[] = [];
  public limit = 5;

  constructor(private apiService: ApiService) {}

  public getProducts(): void {
    this.apiService.getAll()
      .pipe(catchError(this.apiService.handleError))
      .subscribe(res => {
        this.products = res.splice(0, this.limit);
      });
  }

  public changeLimit(value: number): void {
    this.limit = value;
    this.getProducts();
  }
}
