import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListCaseComponent } from './report-list-case.component';

describe('ReportListCaseComponent', () => {
  let component: ReportListCaseComponent;
  let fixture: ComponentFixture<ReportListCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
