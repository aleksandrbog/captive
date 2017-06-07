import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Captive} from "../model/captive";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
    private headers : Headers;
    private options : RequestOptions;
    private base: string = "https://unity-wifi.net"
    captive:Captive;
    constructor(private http:Http){
        this.headers = new Headers({ 'Accept': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

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
    registerSession(data:any,client:string,mac:string):Observable<any>{
        let url:string = this.base + "/rest/captive/v2/form?client="+client+"&mac="+mac;
        return this.http.post(url,data,this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    validateSession(code:any,client:string,mac:string):Observable<any>{
        let url:string = "http://10.1.77.208:8080/rest/captive/v2/form/verify?client="+client+"&mac="+mac;
        return this.http.post(url,code,this.options)
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

    registerSessionFacebook(client: string, user: any, mac: string) {
        let url:string = this.base + "/rest/captive/v2/facebook?client="+client+"&mac="+mac;
        return this.http.post(url,user,this.options)
            .map(this.extractData)
            .catch(this.handleError);

    }
    enableInternet(client: string, session: string|string) {
        let url:string = this.base +  "/rest/captive/v2/enable/" +client+"?session="+session;
        return this.http.post(url,{},this.options)
            .map(this.extractData)
            .catch(this.handleError);


    }

    getSession(session: string) {
        let url:string = this.base + "/rest/captive/v2/session/"+session;
        return this.http.get(url,this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}