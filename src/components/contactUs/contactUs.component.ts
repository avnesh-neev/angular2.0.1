import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactUsService } from './contactUs.service';

const template: string = require('./contactUs.html');

@Component({
    selector: 'contactUs',
    template,
    providers: [ ContactUsService ]
})

export class ContactUsComponent {
	// user: any = {
	// 	firstName: '', 
	// 	lastName: '',
	// 	email: ''
	// };

 //  onSubmitTemplateBased() {
 //  	console.log(this.user);
 //  }
 
 	form: FormGroup;
    
    name = new FormControl("", Validators.required);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "name": this.name,
            "mobile":["", Validators.required],
            "message":["", Validators.compose([Validators.required, Validators.minLength(10)])]
        });
    }
    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form.value);
    }
}