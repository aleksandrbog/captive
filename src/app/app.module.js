"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var ngx_facebook_1 = require("ngx-facebook");
var router_1 = require("@angular/router");
var register_form_1 = require("./form/register.form");
var material_module_1 = require("./material.module");
var welcome_component_1 = require("./welcome.component");
var page_not_found_component_1 = require("./page-not-found.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'welcome/:client', component: welcome_component_1.WelcomeComponent,
                },
                {
                    path: '**', component: page_not_found_component_1.PageNotFoundComponent,
                },
                {
                    path: 'welcome/:client/form', component: register_form_1.RegisterFormComponent,
                },
            ]),
            ngx_facebook_1.FacebookModule.forRoot(),
            material_module_1.MyOwnCustomMaterialModule
        ],
        declarations: [
            app_component_1.AppComponent, register_form_1.RegisterFormComponent, welcome_component_1.WelcomeComponent, page_not_found_component_1.PageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map