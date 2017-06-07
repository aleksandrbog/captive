import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FacebookModule } from 'ngx-facebook';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {RegisterFormComponent} from "./form/register.form";
import {MyOwnCustomMaterialModule} from "./material.module";
import {WelcomeComponent} from "./welcome.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {HttpService} from "./service/http.service";
import {HttpModule} from "@angular/http";
import {ValidateFormComponent} from "./form/validate.form";
import {CaptiveStore} from "./service/captive.store";
import {FlandComponent} from "./facebook/fland.component";
import {LandComponent} from "./form/land.component";
import {EnableInternet} from "./enable-internet.component";
import {CookieService} from "./service/cookie.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path:':client/welcome',component:WelcomeComponent,
            },

            {
                path:':client/form',component:RegisterFormComponent,
            },
            {
                path:':client/validate',component:ValidateFormComponent,
            },
            {
                path:':client/fland',component:FlandComponent,
            },
            {
                path:':client/land',component:LandComponent,
            },
            {
                path:'**',component:PageNotFoundComponent,
            },
        ]),
        FacebookModule.forRoot(),
        MyOwnCustomMaterialModule
    ],
    declarations: [
        AppComponent,
        RegisterFormComponent,ValidateFormComponent,
        WelcomeComponent,
        PageNotFoundComponent,FlandComponent,LandComponent,EnableInternet
    ],
    providers:[HttpService,CaptiveStore,CookieService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
