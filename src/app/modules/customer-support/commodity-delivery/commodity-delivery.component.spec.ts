import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityDeliveryComponent } from './commodity-delivery.component';

describe('CommodityDeliveryComponent', () => {
  let component: CommodityDeliveryComponent;
  let fixture: ComponentFixture<CommodityDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommodityDeliveryComponent]
    });
    fixture = TestBed.createComponent(CommodityDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
