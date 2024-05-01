import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesMapComponent } from './branches-map.component';

describe('BranchesMapComponent', () => {
  let component: BranchesMapComponent;
  let fixture: ComponentFixture<BranchesMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchesMapComponent]
    });
    fixture = TestBed.createComponent(BranchesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
