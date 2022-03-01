import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './MyCompanents/subject/subject.component';
import { SubItemComponent } from './MyCompanents/sub-item/sub-item.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './MyCompanents/search/search.component';
import { FilterPipe } from './MyCompanents/Pipes/filter.pipe';

import { LangComponent } from './MyCompanents/lang/lang.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubItemComponent,
    SearchComponent,
    FilterPipe,
    LangComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,Ng2SearchPipeModule,FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
