import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, catchError, debounce, debounceTime } from 'rxjs';
import { iProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public totalProducts: iProduct[] = [];
  public products: iProduct[] = [];
  public limit = 5;

  public filterSubject = new Subject();

  constructor(private apiService: ApiService) {
    this.filterSubject
      .pipe(debounceTime(500))
      .subscribe((value) => {
        console.log('Debounce 500 ms executing ...')
        this.filterProducts(value as string);
      })
  }

  public getProducts(): void {
    this.apiService.getAll()
      .pipe(catchError(this.apiService.handleError))
      .subscribe(res => {
        this.totalProducts = res;
        this.products = this.getProductsByLimit();
      });
  }

  public getProductsByLimit() {
    return this.totalProducts.slice(0, this.limit);
  }

  public deleteProduct(product: iProduct) {
    this.apiService.delete(product.id)
      .pipe(catchError(this.apiService.handleError))
      .subscribe(() => {
        this.getProducts();
      });
  }

  public changeLimit(value: number): void {
    this.limit = value;

    this.getProducts();
  }

  public filterProducts(value: string): void {
    if (value === '') {
      this.products = this.getProductsByLimit();
      return;
    }

    const productsToFilter = this.getProductsByLimit();

    this.products = productsToFilter.filter(({ name }) => {
      return name.includes(value);
    });
  }
}
