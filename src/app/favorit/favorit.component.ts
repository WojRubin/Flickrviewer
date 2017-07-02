import { Component, OnInit, Input } from '@angular/core';
import { FlickrFavoritStorageService } from '../flickr-favorit-storage.service';
import { FlickrPassingImage } from '../flickr-passing-image.service';
import { Subscription } from 'rxjs/Subscription';
import { FavoritImage } from '../favorit-image';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html'
})
export class FavoritComponent implements OnInit {
  subscription: Subscription;
  favorit_images: Array<FavoritImage> = [];

  constructor(private favorit_storage: FlickrFavoritStorageService,private passing_image: FlickrPassingImage) {
    this.favorit_images = this.favorit_storage.get();
    this.subscription = this.passing_image.getImage().subscribe(data=>{
      this.favorit_images.push ( new FavoritImage(data["image"] ));
      this.favorit_storage.set(this.favorit_images);
   })

   }
  ngOnInit() {

  }

  removeFromFavorit(index){
    this.favorit_images.splice(index,1);
    this.favorit_storage.set(this.favorit_images);
  }
}
