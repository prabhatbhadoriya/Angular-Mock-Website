import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any){
    if (value.length === 0){
      console.log(" insideuser 1")
      return value;
    }
    const users = [];
    for (const user of value){
      if (user['title'] === filterString){
        users.push(user);
        console.log(" insideuser 2")
      }
    }
    return Subject;
  }

}
