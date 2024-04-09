import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { of } from "rxjs";
const patterns: RegExp[] = [/@gmail\.com$/, /@outlook\.com$/]

export function validateByEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.value as string;

        const forbidden = patterns.find(pattern => pattern.test(email))
        if (forbidden) {
            return { 'forbiddenPattern': true }
        }
        return null
    }
}