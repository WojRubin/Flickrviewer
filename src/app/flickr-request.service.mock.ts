import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MockImages } from './images.data.mock';
import {
  Response,
  ResponseOptions
} from '@angular/http';

export class FlickrRequestServiceMock {
  search(search_text, page) {
		return Observable.of({photos: MockImages, "stats": "ok"});
  }
}