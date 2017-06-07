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
var router_1 = require("@angular/router");
var http_service_1 = require("./service/http.service");
var captive_store_1 = require("./service/captive.store");
var cookie_service_1 = require("./service/cookie.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(httpService, route, router, captiveStore, cookieService) {
        var _this = this;
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.captiveStore = captiveStore;
        this.cookieService = cookieService;
        this.appid = 387281471607035;
        this.accepted = true;
        console.log("constructor captive=" + this.captive);
        console.log(window.location);
        this.route.params.subscribe(function (param) {
            if (param['client']) {
                _this.client = param['client'];
                _this.uri = window.location.origin + "/" + _this.client + "/fland";
            }
            else {
                _this.router.navigate(['**']);
            }
        });
        this.route.queryParams.subscribe(function (param) {
            _this.mac = param['mac'];
        });
        this.subscription = captiveStore.captive.subscribe(function (captive) { _this.captive = captive; console.log(captive); });
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init welcome=" + this.captive);
        var s = this.cookieService.getCookie("session");
        if (s) {
            this.httpService.getSession(s).subscribe(function (res) {
                if (res.type == 0) {
                    _this.router.navigate([_this.client + "/land"]);
                }
                if (res.type == 1) {
                    _this.router.navigate([_this.client + "/fland"]);
                }
            }, function (error) { console.log("session error=" + error); });
        }
    };
    WelcomeComponent.prototype.ngOnDestroy = function () {
        console.log("destroy welcome=" + this.captive);
        this.subscription.unsubscribe();
    };
    WelcomeComponent.prototype.gotoForm = function () {
        this.router.navigate([this.client + '/form'], { queryParams: { mac: this.mac } });
    };
    WelcomeComponent.prototype.loginWithFacebook = function () {
        window.location.href =
            "https://www.facebook.com/dialog/oauth?client_id=" + this.appid + "&redirect_uri=" + this.uri + "&response_type=token&state=" + this.mac;
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: "welcome",
        templateUrl: "welcome.component.html",
        styleUrls: ['./welcome.component.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        router_1.ActivatedRoute,
        router_1.Router,
        captive_store_1.CaptiveStore,
        cookie_service_1.CookieService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map