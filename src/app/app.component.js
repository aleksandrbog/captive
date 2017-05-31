"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("../assets/css/styles.css");
var ngx_facebook_1 = require("ngx-facebook");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(fb, route) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.value = "none";
        this.accesstoken = "none";
        this.code = "none";
        /* Facebook init params */
        var initParams = {
            appId: '387281471607035',
            xfbml: true,
            status: true,
            version: 'v2.8'
        };
        fb.init(initParams);
        fb.getLoginStatus().then(function (value) { _this.value = value; console.log(value); }).catch(function (error) { return _this.value = error; });
        window.FB.XFBML.parse();
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
        });
        this.route.fragment.subscribe(function (fragment) {
            if (fragment) {
                console.log("My hash fragment is here => ", fragment);
                _this.accesstoken = fragment.split("&")[0].split('=')[1];
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    /*Login with facebook method*/
    AppComponent.prototype.loginWithFacebook = function () {
        window.location.href = encodeURI("https://www.facebook.com/dialog/oauth?client_id=387281471607035&redirect_uri=http://unity-wifi.net:8081/?client=33&mac=00:00:00&response_type=token&scope=publish_actions&display=touch");
    };
    /*Login with facebook method facebook*/
    AppComponent.prototype.loginWithFacebookFB = function () {
        var options = {
            scope: 'public_profile,email',
            return_scopes: true,
            display: 'touch',
            redirect_uri: 'http://unity-wifi.net:8081/?client=33&mac=00:00:00',
        };
        this.fb.login(options)
            .then(function (response) { return console.log(response); })
            .catch(function (error) { return console.error(error); });
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
        }
        catch (e) {
            document.domain = 'facebook.com';
            if (!window.opener.closed) {
                window.opener.location.replace("<url>");
            }
        }
    };
    AppComponent.prototype.getAuthResponse = function () {
        var authResponse = this.fb.getAuthResponse();
        this.value = authResponse;
        console.log(authResponse);
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.fb.api("me?access_token=" + this.accesstoken).then(function (value) { _this.value = value; console.log(value); }).catch(function (error) { return _this.value = error; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [ngx_facebook_1.FacebookService, router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map