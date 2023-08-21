import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcxBlogComponent } from './ecx-blog.component';

describe('EcxBlogComponent', () => {
  let component: EcxBlogComponent;
  let fixture: ComponentFixture<EcxBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcxBlogComponent]
    });
    fixture = TestBed.createComponent(EcxBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
