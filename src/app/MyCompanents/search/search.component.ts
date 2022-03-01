import { Component, OnInit , EventEmitter ,Output, Input } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: any='';
  
  constructor() { }

  ngOnInit(): void {
  }

  
  
  @Output()
  searchTextChanged: EventEmitter<any> = new EventEmitter<any>();
  
  
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
    // console.log(this.searchText);
  }



}
