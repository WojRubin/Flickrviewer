import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FlickrRequestService } from '../flickr-request.service';
import { FlickrPassingImage } from '../flickr-passing-image.service';
import { MockImages } from '../images.data.mock';
import { FlickrRequestServiceMock } from '../flickr-request.service.mock';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchComponent ],
      providers: [ {provide: FlickrRequestService, useClass: FlickrRequestServiceMock},FlickrPassingImage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return images', () => {
    component.search_text = 'test';
    component.current_page = 12;
    component.searchImg();
    expect(component.images.length).toEqual(4);
  });
});
