var main =
webpackJsonp_name_([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MainComponent = class MainComponent {
    constructor(router) {
        this.router = router;
        //menu
        this.linkDashboard = true;
        this.linkMoney = false;
        router.events.forEach((event) => {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                this.linkDashboard = false;
                this.linkMoney = false;
                switch (event.urlAfterRedirects) {
                    case '/dashboard':
                        this.linkDashboard = true;
                        break;
                    case '/money':
                        this.linkMoney = true;
                        break;
                    default:
                }
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    ngAfterViewInit() {
        this.getdfdf();
    }
    getdfdf() {
    }
};
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'main-component',
        template: __webpack_require__(172),
        styles: [__webpack_require__(215)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
], MainComponent);



/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DashboardComponent = class DashboardComponent {
    ngAfterViewInit() {
    }
};
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__(173),
        providers: []
    })
], DashboardComponent);



/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_money_service__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MoneyComponent = class MoneyComponent {
    constructor(moneyService) {
        this.moneyService = moneyService;
    }
    getMoneys() {
        this.moneyService
            .getMoneys()
            .then(row => { this.moneys = row; });
    }
    onSelectMoney(eee) {
        alert(eee);
    }
    ngAfterViewInit() {
        this.getMoneys();
    }
};
MoneyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'money-one',
        template: __webpack_require__(174),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewEncapsulation */].Emulated,
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_money_service__["a" /* MoneyService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_money_service__["a" /* MoneyService */]])
], MoneyComponent);



/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyShortComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MoneyShortComponent = class MoneyShortComponent {
    constructor() {
        this.onSelectMoney = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* EventEmitter */]();
    }
    clickOneMoney(monId) {
        if (monId != null) {
            this.onSelectMoney.emit(monId);
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], MoneyShortComponent.prototype, "onSelectMoney", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('moneys'),
    __metadata("design:type", Array)
], MoneyShortComponent.prototype, "moneys", void 0);
MoneyShortComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'money-short',
        template: __webpack_require__(175),
        styles: [__webpack_require__(216)]
    })
], MoneyShortComponent);



/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MoneyService = class MoneyService {
    constructor(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.moneysUrl = 'api/data';
    }
    getMoneys() {
        return this.http.get(this.moneysUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getMoney(id) {
        const url = `${this.moneysUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    delete(id) {
        const url = `${this.moneysUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    create(name) {
        return this.http
            .post(this.moneysUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    update(money) {
        const url = `${this.moneysUrl}/${money.moneyID}`;
        return this.http
            .put(url, JSON.stringify(money), { headers: this.headers })
            .toPromise()
            .then(() => money)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
MoneyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
], MoneyService);



/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "a i.fa {\n  color: black;\n}", ""]);

// exports


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\r\n    <h1><a href=\"/index.html\">Unicorn Admin</a></h1>\r\n    <a id=\"menu-trigger\" href=\"#\"><i class=\"fa fa-align-justify\"></i></a>\r\n</div>\r\n<div id=\"user-nav\">\r\n    <ul class=\"btn-group\">\r\n        <li class=\"btn\"><a title=\"\" href=\"#\"><i class=\"fa fa-user\"></i> <span class=\"text\">Profile</span></a></li>\r\n        <li class=\"btn dropdown\" id=\"menu-messages\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" data-target=\"#menu-messages\" class=\"dropdown-toggle\"><i class=\"fa fa-envelope\"></i> <span class=\"text\">Messages</span> <span class=\"label label-danger\">5</span> <b class=\"caret\"></b></a>\r\n        </li>\r\n        <li class=\"btn\"><a title=\"\" href=\"#\"><i class=\"fa fa-cog\"></i> <span class=\"text\">Settings</span></a></li>\r\n        <li class=\"btn\"><a title=\"\" href=\"/Home/Logout\"><i class=\"fa fa-share\"></i> <span class=\"text\">Logout</span></a></li>\r\n    </ul>\r\n</div>\r\n<div id=\"sidebar\">\r\n    <div id=\"search\">\r\n        <input type=\"text\" placeholder=\"Search here...\" /><button type=\"submit\" class=\"tip-right\" title=\"Search\"><i class=\"fa fa-search\"></i></button>\r\n    </div>\r\n    <ul>\r\n        <li [ngClass]=\"{'active':linkDashboard}\"><a [routerLink]=\"['/dashboard']\" ><i class=\"fa fa-home\"></i> <span>Dashboard</span></a></li>\r\n        <li [ngClass]=\"{'active':linkMoney}\"><a [routerLink]=\"['/money']\" ><i class=\"fa fa-th\"></i> <span>Money</span></a></li>\r\n\r\n        <li class=\"submenu\">\r\n            <a href=\"#\"><i class=\"fa fa-flask\"></i> <span>UI Lab</span> <i class=\"arrow fa fa-chevron-right\"></i></a>\r\n            <ul>\r\n                <li><a href=\"interface.html\">Interface Elements</a></li>\r\n                <li><a href=\"jquery-ui.html\">jQuery UI</a></li>\r\n                <li><a href=\"buttons.html\">Buttons &amp; icons</a></li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"submenu\">\r\n            <a href=\"#\"><i class=\"fa fa-th-list\"></i> <span>Form elements</span> <i class=\"arrow fa fa-chevron-right\"></i></a>\r\n            <ul>\r\n                <li><a href=\"form-common.html\">Common elements</a></li>\r\n                <li><a href=\"form-validation.html\">Validation</a></li>\r\n                <li><a href=\"form-wizard.html\">Wizard</a></li>\r\n            </ul>\r\n        </li>\r\n        \r\n        <li><a href=\"grid.html\"><i class=\"fa fa-th-list\"></i> <span>Grid Layout</span></a></li>\r\n        <li class=\"submenu\">\r\n            <a href=\"#\"><i class=\"fa fa-file\"></i> <span>Sample pages</span> <i class=\"arrow fa fa-chevron-right\"></i></a>\r\n            <ul>\r\n                <li><a href=\"invoice.html\">Invoice</a></li>\r\n                <li><a href=\"chat.html\">Support chat</a></li>\r\n                <li><a href=\"calendar.html\">Calendar</a></li>\r\n                <li><a href=\"gallery.html\">Gallery</a></li>\r\n                <li><a href=\"messages.html\">Messages</a></li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href=\"charts.html\"><i class=\"fa fa-signal\"></i> <span>Charts &amp; graphs</span></a>\r\n        </li>\r\n        <li>\r\n            <a href=\"widgets.html\"><i class=\"fa fa-inbox\"></i> <span>Widgets</span></a>\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n<div id=\"content\">\r\n    <div id=\"content-header\">\r\n        <h1>Tables</h1>\r\n        <div class=\"btn-group\">\r\n            <a class=\"btn btn-large\" title=\"Manage Files\"><i class=\"fa fa-file\"></i></a>\r\n            <a class=\"btn btn-large\" title=\"Manage Users\"><i class=\"fa fa-user\"></i></a>\r\n            <a class=\"btn btn-large\" title=\"Manage Comments\"><i class=\"fa fa-comment\"></i><span class=\"label label-danger\">5</span></a>\r\n            <a class=\"btn btn-large\" title=\"Manage Orders\"><i class=\"fa fa-shopping-cart\"></i></a>\r\n        </div>\r\n    </div>\r\n    <div id=\"breadcrumb\">\r\n        <a [routerLink]=\"['/dashboard']\" title=\"Go to Home\" class=\"tip-bottom\"><i class=\"fa fa-home\"></i> Home</a>\r\n        <a href=\"#\" class=\"current\">Tables</a>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>";

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"widget-box\">\r\n            <div class=\"widget-title\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fa fa-th\"></i>\r\n                </span>\r\n                <h5>Static table</h5>\r\n            </div>\r\n            <div class=\"widget-content nopadding\">\r\n                page dashboard\r\n                <br />\r\n                <a [routerLink]=\"['/money']\" class=\"flip-link to-recover grey\">open money</a>\r\n                <br />\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div *ngIf=\"moneys!=null && moneys.length>0\">\r\n            <div class=\"widget-box\">\r\n                <div class=\"widget-content nopadding\">\r\n                    <money-short [moneys]=\"moneys\" (onSelectMoney)=\"onSelectMoney($event)\"></money-short>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Symbol</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let moneyProp of moneys\">\r\n            <td>{{moneyProp.name}}</td>\r\n            <td>{{moneyProp.shortName}}</td>\r\n            <td>\r\n                <a href=\"#\" (click)=\"clickOneMoney(moneyProp.moneyID);$event.preventDefault();\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                </a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(165);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(166);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(36);
module.exports = __webpack_require__(93);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_polyfills__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module_main__ = __webpack_require__(98);



function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module_main__["a" /* AppModuleMain */]);
}
main();


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleMain; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components_app_main_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components_dashboard_dashboard_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_components_money_money_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_components_money_moneyShort_component__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModuleMain = class AppModuleMain {
    isWork() {
        //require.ensure([], function (req) {
        //    let objReq = req('./myScript');
        //    objReq.dfdfdf();
        //    objReq();
        //}, 'jsServerName');
    }
};
AppModuleMain = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_components_app_main_component__["a" /* MainComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_components_app_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_7__app_components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__app_components_money_money_component__["a" /* MoneyComponent */], __WEBPACK_IMPORTED_MODULE_9__app_components_money_moneyShort_component__["a" /* MoneyShortComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__app_components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
                { path: 'money', component: __WEBPACK_IMPORTED_MODULE_8__app_components_money_money_component__["a" /* MoneyComponent */] },
                { path: '**', redirectTo: 'dashboard' }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppModuleMain);



/***/ })

},[222]);
//# sourceMappingURL=main.js.map