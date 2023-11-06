import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHighAndLowPriceComponent } from './daily-high-and-low-price.component';

describe('DailyHighAndLowPriceComponent', () => {
  let component: DailyHighAndLowPriceComponent;
  let fixture: ComponentFixture<DailyHighAndLowPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyHighAndLowPriceComponent]
    });
    fixture = TestBed.createComponent(DailyHighAndLowPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
