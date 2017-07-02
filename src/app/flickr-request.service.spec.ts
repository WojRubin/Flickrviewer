import { TestBed, inject } from '@angular/core/testing';
import { FlickrRequestService } from './flickr-request.service';
import 'rxjs/add/operator/map';
import {
  HttpModule
} from '@angular/http';

describe('FlickrRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [ HttpModule ],
      providers: [FlickrRequestService]
    });
  });

  it('should ...', inject([FlickrRequestService], (service: FlickrRequestService) => {
    expect(service).toBeTruthy();
  }));
});
