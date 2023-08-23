import {
  Component,
  ElementRef,
  ViewChildren,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { iProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-table-products',
  templateUrl: './item-table-products.component.html',
  styleUrls: ['./item-table-products.component.css'],
})
export class ItemTableProductsComponent implements OnInit {
  @ViewChildren('toggleButton') toggleButton?: ElementRef;
  @ViewChildren('menu') menu?: ElementRef;
  @Input() product?: iProduct;

  listenerClickOutSite = () => {};

  public editLink: string = '';
  public showOptions = false;

  constructor(private renderer: Renderer2, private productService: ProductService) {}

  ngOnInit(): void {
    this.editLink = `/edit/${this.product?.id}`;
  }

  toggleMenu() {
    this.showOptions = !this.showOptions;

    if (this.showOptions) {
      // Create event when is open
      this.listenerClickOutSite = this.renderer.listen('window', 'click',(e: Event)=> {
        const target = e?.target as HTMLElement;

        if (!target.closest('#menu')) {
          this.toggleMenu();
        }
      });
    } else {
      // Remove event when is close
      this.listenerClickOutSite();
    }
  }

  deleteProduct() {
    if (this.product) this.productService.deleteProduct(this.product);
  }
}
