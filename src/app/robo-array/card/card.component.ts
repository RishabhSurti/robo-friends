import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { robots } from 'src/app/users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges {

  filterArray:any
  constructor() { }

  ngOnInit(): any
  {
    this.filterArray = this.robotArray;
  }

  ngOnChanges(changes)
  {
    this.filterArray = this.robotArray.filter(robot => robot.name.toLowerCase().includes(this.filterString.toLowerCase()));
  }

  @Input()
  robotArray: any;
  @Input()
  filterString: any;



}
