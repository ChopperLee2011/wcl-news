import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { NewsService } from '../services/news.service';
import { News } from '../modules/News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  displayedColumns = ['title'];
  dataSource = new NewsDataSource(this.newsService);

  constructor(public auth: AuthService, private newsService: NewsService) { }

}

export class NewsDataSource extends DataSource<any> {
  constructor(private newsService: NewsService) {
    super();
  }

  connect(): Observable<News []> {
    console.log('connecting', this.newsService.getNews());
    return this.newsService.getNews();
  }

  disconnect() {

  }
}
