import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceProductsComponent } from './finance-products.component';
import { FilterProductsComponent } from 'src/app/components/products/filter-products/filter-products.component';
import { LinkComponent } from 'src/app/components/common/link/link.component';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TableProductsComponent } from 'src/app/components/products/table-products/table-products.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('FinanceProductsComponent', () => {
  let component: FinanceProductsComponent;
  let fixture: ComponentFixture<FinanceProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinkComponent,
        FilterProductsComponent,
        FinanceProductsComponent,
        TableProductsComponent,
      ],
      imports: [RouterModule, HttpClientTestingModule],
      providers: [
        ProductService,
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(FinanceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
