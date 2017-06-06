import {Component, OnInit, OnDestroy} from "@angular/core";
import {FacebookService, InitParams, LoginOptions} from 'ngx-facebook';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector:"fland",
    templateUrl:"./fland.component.html"
})
export class FlandComponent implements OnInit,OnDestroy{
    private client: string;
    private access_token: string;
    private mac: string;
    private user:any;

    constructor(private fb: FacebookService,private route:ActivatedRoute){
        let initParams: InitParams = {
            appId: '387281471607035',
            xfbml: true,
            version: 'v2.9'
        };

        fb.init(initParams);
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

        this.fb.api('/me?access_token='+this.access_token)
                .then(user => {
                    this.user = user;
                    //post data to check
                    this.postData();
                })
                .catch(e => console.log(e));

        const params: any = {
            access_token: this.access_token
        };

    }
    ngOnInit(): void {
        console.log(decodeURI(this.mac));
        console.log(this.user);
    }

    ngOnDestroy(): void {
    }

    private postData() {
        console.log(this.mac + " " + this.user + " " + this.client);
    }
}