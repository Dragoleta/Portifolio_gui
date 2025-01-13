import { TestBed } from '@angular/core/testing';

import { ImageServices } from './image.service';

describe('ImagesServicesService', () => {
  let service: ImageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
