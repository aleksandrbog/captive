import {Component, OnInit, OnDestroy} from "@angular/core";
import {CookieService} from "../service/cookie.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    selector:"land",
    templateUrl:"./land.component.html",
    styleUrls:["../land.css"]
})
export class LandComponent implements OnInit,OnDestroy{
    session : string;
    constructor(
        private cookieService:CookieService,
        private router:Router,
        private route : ActivatedRoute,
    ){
        this.route.queryParams.subscribe((param:Params)=>{
            this.session=param['session'];
        })
        this.cookieService.setCookie("session",this.session,1);

    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}