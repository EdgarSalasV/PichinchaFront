import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent {
  @Input() messageError = '';
  @Input() showError = false;
  @Input() label = '';
  @Input() type = 'text';
  @Input() disabled = false;
  
  @Input() control: FormControl = new FormControl();
}
