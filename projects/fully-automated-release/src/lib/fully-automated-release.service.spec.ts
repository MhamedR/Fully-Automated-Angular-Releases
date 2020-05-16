import { TestBed } from '@angular/core/testing';

import { FullyAutomatedReleaseService } from './fully-automated-release.service';

describe('FullyAutomatedReleaseService', () => {
  let service: FullyAutomatedReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullyAutomatedReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
