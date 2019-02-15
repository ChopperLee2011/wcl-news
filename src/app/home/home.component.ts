import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { AuthService } from '../services/auth.service';
import { NewsService } from '../services/news.service';
import { News } from '../modules/News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public auth: AuthService, private newsService: NewsService) { }

  displayedColumns = ['title'];
  dataSource: MatTableDataSource<News>;
  newsList: News [];
  pageSize = 20;

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews().subscribe(news => {
      this.newsList = news;
      this.dataSource = new MatTableDataSource(this.newsList);
      this.dataSource.paginator = this.paginator;
    });
  }


}
