import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-pipes',
  templateUrl: './what-is-pipes.component.html',
  styleUrls: ['./what-is-pipes.component.scss']
})
export class WhatIsPipesComponent implements OnInit {

  constructor() { }

  now: Date = new Date()

  ngOnInit(): void {
  }

}
