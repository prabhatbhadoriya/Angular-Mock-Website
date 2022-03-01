import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
  

  constructor(public translate: TranslateService) { 
    
  }

  ngOnInit(): void {
   
  }

  
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }


  

  

}
