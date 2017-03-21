/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketIoServiceService } from './socket-io.service';

describe('SocketIoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIoServiceService]
    });
  });

  it('should ...', inject([SocketIoServiceService], (service: SocketIoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
