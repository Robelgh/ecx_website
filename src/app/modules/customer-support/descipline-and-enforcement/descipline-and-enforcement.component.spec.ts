import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesciplineAndEnforcementComponent } from './descipline-and-enforcement.component';

describe('DesciplineAndEnforcementComponent', () => {
  let component: DesciplineAndEnforcementComponent;
  let fixture: ComponentFixture<DesciplineAndEnforcementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesciplineAndEnforcementComponent]
    });
    fixture = TestBed.createComponent(DesciplineAndEnforcementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
