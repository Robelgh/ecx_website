import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndCertificationComponent } from './training-and-certification.component';

describe('TrainingAndCertificationComponent', () => {
  let component: TrainingAndCertificationComponent;
  let fixture: ComponentFixture<TrainingAndCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingAndCertificationComponent]
    });
    fixture = TestBed.createComponent(TrainingAndCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
