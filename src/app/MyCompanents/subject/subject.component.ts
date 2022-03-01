import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { Subject } from '../../Subject';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
@Input() serc: any='';






  subjects: Subject [];
  constructor() { 
  
  
    
    this.subjects = [
      {
        sno:"1",
        title:"this is title",
        desc: "this is Description",
        active: true,
        cat: "class 1"
      },
      {
        sno:"2",
        title:"this is title",
        desc: "this is Description",
        active: true,
        cat: "class 2"
      },
      {
        sno:"3",
        title:"this is title",
        desc: "this is Description",
        active: true,
        cat: "class 3"
      },
      {
        sno:"4",
        title:"this is title",
        desc: "this is Description",
        active: true,
        cat: "class 4"
      }
    ]
  }
  

  ngOnInit(): void {
  }

  

}
