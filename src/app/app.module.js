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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var register_form_1 = require("./form/register.form");
var material_module_1 = require("./material.module");
var welcome_component_1 = require("./welcome.component");
var page_not_found_component_1 = require("./page-not-found.component");
var http_service_1 = require("./service/http.service");
var http_1 = require("@angular/http");
var validate_form_1 = require("./form/validate.form");
var captive_store_1 = require("./service/captive.store");
var fland_component_1 = require("./facebook/fland.component");
var land_component_1 = require("./form/land.component");
var enable_internet_component_1 = require("./enable-internet.component");
var cookie_service_1 = require("./service/cookie.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: ':client/welcome', component: welcome_component_1.WelcomeComponent,
                },
                {
                    path: ':client/form', component: register_form_1.RegisterFormComponent,
                },
                {
                    path: ':client/validate', component: validate_form_1.ValidateFormComponent,
                },
                {
                    path: ':client/fland', component: fland_component_1.FlandComponent,
                },
                {
                    path: ':client/land', component: land_component_1.LandComponent,
                },
                {
                    path: '**', component: page_not_found_component_1.PageNotFoundComponent,
                },
            ]),
            ngx_facebook_1.FacebookModule.forRoot(),
            material_module_1.MyOwnCustomMaterialModule
        ],
        declarations: [
            app_component_1.AppComponent,
            register_form_1.RegisterFormComponent, validate_form_1.ValidateFormComponent,
            welcome_component_1.WelcomeComponent,
            page_not_found_component_1.PageNotFoundComponent, fland_component_1.FlandComponent, land_component_1.LandComponent, enable_internet_component_1.EnableInternet
        ],
        providers: [http_service_1.HttpService, captive_store_1.CaptiveStore, cookie_service_1.CookieService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map