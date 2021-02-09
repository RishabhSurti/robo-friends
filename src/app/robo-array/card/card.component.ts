import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Robot } from '../../models/robot.interface'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges {

  @Input()
  robotArray: Robot[];
  @Input()
  filterString: string;

  filterArray: Robot[]

  re: RegExp;

  constructor() { }

  ngOnInit(): Robot[]
  {
    this.re = new RegExp(`^${this.filterString}`,"i");
    return this.filterArray = this.robotArray;
  }

  ngOnChanges(changes):Robot[]
  {
    // return this.filterArray = (this.robotArray||[]).filter(robot => robot.name.toLowerCase().includes(this.filterString.toLowerCase()));
    this.re = new RegExp(`^${this.filterString}`,"i");
    return this.filterArray = (this.robotArray || []).filter(robot =>robot.name.match(this.re));
    console.log(this.filterArray)

  }

}
