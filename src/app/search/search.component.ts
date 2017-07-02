import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FlickrRequestService } from '../flickr-request.service';
import { FlickrPassingImage } from '../flickr-passing-image.service';
import { AppComponent } from '../app.component';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [Http]
})
export class SearchComponent implements OnInit {
  constructor(private request_service: FlickrRequestService, private passing_image: FlickrPassingImage) { 
  }

  ngOnInit() {
  }

  search_text: String;
  current_page: Number;
  total_pages: Number;
  images: Array<string> = [];

  searchImg(){
    this.current_page = 5;

    this.request_service.search(this.search_text, this.current_page).subscribe(
	  	data => {
        console.log(data.photos);
        this.total_pages = data.photos.pages,
        this.images = data.photos.photo
      },
      error => console.log(error)
    );
  };

  addToFavorit(image){
  	this.passing_image.addImage(image);
  }

}
