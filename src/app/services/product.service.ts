import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, catchError, debounce, debounceTime, filter, map } from 'rxjs';
import { iProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public totalProducts: iProduct[] = [];
  public products: iProduct[] = [];
  public limit = 5;

  public filterSubject = new Subject<string>();

  constructor(private apiService: ApiService) {
    this.filterSubject
      .pipe(
        map((value: string) => value.trim()),
        filter((value: string) => {
          if (value.length < 3) {
            this.products = this.getProductsByLimit();
            return false;
          }
          return true;
        }),
        filter((value: string) => value.length === 3),
        debounceTime(300)
      )
      .subscribe((value) => {
        console.log('Debounce 300 ms executing ...');
        this.filterProducts(value as string);
      });
  }

  public updateProduct(product: iProduct): void {
    this.apiService
      .update(product)
      .pipe(catchError(this.apiService.handleError))
      .subscribe((res) => {
        this.getProducts();
      });
  }

  public createProduct(product: iProduct): void {
    this.apiService
      .create(product)
      .pipe(catchError(this.apiService.handleError))
      .subscribe((res) => {
        this.getProducts();
      });
  }

  public getProducts(): void {
    this.apiService
      .getAll()
      .pipe(catchError(this.apiService.handleError))
      .subscribe((res) => {
        this.totalProducts = res;
        this.products = this.getProductsByLimit();
      });
  }

  public getProductsByLimit() {
    return this.totalProducts.slice(0, this.limit);
  }

  public deleteProduct(product: iProduct) {
    this.apiService
      .delete(product.id)
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
    const productsToFilter = this.getProductsByLimit();

    this.products = productsToFilter.filter(({ name }) => {
      const re = new RegExp(value, 'i');
      return name.match(re);
    });
  }
}
