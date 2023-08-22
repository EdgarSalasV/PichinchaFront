import {
  Component,
  ElementRef,
  ViewChildren,
  Input,
} from '@angular/core';
import { iProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-table-products',
  templateUrl: './item-table-products.component.html',
  styleUrls: ['./item-table-products.component.css'],
})
export class ItemTableProductsComponent {
  @ViewChildren('toggleButton') toggleButton?: ElementRef;
  @ViewChildren('menu') menu?: ElementRef;
  @Input() product?: iProduct;
  showOptions = false;

  constructor(private productService: ProductService) {}

  toggleMenu() {
    this.showOptions = !this.showOptions;
  }

  deleteProduct() {
    if (this.product) this.productService.deleteProduct(this.product);
  }
}
