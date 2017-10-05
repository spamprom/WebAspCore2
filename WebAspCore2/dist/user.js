var user =
webpackJsonp_name_([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_main_component_app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_recover_recover_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AppModuleUser = class AppModuleUser {
    isWork() {
        //require.ensure([], function (req) {
        //    let objReq = req('./myScript');
        //    objReq.dfdfdf();
        //    objReq();
        //}, 'jsServerName');
    }
};
AppModuleUser = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__components_main_component_app_component__["a" /* AppComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_main_component_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__components_recover_recover_component__["a" /* RecoverComponent */], __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/User/Login', pathMatch: 'full' },
                { path: 'User/Login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
                { path: 'User/Recover', component: __WEBPACK_IMPORTED_MODULE_9__components_recover_recover_component__["a" /* RecoverComponent */] },
                { path: 'User/Register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
                { path: '**', redirectTo: 'User/Login' }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */]
        ]
    })
], AppModuleUser);



/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.login = new __WEBPACK_IMPORTED_MODULE_2__model_Login__["a" /* Login */]();
        this.hasError = false;
        this.startLogin = false;
    }
    onLogin() {
        this.hasError = false;
        if (this.login.userName == null || this.login.password == null) {
            this.hasError = true;
        }
        else {
            this.startLogin = true;
            this.authService.login(this.login).then(res => {
                if (res) {
                    this.hasError = false;
                    //this.router.navigate(['/User', 'Home']);
                    document.location.href = '/';
                }
                else {
                    this.hasError = true;
                    this.startLogin = false;
                }
            });
        }
        //
        //require.ensure([], function (req) {
        //    let objReq = req('./myScript');
        //    objReq.dfdfdf();
        //    objReq();
        //}, 'jsServerName');
    }
};
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(178),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]])
], LoginComponent);



/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-component',
        template: __webpack_require__(179),
        styles: [__webpack_require__(224)]
    })
], AppComponent);



/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RecoverComponent = class RecoverComponent {
};
RecoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'recover',
        template: __webpack_require__(180),
        styles: [__webpack_require__(221)]
    })
], RecoverComponent);



/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RegisterComponent = class RegisterComponent {
};
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(181),
        styles: [__webpack_require__(222)]
    })
], RegisterComponent);



/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Login {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Login;



/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div id=\"loginform\" >\r\n    <p>Enter username and password to continue.</p>\r\n    <div class=\"input-group input-sm\" [ngClass]=\"{'has-error':hasError}\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span><input class=\"form-control\" type=\"text\" id=\"username\"  [(ngModel)]=\"login.userName\" placeholder=\"Username\" />\r\n    </div>\r\n    <div class=\"input-group\" [ngClass]=\"{'has-error':hasError}\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span><input class=\"form-control\" type=\"password\" id=\"password\"  [(ngModel)]=\"login.password\" placeholder=\"Password\" />\r\n    </div>\r\n    <div class=\"form-actions clearfix\">\r\n        <div class=\"pull-left\">\r\n            <a [routerLink]=\"['/User', 'Register']\" class=\"flip-link to-register blue\" >Create new account</a>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/User', 'Recover']\" class=\"flip-link to-recover grey\" >Lost password?</a>\r\n        </div>\r\n        <input type=\"submit\" (click)=\"onLogin()\"  *ngIf=\"!startLogin\" class=\"btn btn-block btn-primary btn-default\" value=\"Login\" />\r\n    </div>\r\n</div>\r\n    \r\n";

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<form id=\"recoverform\" action=\"#\">\r\n    <p>Enter your e-mail address below and we will send you instructions how to recover a password.</p>\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span><input class=\"form-control\" type=\"text\" placeholder=\"E-mail address\" />\r\n    </div>\r\n    <div class=\"form-actions clearfix\">\r\n        <div class=\"pull-left\">\r\n            <a [routerLink]=\"['/User','Login']\"  class=\"grey flip-link to-login\">Click to login</a>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/User','Register']\" class=\"blue flip-link to-register\">Create new account</a>\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-block btn-inverse\" value=\"Recover\" />\r\n    </div>\r\n</form>";

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<form id=\"registerform\" action=\"#\">\r\n    <p>Enter information required to register:</p>\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span><input class=\"form-control\" type=\"text\" placeholder=\"Enter Username\" />\r\n    </div>\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span><input class=\"form-control\" type=\"password\" placeholder=\"Choose Password\" />\r\n    </div>\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span><input class=\"form-control\" type=\"password\" placeholder=\"Confirm password\" />\r\n    </div>\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span><input class=\"form-control\" type=\"text\" placeholder=\"Enter E-mail address\" />\r\n    </div>\r\n    <div class=\"form-actions clearfix\">\r\n        <div class=\"pull-left\">\r\n            <a [routerLink]=\"['/User','Login']\"  class=\"grey flip-link to-login\">Click to login</a>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/User','Recover']\" class=\"grey flip-link to-recover\">Lost password?</a>\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-block btn-success\" value=\"Register\" />\r\n    </div>\r\n</form>";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(167);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(168);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(169);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(170);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(36);
module.exports = __webpack_require__(95);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.dataUrl = 'api/data';
    }
    login(login) {
        const url = this.dataUrl + `/Login`;
        return this.http
            .post(url, JSON.stringify(login), { headers: this.headers })
            .toPromise()
            .then(res => {
            let result = res.json().succeeded;
            return result;
        })
            .catch(this.handleError);
    }
    logout() {
        const url = `${this.dataUrl}/Logout`;
        this.http.get(url);
        //this.router.navigate(['/User', 'Login']);
        //this.router.navigateByUrl('/User/Login');
        document.location.href = '/';
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
], AuthService);



/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_polyfills__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module_user__ = __webpack_require__(101);



function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module_user__["a" /* AppModuleUser */]);
}
main();


/***/ })

},[233]);
//# sourceMappingURL=user.js.map