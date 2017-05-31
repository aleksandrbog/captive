import {Component, OnInit} from '@angular/core';
import '../assets/css/styles.css';
import {FacebookService, InitParams, LoginResponse, AuthResponse, LoginOptions} from "ngx-facebook";
import {ActivatedRoute} from "@angular/router";
declare var window: any;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
    ngOnInit(): void {
    }

    value:any="none";
    accesstoken:any="none";
    code:any="none";

    constructor(private fb: FacebookService,private route : ActivatedRoute) {
        /* Facebook init params */
        let initParams: InitParams = {
            appId: '387281471607035',
            xfbml: true,
            status:true,
            version: 'v2.8'
        };
        fb.init(initParams);
        fb.getLoginStatus().then(value => {this.value = value;console.log(value)}).catch((error:any) => this.value = error);
        window.FB.XFBML.parse();

        this.route.queryParams.subscribe(params => {
            console.log(params);
        });
        this.route.fragment.subscribe((fragment: string) => {
            if(fragment){
                console.log("My hash fragment is here => ", fragment)
                this.accesstoken = fragment.split("&")[0].split('=')[1]
            }
        })
    }
    /*Login with facebook method*/
    loginWithFacebook(): void {
        window.location.href = encodeURI("https://www.facebook.com/dialog/oauth?client_id=387281471607035&redirect_uri=http://unity-wifi.net:8081/?client=33&mac=00:00:00&response_type=token&scope=publish_actions&display=touch");
    }
    /*Login with facebook method facebook*/
    loginWithFacebookFB(): void {

        const options: any = {
            scope: 'public_profile,email',
            return_scopes: true,
            display:'touch',
            redirect_uri: 'http://unity-wifi.net:8081/?client=33&mac=00:00:00' ,
        };
        this.fb.login(options)
         .then((response: LoginResponse) => console.log(response))
         .catch((error: any) => console.error(error));

        try {
            if (!window.opener.postMessage) {
                throw "postMessageUnsupported";
            }
            if (navigator.userAgent.indexOf("Trident") !== -1) {
                throw "postMessageBrokenInIE";
            }
            var message = "FB_POPUP:" + JSON.stringify({
                    reload: "<url>"
                });
            window.opener.postMessage(message, "https:\/\/www.facebook.com");
        } catch (e) {
            document.domain = 'facebook.com';
            if (!window.opener.closed) {
                window.opener.location.replace("<url>");
            }
        }
    }

    getAuthResponse(){
        const authResponse: AuthResponse = this.fb.getAuthResponse();
        this.value = authResponse;
        console.log(authResponse);
    }
    getUser(){
        this.fb.api("me?access_token="+this.accesstoken).then(value => {this.value = value;console.log(value)}).catch((error:any) => this.value = error);
    }

}
