import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateValidatorForm(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let invalidDate = false;
    if (control.value) {
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);

      const preDate = new Date(control.value);
      preDate.setHours(0);
      preDate.setMinutes(0);
      preDate.setSeconds(0);
      preDate.setMilliseconds(0);
      const date = new Date(preDate.getTime() + 24 * 60 * 60 * 1000);

      if (date.getTime() < today.getTime()) {
        invalidDate = true;
      }
    }
    return invalidDate ? { invalidDate } : null;
  };
}
