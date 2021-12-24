import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  private counter: number = 0;
  
  @HostBinding('style.color') myColor: string = 'pink';

  @HostListener('click', ['$event']) changeColor(event: MouseEvent) {
    this.setRandomColor();
    this.counter++;
    console.log(`Clicked ${this.counter} thimes.`);
  }

  setRandomColor() {
    this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor() { }

}
