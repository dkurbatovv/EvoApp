import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  count: number = 0;

  counter() {
    this.count++;
  }
}
