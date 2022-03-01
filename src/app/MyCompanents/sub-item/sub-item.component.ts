import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/Subject';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css']
})
export class SubItemComponent implements OnInit {



  @Input() subject:Subject;
  constructor() { 
     
      

  }

  ngOnInit(){
    

    }
    
}
