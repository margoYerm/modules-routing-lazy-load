import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  title= 'Initial'

  /*This code for implements: constructor and ngOnInit*/
  constructor() { }
  ngOnInit(): void {
  }


  onInput(event: any) {
    this.title = event.target.value
  }

}
