import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  constructor(private formBuilder: FormBuilder) {
    this.markControlsAsPristine();
  }

  public formGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    logo: ['', Validators.required],
    dateLiberation: ['', Validators.required],
    dateRevision: [{ value: '', disabled: true }, Validators.required],
  });

  private markControlsAsPristine() {
    const controls = this.formGroup.controls;

    Object.keys(controls).forEach((controlName) => {
      const control = this.formGroup.get(controlName);
      if (control) {
        control.markAsPristine();
      }
    });
  }

  ngOnInit() {
    this.formGroup.get('dateLiberation')?.valueChanges.subscribe((value) => {
      if (!value) return;
      const selectedDate = new Date(value);
      selectedDate.setFullYear(selectedDate.getFullYear() + 1);
      this.formGroup
        .get('dateRevision')
        ?.setValue(selectedDate.toISOString().substr(0, 10));
    });
  }

  reset() {
    this.formGroup.reset();
  }

  submit() {
    console.log(`Focus bro`, this.formGroup.value);
  }

  getFormControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }
}
