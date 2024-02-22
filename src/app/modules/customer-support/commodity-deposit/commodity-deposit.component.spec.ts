import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityDepositComponent } from './commodity-deposit.component';

describe('CommodityDepositComponent', () => {
  let component: CommodityDepositComponent;
  let fixture: ComponentFixture<CommodityDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommodityDepositComponent]
    });
    fixture = TestBed.createComponent(CommodityDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
