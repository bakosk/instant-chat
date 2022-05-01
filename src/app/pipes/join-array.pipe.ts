import { Pipe, PipeTransform } from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'joinValidationErrorsPipe'
})
export class JoinValidationErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined, ...args: string[]): string {
    if(!value){
      return '';
    }
    return Object.values(value).join(args[0]);
  }

}
