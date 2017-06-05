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
var router_1 = require("@angular/router");
var http_service_1 = require("./service/http.service");
var captive_store_1 = require("./service/captive.store");
var AppComponent = (function () {
    function AppComponent(route, router, httpService, captiveStore) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.captiveStore = captiveStore;
        this.client = window.location.pathname.split("/")[1].trim();
        this.resolution = window.screen.availHeight + 'x' + window.screen.availWidth;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
        });
        this.postClientInfo();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.postClientInfo = function () {
        this.resolution = window.screen.availHeight + 'x' + window.screen.availWidth;
        console.log(window.screen.availHeight + ' ' + window.screen.availWidth);
        console.log(navigator.userAgent);
    };
    ;
    AppComponent.prototype.getCaptive = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        http_service_1.HttpService,
        captive_store_1.CaptiveStore])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map