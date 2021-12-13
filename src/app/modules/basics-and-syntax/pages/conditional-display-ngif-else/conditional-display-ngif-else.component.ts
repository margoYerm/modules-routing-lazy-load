import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-display-ngif-else',
  templateUrl: './conditional-display-ngif-else.component.html',
  styleUrls: ['./conditional-display-ngif-else.component.scss']
})
export class ConditionalDisplayNgifElseComponent implements OnInit {

  constructor() { }

  toggle = false
  toggle2 = false

  ngOnInit(): void {
  }

}
