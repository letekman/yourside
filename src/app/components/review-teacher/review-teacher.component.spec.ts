import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTeacherComponent } from './review-teacher.component';

describe('ReviewTeacherComponent', () => {
  let component: ReviewTeacherComponent;
  let fixture: ComponentFixture<ReviewTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
