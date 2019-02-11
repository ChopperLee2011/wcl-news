import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import 'unfetch/polyfill'
import 'rxjs/add/operator/map';

// wrap fetch in observable so we can keep it chill
@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchTopics() {
    return lazyFetch(`${this.baseUrl}/`);
  }
}

function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if (!cancelToken) {
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      })
      .catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}
