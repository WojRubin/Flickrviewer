export class FavoritImage{
	farm: Number;
	server: String;
  image_id: String;
  secret: String;

	constructor(image){
	  this.farm = image.farm;
	  this.server = image.server;
	  this.image_id = image.id;
	  this.secret = image.secret;
	}   
} 