"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var phone_validator_1 = require("../shared/phone.validator");
var RegisterFormComponent = (function () {
    function RegisterFormComponent(fb, router, route) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.name = "";
        this.formErrors = {
            'name': '',
            'phone': ''
        };
        this.validationMessages = {
            'first': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
            },
            'phone': {
                'maxlength': 'Name cannot be more than 10 characters long.',
                'wrongPhone': 'wrong number'
            },
            'power': {
                'required': 'Power is required.'
            }
        };
        this.route.params.subscribe(function (param) {
            if (param['client']) {
                _this.client = param['client'];
            }
            else {
                _this.router.navigate(['**']);
            }
        });
        this.createForm();
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.fb.group({
            first: [this.name, forms_1.Validators.required],
            last: ['', forms_1.Validators.required],
            birthday: ['', forms_1.Validators.required],
            phone: ['+971', [
                    forms_1.Validators.required,
                    phone_validator_1.PhoneValidator()
                ]
            ],
        });
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RegisterFormComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                console.log(control);
                var messages = this.validationMessages[field];
                console.log("messages" + messages);
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegisterFormComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        this.router.navigate([this.client + "/validate"]);
    };
    RegisterFormComponent.prototype.cancel = function () {
        this.router.navigate([this.client + "/welcome"]);
    };
    return RegisterFormComponent;
}());
RegisterFormComponent = __decorate([
    core_1.Component({
        selector: 'register-form',
        templateUrl: './register.form.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute])
], RegisterFormComponent);
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register.form.js.map