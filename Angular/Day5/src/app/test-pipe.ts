import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(person: any, wish:string): any {
    if(person.gender==="Female"){
      return `Hello miss ${person.name} ${wish}`;
    }else{
      return `Hello mister ${person.name} ${wish}`;
    }
    
  }
}
