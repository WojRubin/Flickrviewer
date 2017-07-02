import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule, Http, Response, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoritComponent } from './favorit/favorit.component';
import { FlickrFavoritStorageService } from './flickr-favorit-storage.service';
import { FlickrRequestService } from './flickr-request.service';
import { FlickrPassingImage } from './flickr-passing-image.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ FlickrRequestService, FlickrFavoritStorageService, FlickrPassingImage ],
  bootstrap: [AppComponent]
})
export class AppModule { }
