import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcxWebsiteComponent } from './ecx-website.component';

describe('EcxWebsiteComponent', () => {
  let component: EcxWebsiteComponent;
  let fixture: ComponentFixture<EcxWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcxWebsiteComponent]
    });
    fixture = TestBed.createComponent(EcxWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
