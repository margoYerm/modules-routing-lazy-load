import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-bindings',
  templateUrl: './what-is-bindings.component.html',
  styleUrls: ['./what-is-bindings.component.scss']
})
export class WhatIsBindingsComponent implements OnInit {
  imgC = 'https://cdn.worldvectorlogo.com/logos/react-1.svg'

  img = 'https://cdn.worldvectorlogo.com/logos/react-1.svg'
  imgA = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'

  constructor() { 
    setTimeout (
      () =>  {
        console.log('Secong img was changed')
        this.img = this.imgA
      }, 5000
     )
   }

  ngOnInit(): void {
  }

}
