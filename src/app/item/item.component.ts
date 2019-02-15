import { Component, OnInit, Input } from '@angular/core';

import { News } from '../modules/News';

@Component({
  selector: 'wcl-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  @Input() item: News;

  constructor() { }

  ngOnInit() {
  }

}
