import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandComponent } from './blog-land.component';

describe('BlogLandComponent', () => {
  let component: BlogLandComponent;
  let fixture: ComponentFixture<BlogLandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogLandComponent]
    });
    fixture = TestBed.createComponent(BlogLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
