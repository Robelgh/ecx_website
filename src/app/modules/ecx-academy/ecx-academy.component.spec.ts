import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcxAcademyComponent } from './ecx-academy.component';

describe('EcxAcademyComponent', () => {
  let component: EcxAcademyComponent;
  let fixture: ComponentFixture<EcxAcademyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcxAcademyComponent]
    });
    fixture = TestBed.createComponent(EcxAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
