import {Component, OnInit} from "@angular/core"
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "../service/http.service";
import {MdSnackBar} from "@angular/material";

@Component({
    selector:'validate-form',
    templateUrl:'./validate.form.html'
})
export class ValidateFormComponent implements OnInit{
    private loading :boolean = false;
    private form: FormGroup;
    private client:string;
    private mac:string;
    private code:string = "";

    constructor(private fb:FormBuilder,
                private router:Router,
                private route : ActivatedRoute,
                private httpService:HttpService,
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
            code:[this.code,Validators.required],
        });
    }
    onSubmit(){
        console.log(this.form.value);
        //show loader
        this.loading = true;
        //send data to server
        this.httpService.validateSession(this.form.value,this.client,this.mac)
            .subscribe(
            (res:any)=>{
                this.loading = false;
                console.log(res);
                //correct, redirect to validate
                this.router.navigate([this.client+"/land"],{queryParams:{mac:this.mac,session:res.sessionid}})
            },
            (error:any)=>{
                this.loading = false;
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