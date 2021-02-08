import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { robots } from 'src/app/users';
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

  filterArray:Robot[]
  constructor() { }

  ngOnInit(): Robot[]
  {
    return this.filterArray = this.robotArray;
  }

  ngOnChanges(changes):Robot[]
  {
    return this.filterArray = (this.robotArray||[]).filter(robot => robot.name.toLowerCase().includes(this.filterString.toLowerCase()));
  }





}
