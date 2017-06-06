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

    private appid:number = 387281471607035;
    private uri:string;
    private mac:string;
    private client:string;
    private captive:Captive;
    private subscription: Subscription;
    private accepted:boolean = true;
    private fcode:string;
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
        console.log(window.location);
        //if no client, go away
        this.route.params.subscribe((param:Params)=>{
            if(param['client']){
                this.client = param['client'];
                this.uri = window.location.origin+"/"+this.client+"/fland"
            }else{
                this.router.navigate(['**']);
            }
        });
        this.route.queryParams.subscribe((param:Params)=>{
            this.mac=param['mac'];
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
    loginWithFacebook(){
        window.location.href =
            "https://www.facebook.com/dialog/oauth?client_id=" + this.appid + "&redirect_uri="+this.uri+"&response_type=token&state="+this.mac;
            //"https://www.facebook.com/dialog/oauth?client_id=387281471607035&scope=email&redirect_uri=http://localhost:8081/"+this.client+"/fland&state=6234";
    }


}