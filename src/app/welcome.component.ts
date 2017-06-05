import {Component, OnInit,OnDestroy} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "./service/http.service";
import {Captive} from "./model/captive";
import {CaptiveStore} from "./service/captive.store";
import {Subscription} from "rxjs/Subscription";
@Component({
    selector:"welcome",
    templateUrl:"welcome.component.html",
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit,OnDestroy{
    errorMessage: any;
    private client:string;
    private captive:Captive;
    private subscription: Subscription;
    private accepted:boolean = true;
    constructor(
        private httpService:HttpService,
        private route : ActivatedRoute,
        private router:Router,
        private captiveStore:CaptiveStore
    ){
        console.log("constructor captive=" +this.captive);

        this.subscription = captiveStore.captive.subscribe(
            (captive:Captive)=>{this.captive = captive;console.log(captive);}
        );

        this.route.params.subscribe((param:Params)=>{
            if(param['client']){
                this.client = param['client'];
            }else{
                this.router.navigate(['**']);
            }
        })
    }
    ngOnInit(): void {
        console.log("init welcome=" +this.captive);
    }
    ngOnDestroy():void{
        console.log("destroy welcome=" +this.captive);
        this.subscription.unsubscribe();
    }
    gotoForm(){
        this.router.navigate([this.client+'/form']);
    }
}