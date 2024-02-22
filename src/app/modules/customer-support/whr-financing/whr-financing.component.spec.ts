import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhrFinancingComponent } from './whr-financing.component';

describe('WhrFinancingComponent', () => {
  let component: WhrFinancingComponent;
  let fixture: ComponentFixture<WhrFinancingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhrFinancingComponent]
    });
    fixture = TestBed.createComponent(WhrFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
