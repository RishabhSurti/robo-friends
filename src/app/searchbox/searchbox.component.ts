import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit
{

  placeholderChange = ""

  constructor() { }

  ngOnInit(): void
  {
    this.filterString.emit(this.placeholderChange)
  }

  @Output()
  filterString: EventEmitter<any> = new EventEmitter();

inputChange(value)
  {
   this.placeholderChange = value;
   this.filterString.emit(this.placeholderChange)
  }

}
