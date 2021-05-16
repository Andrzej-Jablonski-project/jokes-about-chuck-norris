(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrzej/DEV/angular-project/chuck-api/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
        this.API_BASE_URL = 'https://api.icndb.com';
    }
    getJoke() {
        return this.http.get(`${this.API_BASE_URL}/jokes/random`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(result => result.value));
    }
    getJokeNerdy() {
        return this.http.get(`${this.API_BASE_URL}/jokes/random?limitTo=[nerdy]`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(result => result.value));
    }
    getJokeExplicit() {
        return this.http.get(`${this.API_BASE_URL}/jokes/random?limitTo=[explicit]`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(result => result.value));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IhOl":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CategoriesComponent {
    constructor() {
        this.eventSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categories = [
            { id: 1, name: 'Explicit' },
            { id: 2, name: 'Nerdy' },
        ];
    }
    ngOnInit() {
    }
    getSelectValue(event) {
        this.eventSelect.emit(event.name.toLocaleLowerCase());
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], outputs: { eventSelect: "eventSelect" }, decls: 1, vars: 4, consts: [["bindLabel", "name", "bindValue", "id", "placeholder", "Categories", 1, "main", 3, "ngModel", "items", "clearable", "searchable", "change", "ngModelChange"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoriesComponent_Template_ng_select_change_0_listener($event) { return ctx.getSelectValue($event); })("ngModelChange", function CategoriesComponent_Template_ng_select_ngModelChange_0_listener($event) { return ctx.selectedCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCategory)("items", ctx.categories)("clearable", false)("searchable", false);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Rcx8":
/*!******************************************!*\
  !*** ./src/app/photo/photo.component.ts ***!
  \******************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PhotoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoComponent.ɵfac = function PhotoComponent_Factory(t) { return new (t || PhotoComponent)(); };
PhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoComponent, selectors: [["app-photo"]], decls: 1, vars: 0, consts: [["width", "439px", "height", "130px", "src", "assets/Chuck Norris photo.jpg", "alt", "Person's of photo from joke", 1, "box-photo"]], template: function PhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: [".box-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 8px;\n  margin-bottom: 21px;\n  object-fit: cover;\n}\n@media (min-width: 555px) {\n  .box-photo[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQU5GO0lBT0ksVUFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoicGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXBob3RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTU1cHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo.component */ "Rcx8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "IhOl");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _downloader_downloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloader/downloader.component */ "oxph");







function AppComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const joke_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](joke_r1.joke);
} }
class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.joke$ = this.dataService.getJoke();
    }
    refreshJoke() {
        if (this.category === 'explicit') {
            this.joke$ = this.dataService.getJokeExplicit();
        }
        else if (this.category === 'nerdy') {
            this.joke$ = this.dataService.getJokeNerdy();
        }
        else {
            this.joke$ = this.dataService.getJoke();
        }
    }
    getSelectedValue(category) {
        this.category = category;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 3, consts: [[1, "main-content"], [1, "wrap-joke"], ["class", "box-joke", 4, "ngIf"], [3, "eventSelect"], [1, "btn", 3, "click"], [1, "box-joke"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-categories", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventSelect", function AppComponent_Template_app_categories_eventSelect_5_listener($event) { return ctx.getSelectedValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.refreshJoke(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Draw a random Chuck Norris Joke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-downloader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.joke$));
    } }, directives: [_photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _downloader_downloader_component__WEBPACK_IMPORTED_MODULE_6__["DownloaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n}\n@media (min-width: 555px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 555px;\n    padding: 48px 58px 72px;\n    border-radius: 8px;\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);\n  }\n}\n.wrap-joke[_ngcontent-%COMP%] {\n  height: 66px;\n  margin: 0 8px 32px;\n}\n@media (min-width: 555px) {\n  .wrap-joke[_ngcontent-%COMP%] {\n    margin: 0 0 32px;\n  }\n}\n.box-joke[_ngcontent-%COMP%] {\n  height: 66px;\n  margin: 0 8px 32px;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: italic;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #34394f;\n  overflow: auto;\n}\n@media (min-width: 555px) {\n  .box-joke[_ngcontent-%COMP%] {\n    margin: 0 0 32px;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  width: 94%;\n  height: 58px;\n  margin: 0 8px 52px;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.63;\n  letter-spacing: -0.52px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 6px;\n  border: none;\n  color: #ffffff;\n  background-color: #34394f;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-radius: 6px;\n  border: solid 2px #c4c4c4;\n}\n@media (min-width: 555px) {\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 52px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLFlBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsNENBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFFO0VBSkY7SUFLSSxnQkFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUdGO0FBREU7RUFiRjtJQWNJLGdCQUFBO0VBSUY7QUFDRjtBQURBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBSUY7QUFGRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSUo7QUFERTtFQXZCRjtJQXdCSSxXQUFBO0lBQ0EsZ0JBQUE7RUFJRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTU1cHgpIHtcbiAgICB3aWR0aDogNTU1cHg7XG4gICAgcGFkZGluZzogNDhweCA1OHB4IDcycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB9XG59XG5cbi53cmFwLWpva2Uge1xuICBoZWlnaHQ6IDY2cHg7XG4gIG1hcmdpbjogMCA4cHggMzJweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTU1cHgpIHtcbiAgICBtYXJnaW46IDAgMCAzMnB4O1xuICB9XG59XG5cbi5ib3gtam9rZSB7XG4gIGhlaWdodDogNjZweDtcbiAgbWFyZ2luOiAwIDhweCAzMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzQzOTRmO1xuICBvdmVyZmxvdzogYXV0bztcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTU1cHgpIHtcbiAgICBtYXJnaW46IDAgMCAzMnB4O1xuICB9XG59XG5cbi5idG4ge1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1hcmdpbjogMCA4cHggNTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42MztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM5NGY7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2M0YzRjNDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NTVweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDUycHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo.component */ "Rcx8");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "IhOl");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _downloader_downloader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downloader/downloader.component */ "oxph");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"],
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"],
        _downloader_downloader_component__WEBPACK_IMPORTED_MODULE_7__["DownloaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();


/***/ }),

/***/ "oxph":
/*!****************************************************!*\
  !*** ./src/app/downloader/downloader.component.ts ***!
  \****************************************************/
/*! exports provided: DownloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloaderComponent", function() { return DownloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DownloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
DownloaderComponent.ɵfac = function DownloaderComponent_Factory(t) { return new (t || DownloaderComponent)(); };
DownloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloaderComponent, selectors: [["app-downloader"]], decls: 11, vars: 0, consts: [[1, "wrapper"], [1, "number-of-jokes"], [1, "button-wrap"], [1, "number-of-jokes__button"], ["src", "assets/minus.svg", "alt", ""], ["id", "jokeNum", "type", "number", "value", "0", 1, "number-of-jokes__input"], ["src", "assets/plus.svg", "alt", ""], [1, "save-button"]], template: function DownloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save Jokes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 94%;\n  margin: 0 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media (min-width: 555px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n.button-wrap[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-bottom-left-radius: 6px;\n  background-color: #f5f6f8;\n}\n.number-of-jokes[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 58px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-around;\n  border-radius: 6px;\n  background-color: #f5f6f8;\n}\n.number-of-jokes__button[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  border-radius: 50%;\n  background-color: #f5f6f8;\n}\n.number-of-jokes__button[_ngcontent-%COMP%]:focus {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  background-color: #bdbdbd;\n}\n.number-of-jokes__input[_ngcontent-%COMP%] {\n  width: 34px;\n  padding: 0;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.44;\n  letter-spacing: -0.52px;\n  text-align: center;\n  border: none;\n  color: #34394f;\n  background-color: #f5f6f8;\n}\n.number-of-jokes__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.number-of-jokes__input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.number-of-jokes__input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n@media (min-width: 555px) {\n  .number-of-jokes[_ngcontent-%COMP%] {\n    width: 146px;\n    margin: 0;\n  }\n}\n.save-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 58px;\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  border-radius: 6px;\n  color: #34394f;\n  background-color: #f5f6f8;\n}\n.save-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-radius: 6px;\n  border: solid 2px #34394f;\n}\n@media (min-width: 555px) {\n  .save-button[_ngcontent-%COMP%] {\n    width: 285px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rvd25sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQVBGO0lBUUksV0FBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUVOO0FBRUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7QUFBTjtBQUdJO0VBQ0Usd0JBQUE7QUFETjtBQUlJO0VBQ0Usd0JBQUE7QUFGTjtBQU1FO0VBcERGO0lBcURJLFlBQUE7SUFDQSxTQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUhGO0FBS0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhKO0FBTUU7RUFsQkY7SUFtQkksWUFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoiZG93bmxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luOiAwIDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1NXB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5cbi5idXR0b24td3JhcCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xufVxuXG4ubnVtYmVyLW9mLWpva2VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcblxuICAmX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcblxuICAgICY6Zm9jdXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICAgIH1cbiAgfVxuXG4gICZfX2lucHV0IHtcbiAgICB3aWR0aDogMzRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS40NDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMzQzOTRmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJlt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAmW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NTVweCkge1xuICAgIHdpZHRoOiAxNDZweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnNhdmUtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogIzM0Mzk0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMzQzOTRmO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1NXB4KSB7XG4gICAgd2lkdGg6IDI4NXB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zJ+v":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InputComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], decls: 1, vars: 0, consts: [["type", "text", "id", "name", "name", "name", "placeholder", "Impersonate Chuck Norris", 1, "input-name"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    } }, styles: [".input-name[_ngcontent-%COMP%] {\n  width: 94%;\n  height: 58px;\n  display: flex;\n  justify-content: center;\n  margin: 0 8px 32px;\n  padding: 16px;\n  border-radius: 6px;\n  border: solid 2px #c4c4c4;\n  color: #34394f;\n  background-color: #ffffff;\n}\n.input-name[_ngcontent-%COMP%]::placeholder {\n  color: #c4c4c4;\n}\n.input-name[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-radius: 6px;\n  border: solid 2px #34394f;\n}\n@media (min-width: 555px) {\n  .input-name[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2lucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdFO0VBdEJGO0lBdUJJLFdBQUE7SUFDQSxnQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtbmFtZSB7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogNThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCA4cHggMzJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjYzRjNGM0O1xuICBjb2xvcjogIzM0Mzk0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjNGM0YzQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMzQzOTRmO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1NXB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMzJweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map