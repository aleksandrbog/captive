import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FacebookModule } from 'ngx-facebook';
import {RouterModule} from "@angular/router";
import {RegisterFormComponent} from "./form/register.form";
import {MyOwnCustomMaterialModule} from "./material.module";
import {WelcomeComponent} from "./welcome.component";
import {PageNotFoundComponent} from "./page-not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path:'welcome/:client',component:WelcomeComponent,
            },
            {
                path:'**',component:PageNotFoundComponent,
            },
            {
                path:'welcome/:client/form',component:RegisterFormComponent,
            },


        ]),
        FacebookModule.forRoot(),
        MyOwnCustomMaterialModule
    ],
    declarations: [
        AppComponent,RegisterFormComponent,WelcomeComponent,PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
