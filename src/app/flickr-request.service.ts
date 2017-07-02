import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FlickrRequestService {
  constructor (
    private http: Http
  ) {}

  search(search_text, page){   
    var base_url= "https://api.flickr.com/services/rest/";
     
    var params = {
      api_key: '29bfb3c357717f62a07eee5a31c60aa6',
      per_page: 5,
      format: 'json',
      nojsoncallback: 1,
      page: (page != null && page > 0) ? page : 1,
      method: 'flickr.photos.search',
      text: ''
    };

    if ((search_text != null && search_text.length > 0)) {
      params.text = search_text;
    }

    let options = new RequestOptions({ params: params });
    return this.http.get(base_url, options).map((res:Response) => res.json());
  }
}
