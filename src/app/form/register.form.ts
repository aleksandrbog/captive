import {Component, OnInit} from "@angular/core"
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PhoneValidator} from "../shared/phone.validator";
import {HttpService} from "../service/http.service";
import {MdSnackBar} from "@angular/material";

@Component({
    selector:'register-form',
    templateUrl:'./register.form.html'
})
export class RegisterFormComponent implements OnInit{
    private form: FormGroup;
    private client:string;
    private mac:string;
    private name:string="";

    constructor(private fb:FormBuilder,
                private router:Router,
                private route : ActivatedRoute,
                private httpService : HttpService,
                public snackBar: MdSnackBar
    ){
        this.route.params.subscribe((param:Params)=>{
            if(param['client']){
                this.client = param['client'];
            }else{
                this.router.navigate(['**']);
            }
        });
        this.route.queryParams.subscribe((param:Params)=>{
            this.mac=param['mac'];
        })

        this.createForm();
    }
    ngOnInit(): void {

    }

    createForm(){
        this.form = this.fb.group({
            firstName:[this.name,Validators.required],
            lastName:['',Validators.required],
            birthday:['',Validators.required],
            phone:['+971',[
                Validators.required,
                PhoneValidator()]
            ],
        });
        this.form.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }
    onValueChanged(data?: any) {
        if (!this.form) { return; }
        const form = this.form;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                console.log(control);
                const messages = this.validationMessages[field];
                console.log("messages"+messages);
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    formErrors = {
        'name': '',
        'phone': ''
    };
    validationMessages = {
        'first': {
            'required':      'Name is required.',
            'minlength':     'Name must be at least 4 characters long.',
            'maxlength':     'Name cannot be more than 24 characters long.',
        },
        'phone':{
            'maxlength':     'Name cannot be more than 10 characters long.',
            'wrongPhone':   'wrong number'
        },
        'power': {
            'required': 'Power is required.'
        }
    };
    onSubmit(){
        console.log(this.form.value);
        //show loader

        //send data to server
        this.httpService.registerSession(this.form.value,this.client,this.mac).subscribe(
            (res:any)=>{
                console.log(res);
                //correct, redirect to validate
                this.router.navigate([this.client+"/validate"],{queryParams:{mac:this.mac}})
            },
            (error:any)=>{
                console.log(error);
                this.snackBar.open(error, '', {
                    duration: 3000
                });
            }
        )

    }
    cancel(){
        this.router.navigate([this.client+"/welcome"]);
    }

}