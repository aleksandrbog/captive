import {Component, OnDestroy, OnInit, Input} from "@angular/core";
import {HttpService} from "./service/http.service";
import {CookieService} from "./service/cookie.service";
import {MdSnackBar} from "@angular/material";

@Component({
    selector:"enable-internet",
    template:`
    <button md-raised-button [color]="primary" (click)="enableInternet()" [disabled]="enabling">
        <div style="display: flex;flex-direction: row">
            <md-spinner style="width:24px;height: 24px" *ngIf="enabling"></md-spinner>
            <div>Enable internet</div>
        </div>
    </button>
`
})
export class EnableInternet implements OnInit,OnDestroy{
    enabling:boolean = false;
    @Input() client:string;
    constructor(
        private httpService:HttpService,
        private cookieService:CookieService,
        public snackBar: MdSnackBar

    ){

    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
    enableInternet(){
        this.enabling = true;
        this.httpService.enableInternet(this.client,this.cookieService.getCookie("session"))
            .subscribe(
                (res:any)=>{
                    this.enabling = false;
                    this.snackBar.open("Success, page will disappear in the moment", '', {
                        duration: 3000
                    });
                },
                (error:any)=>{
                    this.enabling = false;
                    console.log(error);
                    this.snackBar.open(error, '', {
                        duration: 3000
                    });
                }
            )


    }

}