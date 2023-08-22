import { Component, ElementRef, ViewChild, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-item-table-products',
  templateUrl: './item-table-products.component.html',
  styleUrls: ['./item-table-products.component.css']
})
export class ItemTableProductsComponent {
  @ViewChildren('toggleButton') toggleButton?: ElementRef;
  @ViewChildren('menu') menu?: ElementRef;
  showOptions  = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.toggleButton?.nativeElement && e.target!==this.menu?.nativeElement){
        this.showOptions = false; 
      }
    });
  }

  toggleMenu() {
    this.showOptions  = !this.showOptions ;
  }
}
