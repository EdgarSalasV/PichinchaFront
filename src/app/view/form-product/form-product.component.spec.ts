import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormProductComponent } from './form-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextFieldComponent } from 'src/app/components/common/text-field/text-field.component';
import { of } from 'rxjs';

describe('FormProductComponent', () => {
  let component: FormProductComponent;
  let fixture: ComponentFixture<FormProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextFieldComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
      ]
    });
    fixture = TestBed.createComponent(FormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  describe('Valition fields', () => {
    it('name field validity', () => {
      let name = component.formGroup.controls['name'];
      expect(name.valid).toBeFalsy();
    });

    it('id field validity', () => {
      let id = component.formGroup.controls['id'];
      expect(id.valid).toBeFalsy();
    });

    it('logo field validity', () => {
      let logo = component.formGroup.controls['logo'];
      expect(logo.valid).toBeFalsy();
    });

    it('description field validity', () => {
      let description = component.formGroup.controls['description'];
      expect(description.valid).toBeFalsy();
    });

    it('dateLiberation field validity', () => {
      let dateLiberation = component.formGroup.controls['dateLiberation'];
      expect(dateLiberation.valid).toBeTrue();
    });

    it('dateRevision field validity', () => {
      let dateRevision = component.formGroup.controls['dateRevision'];
      expect(dateRevision.valid).toBeFalsy();
    });
  })
});
