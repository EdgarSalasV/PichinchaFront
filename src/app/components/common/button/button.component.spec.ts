import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the title input', () => {
    component.title = 'Enviar';

    fixture.detectChanges();

    const buttonComponent: HTMLElement =  fixture.debugElement.nativeElement;
    const buttonContent = buttonComponent.querySelector('button')?.textContent;

    expect(buttonContent?.trim()).toEqual(component.title);
  })
});
