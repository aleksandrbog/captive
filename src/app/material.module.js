"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var MyOwnCustomMaterialModule = (function () {
    function MyOwnCustomMaterialModule() {
    }
    return MyOwnCustomMaterialModule;
}());
MyOwnCustomMaterialModule = __decorate([
    core_1.NgModule({
        imports: [material_1.MdButtonModule, material_1.MdCheckboxModule, animations_1.BrowserAnimationsModule, material_1.MdInputModule, material_1.MdCardModule],
        exports: [material_1.MdButtonModule, material_1.MdCheckboxModule, animations_1.BrowserAnimationsModule, material_1.MdInputModule, material_1.MdCardModule],
    })
], MyOwnCustomMaterialModule);
exports.MyOwnCustomMaterialModule = MyOwnCustomMaterialModule;
//# sourceMappingURL=material.module.js.map