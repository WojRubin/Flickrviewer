import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlickrRequestService } from '../flickr-request.service';
import { FavoritComponent } from './favorit.component';
import { FlickrFavoritStorageService } from '../flickr-favorit-storage.service';
import { FlickrPassingImage } from '../flickr-passing-image.service';

describe('FavoritComponent', () => {
  let component: FavoritComponent;
  let fixture: ComponentFixture<FavoritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritComponent ],
      providers: [ FlickrPassingImage, FlickrFavoritStorageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
