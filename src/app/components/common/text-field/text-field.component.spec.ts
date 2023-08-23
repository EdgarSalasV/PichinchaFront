import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextFieldComponent } from './text-field.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TextFieldComponent', () => {
  let component: TextFieldComponent;
  let fixture: ComponentFixture<TextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TextFieldComponent],
    });
    fixture = TestBed.createComponent(TextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the control with new input', () => {
    const fixture = TestBed.createComponent(TextFieldComponent);
    const control = new FormControl('old value');
    fixture.componentInstance.control = control;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.value).toEqual('old value');

    input.nativeElement.value = 'updated value';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(control.value).toEqual('updated value');
  });
});
