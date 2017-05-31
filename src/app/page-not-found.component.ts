import {Component} from "@angular/core";
@Component({
    selector:"error",
    template:`
        error, page not found
    `
})
export class PageNotFoundComponent{
    constructor(){
        console.log("error");
    }
}