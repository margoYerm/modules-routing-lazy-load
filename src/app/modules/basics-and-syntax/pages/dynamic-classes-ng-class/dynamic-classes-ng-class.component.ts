import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-classes-ng-class',
  templateUrl: './dynamic-classes-ng-class.component.html',
  styleUrls: ['./dynamic-classes-ng-class.component.scss']
})
export class DynamicClassesNgClassComponent implements OnInit {

  constructor() { }

  backgroundToggle = false
  backgroundSecond = false

  ngOnInit(): void {
  }

}
