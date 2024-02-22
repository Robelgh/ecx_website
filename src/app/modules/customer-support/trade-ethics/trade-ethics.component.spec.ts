import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeEthicsComponent } from './trade-ethics.component';

describe('TradeEthicsComponent', () => {
  let component: TradeEthicsComponent;
  let fixture: ComponentFixture<TradeEthicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeEthicsComponent]
    });
    fixture = TestBed.createComponent(TradeEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
