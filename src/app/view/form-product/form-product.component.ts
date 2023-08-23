import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { iProduct } from 'src/app/interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { dateValidatorForm } from 'src/app/helpers/date-validator-form';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  public idParam: string | null = null;
  public today = new Date();
  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.formGroup = this.formBuilder.group({
      id: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
      ],
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ]),
      ],
      description: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ]),
      ],
      logo: ['', Validators.required],
      dateLiberation: [
        new Date(),
        dateValidatorForm(),
      ].filter(Boolean),
      dateRevision: ['', Validators.required],
    });

    this.markControlsAsPristine();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (!params.hasOwnProperty('id')) return;
      this.idParam = params['id'];
      this.setValues();
    });

    this.formGroup.get('dateLiberation')?.valueChanges.subscribe((value) => {
      if (!value) return;
      const selectedDate = new Date(value);
      selectedDate.setFullYear(selectedDate.getFullYear() + 1);
      this.formGroup
        .get('dateRevision')
        ?.setValue(selectedDate.toISOString().substr(0, 10));
    });
  }

  backToTable() {
    this.router.navigate(['/']);
  }

  setValues(): void {
    if (!this.productService.products.length || this.idParam === null) {
      this.backToTable();
      return;
    }

    const product = this.productService.products.find(
      (product) => product.id === this.idParam
    );

    if (!product) {
      this.backToTable();
      return;
    }

    const { id, name, description, logo } = product;

    const dateLiberationRaw = new Date(product.date_release);
    const instanceDateRevision = new Date(product.date_revision);

    const [dateLiberation] = dateLiberationRaw.toISOString().split('T');
    const [dateRevision] = instanceDateRevision.toISOString().split('T');

    this.formGroup.setValue({
      id,
      name,
      description,
      logo,
      dateLiberation,
      dateRevision,
    });
  }

  markControlsAsPristine() {
    const controls = this.formGroup.controls;

    Object.keys(controls).forEach((controlName) => {
      const control = this.formGroup.get(controlName);
      if (control) {
        control.markAsPristine();
      }
    });
  }

  reset() {
    console.log(this.idParam);
    this.formGroup.reset();
    if (this.idParam) this.formGroup.get('id')?.setValue(this.idParam);

    console.log(this.formGroup.value);
  }

  create() {
    const newProduct: iProduct = {
      id: this.formGroup.value.id!,
      name: this.formGroup.value.name!,
      description: this.formGroup.value.description!,
      logo: this.formGroup.value.logo!,
      date_release: this.formGroup.value.dateLiberation!,
      date_revision: this.formGroup.value.dateRevision!,
    };

    this.productService.createProduct(newProduct);
    this.router.navigate(['/']);
  }

  update() {
    const updateProduct: iProduct = {
      id: this.formGroup.value.id!,
      name: this.formGroup.value.name!,
      description: this.formGroup.value.description!,
      logo: this.formGroup.value.logo!,
      date_release: this.formGroup.value.dateLiberation!,
      date_revision: this.formGroup.value.dateRevision!,
    };

    this.productService.updateProduct(updateProduct);
    this.router.navigate(['/']);
  }

  submit() {
    if (!this.idParam) {
      this.create();
    } else {
      this.update();
    }
  }

  getFormControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }
}
