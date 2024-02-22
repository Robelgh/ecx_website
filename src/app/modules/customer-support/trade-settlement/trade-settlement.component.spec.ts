import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSettlementComponent } from './trade-settlement.component';

describe('TradeSettlementComponent', () => {
  let component: TradeSettlementComponent;
  let fixture: ComponentFixture<TradeSettlementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeSettlementComponent]
    });
    fixture = TestBed.createComponent(TradeSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
