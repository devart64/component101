import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
   `
  <h1>Hey guys !</h1>
  <div *ngIf="myArr; then Tmpl1 else Tmpl2"></div>
  
  <ng-template #Tmpl1>Truth</ng-template>
  <ng-template #Tmpl2>False</ng-template>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  myArr = true;	

}

