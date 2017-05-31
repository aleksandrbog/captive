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
var WelcomeComponent = (function () {
    function WelcomeComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (param) {
            if (param['client']) {
            }
            else {
                _this.router.navigate(['**']);
            }
        });
    }
    WelcomeComponent.prototype.gotoForm = function () {
        this.router.navigate(['form']);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: "welcome",
        template: "\n        <div>\n        {{value | json}}\n    </div>\n    <div>\n        {{accesstoken}}\n    </div>\n    <div>\n        <button md-raised-button (click)=\"gotoForm()\"> Log In with Form </button>\n        <button md-raised-button (click)=\"loginWithFacebook()\"> Log In with Facebook </button>\n        <button md-raised-button (click)=\"loginWithFacebook()\"> Log In with Instagram </button>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map