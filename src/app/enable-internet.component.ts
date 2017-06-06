import {Component, OnDestroy, OnInit} from "@angular/core";

@Component({
    selector:"enable-internet",
    template:`
    <button md-raised-button [color]="primary">Enable internet</button>
`
})
export class EnableInternet implements OnInit,OnDestroy{
    constructor(){

    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}