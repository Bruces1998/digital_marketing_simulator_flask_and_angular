(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-sample-page-sample-page-module"],{

/***/ "./src/app/demo/pages/sample-page/sample-page-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/sample-page/sample-page-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SamplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function() { return SamplePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/demo/pages/sample-page/sample-page.component.ts");





const routes = [
    {
        path: '',
        component: _sample_page_component__WEBPACK_IMPORTED_MODULE_2__["SamplePageComponent"]
    }
];
class SamplePageRoutingModule {
}
SamplePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SamplePageRoutingModule });
SamplePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SamplePageRoutingModule_Factory(t) { return new (t || SamplePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/demo/pages/sample-page/sample-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/pages/sample-page/sample-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function() { return SamplePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SamplePageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SamplePageComponent.ɵfac = function SamplePageComponent_Factory(t) { return new (t || SamplePageComponent)(); };
SamplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SamplePageComponent, selectors: [["app-sample-page"]], decls: 0, vars: 0, template: function SamplePageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FtcGxlLXBhZ2Uvc2FtcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sample-page',
                templateUrl: './sample-page.component.html',
                styleUrls: ['./sample-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/demo/pages/sample-page/sample-page.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/sample-page/sample-page.module.ts ***!
  \**************************************************************/
/*! exports provided: SamplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageModule", function() { return SamplePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-page-routing.module */ "./src/app/demo/pages/sample-page/sample-page-routing.module.ts");
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-page.component */ "./src/app/demo/pages/sample-page/sample-page.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






class SamplePageModule {
}
SamplePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SamplePageModule });
SamplePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SamplePageModule_Factory(t) { return new (t || SamplePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePageModule, { declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"],
        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"],
                    _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=demo-pages-sample-page-sample-page-module-es2015.js.map