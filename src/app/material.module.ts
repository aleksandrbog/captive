import {MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule} from '@angular/material';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule,MdInputModule,MdCardModule],
    exports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule,MdInputModule,MdCardModule],
})
export class MyOwnCustomMaterialModule { }