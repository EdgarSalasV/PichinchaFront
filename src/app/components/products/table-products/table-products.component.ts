import { Component, OnInit } from '@angular/core';
import { iProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts();
  }

  public selectedLimit($event: Event): void {
    const $element = ($event.target as HTMLInputElement);

    if ($element && $element.value) {
      this.productService.changeLimit(Number($element.value))
    }
  }
}
