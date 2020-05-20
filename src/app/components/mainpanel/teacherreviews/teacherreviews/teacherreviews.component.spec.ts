import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherreviewsComponent } from './teacherreviews.component';

describe('TeacherreviewsComponent', () => {
  let component: TeacherreviewsComponent;
  let fixture: ComponentFixture<TeacherreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
