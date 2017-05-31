import {Component} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
    selector:"welcome",
    templateUrl:"welcome.component.html",
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent{
    private client:string;
    constructor(private route : ActivatedRoute,private router:Router){
        this.route.params.subscribe((param:Params)=>{
            if(param['client']){
                this.client = param['client'];
            }else{
                this.router.navigate(['**']);
            }
        })
    }
    gotoForm(){
        this.router.navigate(['form']);
    }
}