import {Component} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
    selector:"welcome",
    template:`
        <div>
        {{value | json}}
    </div>
    <div>
        {{accesstoken}}
    </div>
    <div>
        <button md-raised-button (click)="gotoForm()"> Log In with Form </button>
        <button md-raised-button (click)="loginWithFacebook()"> Log In with Facebook </button>
        <button md-raised-button (click)="loginWithFacebook()"> Log In with Instagram </button>
    </div>
    `
})
export class WelcomeComponent{
    constructor(private route : ActivatedRoute,private router:Router){
        this.route.params.subscribe((param:Params)=>{
            if(param['client']){

            }else{
                this.router.navigate(['**']);
            }
        })
    }
    gotoForm(){
        this.router.navigate(['form']);
    }
}