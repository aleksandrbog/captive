import {Component, OnInit} from '@angular/core';
import '../assets/css/styles.css';
import {FacebookService, InitParams, LoginResponse, AuthResponse, LoginOptions} from "ngx-facebook";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "./service/http.service";
import {CaptiveStore} from "./service/captive.store";
import {CookieService} from "./service/cookie.service";
import {error} from "util";
import {Captive} from "./model/captive";

declare var window: any;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent implements  OnInit{
    ngOnInit(): void {
    }
    private captive:any;
    private client:string;
    private resolution:string;
    private errorMessage:string;
    constructor(private route : ActivatedRoute,
                private router:Router,
                private httpService:HttpService,
                private captiveStore:CaptiveStore,
                private cookieService:CookieService
    ) {
       // this.getCaptive();
        this.client = window.location.pathname.split("/")[1].trim();
        this.resolution = window.screen.availHeight +'x'+ window.screen.availWidth;
        this.route.queryParams.subscribe(params => {
            console.log(params);
        });
        this.postClientInfo();
        captiveStore.captive.subscribe(
            (captive:Captive)=>{this.captive = captive;console.log(captive);}
        );
    }
    /*Method post client info to database*/
    postClientInfo(){
        this.resolution = window.screen.availHeight +'x'+ window.screen.availWidth;
        console.log(window.screen.availHeight +' '+ window.screen.availWidth);
        console.log(navigator.userAgent);
    };
}
