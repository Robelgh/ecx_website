import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTradeDataComponent } from './daily-trade-data.component';

describe('DailyTradeDataComponent', () => {
  let component: DailyTradeDataComponent;
  let fixture: ComponentFixture<DailyTradeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyTradeDataComponent]
    });
    fixture = TestBed.createComponent(DailyTradeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
