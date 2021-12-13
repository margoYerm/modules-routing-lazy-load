import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  title = 'Initial'

  /*This code for implements: constructor and ngOnInit*/
  constructor() { }
  ngOnInit(): void {
  }

  // onInput(event: any) {
  //   this.title = event.target.value
  // }
  
  onInput(event: any) {    
    this.title = (<HTMLInputElement>event.target).value
  }

}
