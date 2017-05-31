import {Component} from "@angular/core"
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
    selector:'register-form',
    templateUrl:'./register.form.html'
})
export class RegisterFormComponent{
    form: FormGroup;
    constructor(private fb:FormBuilder){

    }
    createForm(){
        this.fb.group({
            first:['',Validators.required],
            last:['',Validators.required],
        })
    }

}