import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService){

    translate.addLangs(['en', 'hi']);

    translate.setDefaultLang('en');

  }

  translateLanguageTo(lang: string){
    this.translate.use(lang);
  }



  title = 'Angular_Mockup_website';

  searchTxt: any='';

  onSearchTxtEnt(searchValue: any){
    this.searchTxt = searchValue;
    // console.log(this.searchTxt);

  }
}
