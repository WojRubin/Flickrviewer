import { TestBed, inject } from '@angular/core/testing';
import { FlickrFavoritStorageService } from './flickr-favorit-storage.service';

describe('FlickrFavoritStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrFavoritStorageService]
    });
  });

  it('should ...', inject([FlickrFavoritStorageService], (service: FlickrFavoritStorageService) => {
    expect(service).toBeTruthy();
  }));
});
