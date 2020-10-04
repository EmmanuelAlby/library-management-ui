import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'transform'
})
export class TransformPipe implements PipeTransform {
    transform(value: any, replaceValue: string) {
       if(value) {
           return value.replace(replaceValue,'go to view page');
       }
    }

}