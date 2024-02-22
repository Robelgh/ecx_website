import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAndBuyOrderComponent } from './sale-and-buy-order.component';

describe('SaleAndBuyOrderComponent', () => {
  let component: SaleAndBuyOrderComponent;
  let fixture: ComponentFixture<SaleAndBuyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleAndBuyOrderComponent]
    });
    fixture = TestBed.createComponent(SaleAndBuyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
