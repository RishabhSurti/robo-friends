import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit
{

  placeholderChange = "Search Robots"
  searchValue:string = '';

  constructor() { }

  ngOnInit(): void
  {
    this.filterString.emit(this.searchValue)
  }

  @Output()
  filterString: EventEmitter<any> = new EventEmitter();

inputChange(value)
  {
   this.searchValue = value;
   this.filterString.emit(this.searchValue)
  }

}
