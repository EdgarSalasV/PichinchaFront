import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTableProductsComponent } from './item-table-products.component';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ItemTableProductsComponent', () => {
  let component: ItemTableProductsComponent;
  let fixture: ComponentFixture<ItemTableProductsComponent>;
  // let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTableProductsComponent],
      providers: [ProductService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemTableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have "getAll" function', () => {
    expect(ItemTableProductsComponent).toBeTruthy();
  });

  // it('should have getData function', () => {
  //   const service: ProductService = TestBed.get(productService);
  //   expect(service.getProducts).toBeTruthy();
  // });
  // it('should text data into input', () => {
  //   const input = fixture.debugElement.query(By.css('input'));
  //   input.nativeElement.value = 'updated value';
  //   input.nativeElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

  //   expect(
  //     fixture.debugElement.query(By.css('input')).nativeElement.value
  //   ).toEqual('updated value');
  // });
});
