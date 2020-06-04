import { TestBed } from '@angular/core/testing';

import { RoleBasedRestrictionGuard } from './role-based-restriction.guard';

describe('RoleBasedRestrictionGuard', () => {
  let guard: RoleBasedRestrictionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleBasedRestrictionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
