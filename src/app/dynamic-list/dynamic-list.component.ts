import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  collection: any;
  order: any;
  ascending: any;
  constructor() {
    this.order = 'name';
    this.ascending = true;
  }

  ngOnInit() {
    this.collection =  [
      {
      'name': '#1Shondra Magno',
      'id': 1
      },
      {
        'name': '#1Irwin Briceno',
        'id': 2
      },
      {
        'name': '#1Johnette Tropea',
        'id': 3
      },
      {
        'name': '#1Maragaret Monnin',
        'id': 4
      },
      {
        'name': '#1Rayford Aceves',
        'id': 5
      },
      {
        'name': '#1Cedrick Lamarca',
        'id': 6
      },
      {
        'name': '#1Billie Polly',
        'id': 7
      },
      {
        'name': '#1Madelaine Defeo',
        'id': 8
      },
      {
        'name': '#1Lajuana Shellman',
        'id': 9
      },
      {
        'name': '#1Jeanmarie Bourassa',
        'id': 10
      },
      {
        'name': '#1Corie Coon',
        'id': 11
      },
      {
        'name': '#1Madalyn Larios',
        'id': 12
      },
      {
        'name': '#1Zane Fetters',
        'id': 13
      }
    ];
  }

}
