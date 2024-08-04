import { TestBed } from '@angular/core/testing';

import { NotificationsExampleService } from './notifications-example.service';

describe('NotificationsExampleService', () => {
  let service: NotificationsExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
