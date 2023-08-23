import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkComponent } from './link.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

const activatedRouteStub = {
  paramMap: {
    subscribe() {
      return of();
    }
  }
};

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      imports: [
        CommonModule,
        RouterModule,
      ]
    });
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show input information', () => {
    component.to = '/create';
    component.title = 'Agregar';

    fixture.detectChanges();

    const linkComponent: HTMLElement =  fixture.debugElement.nativeElement;
    const linkContent = linkComponent.querySelector('a')?.textContent;

    expect(linkContent).toEqual(component.title);
  })
});
