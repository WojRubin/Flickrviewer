import { Injectable } from '@angular/core';

@Injectable()
export class FlickrFavoritStorageService {


  constructor() {
  }

  storage_name = 'Flickr-Images';
  images: Array<string> = [];

  set(images){
    localStorage.setItem(this.storage_name, JSON.stringify(images));
  }
  get(){
    try {
      var images = JSON.parse(localStorage.getItem(this.storage_name));
    } catch (e) {
      console.log(e);
      images = [];
    }
    if (!(images instanceof Array)) {
      images = []
    };
    return images;
  }
}
