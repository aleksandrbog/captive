import {Component, OnInit, OnDestroy} from "@angular/core";
import {FacebookService, InitParams, LoginOptions} from 'ngx-facebook';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../service/http.service";
import {MdSnackBar} from "@angular/material";
import {CookieService} from "../service/cookie.service";
declare var window: any;

@Component({
    selector:"fland",
    templateUrl:"./fland.component.html",
    styleUrls:["../land.css"]
})
export class FlandComponent implements OnInit,OnDestroy{
    private loading : boolean = true;
    private client: string;
    private access_token: string;
    private mac: string;
    private user:any;
    private captive:any;

    constructor(
        private fb: FacebookService,
        private route:ActivatedRoute,
        private httpService:HttpService,
        public snackBar: MdSnackBar,
        private cookieService:CookieService
    ){
        let initParams: InitParams = {
            appId: '387281471607035',
            xfbml: true,
            version: 'v2.9'
        };

        this.route.params.subscribe((param:Params)=>{
                this.client = param['client'];
        });
        if(window.location.hash) {
            var hash = window.location.hash.substring(1);
            var hashList = hash.split("&");
            hashList.map(h=>{
                if(h.split("=")[0] == "access_token"){
                    this.access_token = h.split("=")[1]
                }
                if(h.split("=")[0] == "state"){
                    this.mac =  decodeURI(h.split("=")[1]);
                }
            })
        }
        this.httpService.getCaptive(this.client).subscribe(
            res=>{this.captive=res;
            fb.init(initParams);
                this.fb.api('/me?access_token='+this.access_token)
                    .then(user => {
                        this.user = user;
                        //post data to check
                        this.postData();
                    })
                    .catch(e => {
                        console.log(e);
                        // this.cookieService.deleteCookie("session");window.location.href="google.com";
                    });

            }
        )

        const params: any = {
            access_token: this.access_token
        };

    }
    ngOnInit(): void {
        console.log(decodeURI(this.mac));
        console.log(this.user);
        window.FB.XFBML.parse();
    }

    ngOnDestroy(): void {
    }

    private postData() {
        console.log(this.mac + " " + this.user + " " + this.client);
        this.httpService.registerSessionFacebook(this.client,this.user,this.mac)
            .subscribe(
                (res:any)=>{
                    this.loading = false;
                    console.log(res);
                    //save session id
                    this.cookieService.setCookie("session",res.sessionId,1);
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
}