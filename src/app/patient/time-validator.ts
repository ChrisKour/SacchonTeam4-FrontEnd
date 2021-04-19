import { FormControl } from '@angular/forms';

export class TimeValidator {

   static ptTime(control: FormControl): { [key: string]: any } {
       let ptDatePattern =  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

       if (control.value && !control.value.match(ptDatePattern))
           return { "ptDate": true };

       return null;
   }
}