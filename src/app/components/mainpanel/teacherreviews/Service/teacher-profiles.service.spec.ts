import { TestBed } from '@angular/core/testing';

import { TeacherProfilesService } from './teacher-profiles.service';

describe('TeacherProfilesService', () => {
  let service: TeacherProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
