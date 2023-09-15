import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    { name: 'Объект 1', currentDate : new Date() },
    { name: 'Объект 2', currentDate : new Date() },
    { name: 'Объект 3', currentDate : new Date() }
  ];
}
