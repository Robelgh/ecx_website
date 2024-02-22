import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseServiceComponent } from './warehouse-service.component';

describe('WarehouseServiceComponent', () => {
  let component: WarehouseServiceComponent;
  let fixture: ComponentFixture<WarehouseServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseServiceComponent]
    });
    fixture = TestBed.createComponent(WarehouseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
