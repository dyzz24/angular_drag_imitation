import { TestBed } from '@angular/core/testing';

import { DragServiceService } from './drag-service.service';

describe('DragServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragServiceService = TestBed.get(DragServiceService);
    expect(service).toBeTruthy();
  });
});
