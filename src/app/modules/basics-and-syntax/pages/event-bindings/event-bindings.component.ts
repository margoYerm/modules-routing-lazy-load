import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bindings',
  templateUrl: './event-bindings.component.html',
  styleUrls: ['./event-bindings.component.scss']
})
export class EventBindingsComponent implements OnInit {

  inputValue = ''

  constructor() { }
  
  onInput(event: any) {
    console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }
  
  onBlur(str: string) {
    this.inputValue = str
  }
  
  onClick () {
    console.log('Click!')
  }

  ngOnInit(): void {}
}
