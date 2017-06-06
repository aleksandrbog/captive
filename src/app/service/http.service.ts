import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Captive} from "../model/captive";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{

    captive:Captive;
    constructor(private http:Http){}

    init(){
        console.log("init");
       this.getCaptive();
    }
    getCaptive(): Observable<Captive> {
        let url:string = "https://unity-wifi.net/rest/captive/v2/37";
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    registerSession(data:any):Observable<any>{
        let url:string = "http://10.1.77.208:8080/rest/captive/v2/register";
        return this.http.post(url,data,null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}