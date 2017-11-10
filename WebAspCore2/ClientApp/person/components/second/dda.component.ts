import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from "@angular/forms";

@Component({
    selector: 'dda',
    templateUrl: 'dda.component.html',
    styleUrls: [ 'dda.component.scss']
})
export class DdaComponent implements OnInit {
    ngOnInit(): void {
        this.loginForm.valueChanges.subscribe(data => { console.log(data) });
        this.loginForm.statusChanges.subscribe(data => { console.log(data) });
    }

    loginForm: FormGroup;
    genders = ['male', 'female'];

    penders = ['ma2le', 'fe2male'];

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group(
            {
                username: ['tttt', [Validators.required, this.checkIsCommonText], this.customAsyncValidator],
                email: ['email', [Validators.required, Validators.email]],
                password: [],
                confPassword: [],
                city: ['', [isNumberPresent]],
                gender: 'male',
                pender: 'ma2le',
                phones: new FormArray([
                    new FormControl('', Validators.required)
                ])
            });
    }
    addPhone()
    {
        (<FormArray>this.loginForm.controls['phones'])
            .push(new FormControl('', Validators.required));
    }
    //constructor()
    //{
    //    this.loginForm = new FormGroup(
    //        {
    //            username: new FormControl('tttt', Validators.required),
    //            email: new FormControl('tttt', [Validators.required, Validators.email]),
    //            password: new FormControl(),
    //            confPassword: new FormControl(),
    //            city: new FormControl(),
    //            gender: new FormControl('male'),
    //            pender: new FormControl('male')
    //        });
    //}

    onSubmit() {
        alert(33)
        console.log(this.loginForm)
    }

    checkIsCommonText(firstControl: FormControl): any {/*: { [s: string]: boolean }*/
        const field = firstControl.value;
        const onlyLetterRegexp = '^[a-zA-Z]+$';

        const regexp = new RegExp(onlyLetterRegexp);
        if (regexp.test(field)) {
            return null;
        } else {
            return { onlyTextRequiredError: true };
        }
    }

    customAsyncValidator(control: FormControl): Promise<any> {

        //clearTimeout(checkValid);
        //checkValid = setTimeout(function () {
        //},200)

        console.log('GO server!!');
        const promise = new Promise(resolve => {
            setTimeout(() =>
            {
                if (control.value == "123")
                {
                    resolve({
                        onlyTextRequiredError: true,
                    })
                } else
                {
                    resolve({});
                }
            })
        });

        return promise;
    }
}

export function isNumberPresent(abstractControl: AbstractControl) {
    const field = abstractControl.value;
    const regexp = new RegExp('^[a-zA-Z]+$');

    if (regexp.test(field)) {
        return null;
    } else {
        return { onlyTextRequiredError: true };
    }
}

