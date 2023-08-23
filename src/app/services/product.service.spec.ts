import { of } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/services/product.service';
import { LinkComponent } from 'src/app/components/common/link/link.component';
import { FinanceProductsComponent } from '../view/finance-products/finance-products.component';
import { TableProductsComponent } from 'src/app/components/products/table-products/table-products.component';
import { FilterProductsComponent } from 'src/app/components/products/filter-products/filter-products.component';

describe('ProductService', () => {
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
      imports: [RouterModule],
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
