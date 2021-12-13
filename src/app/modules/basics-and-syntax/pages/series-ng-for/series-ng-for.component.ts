import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-ng-for',
  templateUrl: './series-ng-for.component.html',
  styleUrls: ['./series-ng-for.component.scss']
})
export class SeriesNgForComponent implements OnInit {

  constructor() { }

  arr = [1, 1, 2, 3, 5, 8, 13, 21, 34]

  obj = [
  {
    title: 'Post 1', 
    author: 'Margo', 
    comments: [
      {name: 'Ihor', text: 'Comment text'},
      {name: 'July', text: 'Comment text second'},
      {name: 'Alex', text: 'Comment text third'},
    ]
  },
  {
    title: 'Post 2', 
    author: 'Margo Yerm', 
    comments: [
      {name: 'Ihor', text: 'Comment text'},
      {name: 'July', text: 'Comment text second'},
      {name: 'Alex', text: 'Comment text third'},
    ]
  }
]

  ngOnInit(): void {
  }

}
