import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Customers', url: '/customers', icon: 'people'} //icon sera modificado mas adelante en el curso
  ];
  public labels = [];
  constructor() {}
}