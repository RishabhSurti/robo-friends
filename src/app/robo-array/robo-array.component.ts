import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { RoboArrayComponentService } from './robo-array.component.service'
import {Robot} from '../models/robot.interface'

@Component({
  selector: 'app-robo-array',
  templateUrl: './robo-array.component.html',
  styleUrls: ['./robo-array.component.css']
})
export class RoboArrayComponent implements OnInit {
  robotArray: Robot[];

  constructor(public RoboArrayService:RoboArrayComponentService) { }

  ngOnInit()
  {
    this.RoboArrayService.getUsers().subscribe((data) =>
    this.robotArray = data)

  }

  @Input()
  filterString:string;

  // filterArray = this.robotArray.filter(robot => robot.name.includes(this.filterString));

}
