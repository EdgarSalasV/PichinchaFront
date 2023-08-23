import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterProductsComponent } from './filter-products.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FilterProductsComponent', () => {
  let component: FilterProductsComponent;
  let fixture: ComponentFixture<FilterProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        HttpClient,
        HttpHandler
      ],
      declarations: [FilterProductsComponent],
    });
    fixture = TestBed.createComponent(FilterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should text data into input', () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'updated value';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('input')).nativeElement.value
    ).toEqual('updated value');
  });
});
