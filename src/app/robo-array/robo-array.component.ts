import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { RoboArrayComponentService } from './robo-array.component.service'

@Component({
  selector: 'app-robo-array',
  templateUrl: './robo-array.component.html',
  styleUrls: ['./robo-array.component.css']
})
export class RoboArrayComponent implements OnInit {
  robotArray: any;

  constructor(public RoboArrayService:RoboArrayComponentService) { }

  ngOnInit(): any
  {
    this.RoboArrayService.getUsers().subscribe((data) =>
    {
      this.robotArray = data;
    });
  }

  @Input()
  filterString;

  // filterArray = this.robotArray.filter(robot => robot.name.includes(this.filterString));

}
