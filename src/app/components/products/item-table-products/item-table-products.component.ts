import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  ViewChildren,
  Input,
} from '@angular/core';
import { iProduct } from 'src/app/interfaces/Product';

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

  toggleMenu() {
    this.showOptions = !this.showOptions;
  }
}
