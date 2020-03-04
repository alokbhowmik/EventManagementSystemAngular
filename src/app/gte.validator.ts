import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nameValidation(control: AbstractControl): ValidationErrors | null {
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
	const val = control.value;

	if (val.length < 3) {
		return { fnameValidation: true, requiredValue: 3 };
	}
	if (val.match(/(\d+)/)) {
		return { fnameValidation1: true, requiredValue: 'Number not allowed' };
	}
	if (format.test(val)) {
		console.log('format match ...');
		return { fnameValidation1: true, requiredValue: 'Special Character not allowed' };
	}
	return null;
}

export function mobValidation(control: AbstractControl): ValidationErrors | null {
	const mobNo = '' + control.value;
	console.log();
	if (mobNo === '1234567890' || mobNo.substr(0, 5) == '12345') {
		// console.log('error message is here ...')
		return { mobValidation: true, errorMessage: 'It is not a mobile no' };
	} else if (mobNo.length != 10) {
		return {
			mobValidation: true,
			errorMessage: 'Mobile No contain 10 digit only'
		};
	}
	return null;
}

export function passwordValidation(control: AbstractControl): ValidationErrors | null {
	const pwd = control.value;
	const regSmall = /[a-z]+/;
    const regCap = /[A-Z]+/;
    const spcReg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
	console.log(spcReg.test(pwd));
	if (pwd.length < 8) {
		return { passwordValidation: true, errorMessage: 'minimum 8 character required' };
	} else if (!regSmall.test(pwd)) {
		return { passwordValidation: true, errorMessage: 'one small character required' };
	} else if (!regCap.test(pwd)) {
		return { passwordValidation: true, errorMessage: 'one capital character required' };
	}else if(!spcReg.test(pwd)){
		return { passwordValidation: true, errorMessage: 'one special character required' };

    }
	return null;
}
