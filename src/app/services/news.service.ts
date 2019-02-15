import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import {News} from '../modules/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://hacker-news.firebaseio.com';
  }

  getNews(): Observable<News[]>{
    // @ts-ignore
    return lazyFetch(`${this.baseUrl}/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=50`);
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
              const source = of(data);
              source.pipe(mergeMap(q => forkJoin(
                ...q.map(id => fetch( `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, options)
                  .then(res => res.json()
                  )))))
                .subscribe(result => {
                  fetchObserver.next(result);
                  fetchObserver.complete();
                });
            });
        }
      })
      .catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}
