import { TestBed, async } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FavoritComponent } from './favorit/favorit.component';
import { FlickrRequestService } from './flickr-request.service';
import { FlickrFavoritStorageService } from './flickr-favorit-storage.service';
import { FlickrPassingImage } from './flickr-passing-image.service';
import { MockBackend } from '@angular/http/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,ReactiveFormsModule, HttpModule],
      declarations: [
        AppComponent, SearchComponent, FavoritComponent
      ],
      providers: [FlickrPassingImage, FlickrFavoritStorageService, { provide: 'https://api.flickr.com', useValue: 'http://example.com' },
        FlickrRequestService,
        { provide: XHRBackend, useClass: MockBackend }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flickr viewer');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flickr viewer');
  }));
});
