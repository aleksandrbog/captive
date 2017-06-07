import {Injectable} from "@angular/core";
import {Captive} from "../model/captive";
import {HttpService} from "./http.service";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CaptiveStore{
    private _captive: BehaviorSubject<Captive> = new BehaviorSubject(new Captive());
    constructor(
        private httpService:HttpService,

    ){
        console.log("captive service constructor");
        let client = window.location.pathname.split("/")[1].trim();

        this.httpService.getCaptive(client).subscribe(

            (captive:Captive)=>this._captive.next(
                captive
            )
        );
    }
    get captive() {
        return new Observable(fn => this._captive.subscribe(fn));
    }

}