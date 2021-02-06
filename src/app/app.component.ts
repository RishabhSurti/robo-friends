import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robo-friends';

  filterString: string;

  filterArray(value)
  {
    this.filterString = value;
    // console.log(this.filterString,'appComponent')
  }
}
