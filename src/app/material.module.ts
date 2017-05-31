import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule],
    exports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule],
})
export class MyOwnCustomMaterialModule { }