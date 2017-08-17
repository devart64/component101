import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
   `
  <h1 [ngClass]="titleClasses">Hey guys !</h1>


  `,
  styles: [`
h1 {
	text-decoration:underline;
}

.red-title {
	color: red;
}
.large-title {
	font-size:4em;
}

  `]

})

export class AppComponent {
 
  titleClass = true;
  titleClasses = {
  	'red-title':true,
  	'large-title':true
  }

}

