import {Component, OnInit} from "@angular/core"
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector:'validate-form',
    templateUrl:'./validate.form.html'
})
export class ValidateFormComponent implements OnInit{
    private form: FormGroup;
    private client:string;
    private code:string = "";

    constructor(private fb:FormBuilder,
                private router:Router,
                private route : ActivatedRoute
    ){
        this.route.params.subscribe((param:Params)=>{
            if(param['client']){
                this.client = param['client'];
            }else{
                this.router.navigate(['**']);
            }
        })
        this.createForm();
    }
    ngOnInit(): void {

    }

    createForm(){
        this.form = this.fb.group({
            code:[this.code,Validators.required],
        });
    }
    onSubmit(){
        console.log(this.form.value);
        //show loader

        //send data to server

        //get data, redirect to validate
        this.router.navigate([this.client+"/land"])
    }
    cancel(){
        this.router.navigate([this.client+"/welcome"]);
    }

}