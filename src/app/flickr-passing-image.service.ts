import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@Injectable()

export class FlickrPassingImage {
	constructor() {
  }

  public subject = new Subject<any>();

  addImage(image: string){
  	this.subject.next({image});
  }
  getImage(): Observable<string>{
    return this.subject.asObservable();
  }
}
