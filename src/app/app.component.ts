import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
   `
  <h1>Hey guys !</h1>
<button (mouseenter)="myEvent($event)">My Button</button>

  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  	myEvent(event){
      console.log(event);
  	}
}

