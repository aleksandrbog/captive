import {MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule,MdProgressSpinnerModule,
    MdSnackBarModule} from '@angular/material';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule,MdInputModule,MdCardModule,
        MdProgressSpinnerModule,MdSnackBarModule],
    exports: [MdButtonModule, MdCheckboxModule,BrowserAnimationsModule,MdInputModule,MdCardModule,
        MdProgressSpinnerModule,MdSnackBarModule],
})
export class MyOwnCustomMaterialModule { }