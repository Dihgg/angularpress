(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/tag/tag.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] },
    { path: ':page', component: _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"] },
    { path: 'post/:slug', component: _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"] },
    { path: 'categoria/:category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] },
    { path: 'tag/:tag', component: _tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TagComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/header/header.component */ "./src/app/base/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _base_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/footer/footer.component */ "./src/app/base/footer/footer.component.ts");





class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_base_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _base_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#main-container[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxceGFtcHBcXGh0ZG9jc1xcYW5ndWxhcnByZXNzL3NyY1xcc2Nzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsZ0JBQUE7RUFDQSxhQ0lRO0FDTFQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFydGlhbHMvcGFydGlhbHNcIjtcclxuXHJcbiNtYWluLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogNjRweDtcclxuXHRwYWRkaW5nOiAkZ3V0dGVyO1xyXG59IiwiLy8gU0laRVNcclxuJHMtbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiRzLXNtOiA3NjhweDsgXHQvLyBcdFNtYWxsIGRldmljZXNcclxuJHMtbWQ6IDk5MnB4OyBcdC8vIFx0bWVkaXVtIGRldmljZXNcclxuJHMtbGc6IDEyMDBweDtcdC8vIGxhcmdlIGRldmljZXNcclxuJHMteGw6IDE0NDBweDtcdC8vIGV4dHJhbGFyZ2UgZGV2aWNlc1xyXG5cclxuLy8gU1BBQ0lOR1xyXG4kZ3V0dGVyOiAxNXB4O1xyXG5cclxuLy8gQU5JTUFUSU9OXHJcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IDAuM3MgZWFzZS1pbi1vdXQ7IiwiI21haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/archive/archive.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/tag/tag.component.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./author/author.component */ "./src/app/author/author.component.ts");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/blocks.module */ "./src/app/blocks/blocks.module.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./base/base.module */ "./src/app/base/base.module.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_13__["BaseModule"],
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_12__["BlocksModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _archive_archive_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveComponent"],
        _author_author_component__WEBPACK_IMPORTED_MODULE_11__["AuthorComponent"],
        _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
        _tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _base_base_module__WEBPACK_IMPORTED_MODULE_13__["BaseModule"],
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_12__["BlocksModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _archive_archive_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveComponent"],
                    _author_author_component__WEBPACK_IMPORTED_MODULE_11__["AuthorComponent"],
                    _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                    _tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _base_base_module__WEBPACK_IMPORTED_MODULE_13__["BaseModule"],
                    _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_12__["BlocksModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/archive/archive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/archive/archive.component.ts ***!
  \**********************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ArchiveComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ArchiveComponent.ɵfac = function ArchiveComponent_Factory(t) { return new (t || ArchiveComponent)(); };
ArchiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchiveComponent, selectors: [["app-archive"]], decls: 2, vars: 0, template: function ArchiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "archive works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmUvYXJjaGl2ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-archive',
                templateUrl: './archive.component.html',
                styleUrls: ['./archive.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/author/author.component.ts":
/*!********************************************!*\
  !*** ./src/app/author/author.component.ts ***!
  \********************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AuthorComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r12.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.author.name);
} }
class AuthorComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
    }
    ngOnInit() {
        this.wordpress.getUser(this.id).subscribe(user => (this.author = user));
    }
}
AuthorComponent.ɵfac = function AuthorComponent_Factory(t) { return new (t || AuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
AuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorComponent, selectors: [["app-author"]], inputs: { id: "id" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "src", "alt"]], template: function AuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthorComponent_section_0_Template, 4, 3, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-author',
                templateUrl: './author.component.html',
                styleUrls: ['./author.component.scss']
            }]
    }], function () { return [{ type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/base/base.module.ts":
/*!*************************************!*\
  !*** ./src/app/base/base.module.ts ***!
  \*************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/base/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/base/header/header.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/base/loading/loading.component.ts");
/* harmony import */ var _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchbar/searchbar.module */ "./src/app/base/searchbar/searchbar.module.ts");
/* harmony import */ var _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socials/socials.module */ "./src/app/base/socials/socials.module.ts");
/* harmony import */ var _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo/logo.module */ "./src/app/base/logo/logo.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/base/menu/menu.module.ts");
/* harmony import */ var _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../base/icons/icons.module */ "./src/app/base/icons/icons.module.ts");











class BaseModule {
}
BaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaseModule_Factory(t) { return new (t || BaseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
            _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
            _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
            _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]
        ],
        _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
        _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
        _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
        _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                    _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"],
                    _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
                    _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
                    _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]
                ],
                exports: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _base_icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
                    _logo_logo_module__WEBPACK_IMPORTED_MODULE_7__["LogoModule"],
                    _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
                    _searchbar_searchbar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
                    _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/base/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/base/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/base/logo/logo.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/base/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socials/socials.component */ "./src/app/base/socials/socials.component.ts");







function FooterComponent_app_socials_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-socials", 15);
} }
function FooterComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r45.wordpress.THEME.options.footer.disclaimer, " ");
} }
/* import { TRANSLATION } from 'src/app/services/wordpress.interface'; */
class FooterComponent {
    /* public labels: TRANSLATION[] = [
      {
        term: 'All rights reserved'
      }
    ]; */
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.year = new Date().getFullYear();
        this.showSocials = wordpress.THEME.options.footer.socials;
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 8, consts: [["id", "footer", 1, "theme--menu-bg", "theme--menu-color", "container-fluid", "pt-5", "pb-2"], [1, "row"], [1, "col-12", "col-lg-2", "mb-3", "d-flex", "justify-content-center"], [3, "footer"], ["location", "footer-links", 1, "col-12", "col-lg-10", "mb-3", "d-flex", "justify-content-space-between", 3, "showHome"], ["class", "col-12 d-flex justify-content-center justify-content-lg-between", 4, "ngIf"], [1, "footer__info", "col-12", "d-flex", "justify-content-center", "justify-content-lg-end"], [1, "disclaimer"], [1, "d-block", "mb-2"], ["class", "d-block", 4, "ngIf"], [1, "signature", "col-12", "d-flex", "justify-content-center", "justify-content-lg-end"], [1, "d-flex", "align-items-center", "flex-column", "flex-lg-row"], [1, "d-block", "mb-1", "mb-lg-0"], ["href", "//dihgg.com", "target", "_blank", 1, "d-block"], ["alt", "Dihgg", 3, "src"], [1, "col-12", "d-flex", "justify-content-center", "justify-content-lg-between"], [1, "d-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_app_socials_6_Template, 1, 0, "app-socials", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FooterComponent_span_12_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHome", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSocials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u00A9\u00A0", ctx.year, "\u00A0", ctx.wordpress.translate("All rights reserved"), ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wordpress.THEME.options.footer.disclaimer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.wordpress.translate("Developed by"), ":\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.wordpress.THEME.TEMPLATE_URI, "/assets/img/dihgg.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_5__["SocialsComponent"]], styles: ["#footer[_ngcontent-%COMP%]     .menu__item__link {\n  font-weight: bold;\n}\n#footer[_ngcontent-%COMP%]     .menu__item__submenu .menu__item__link {\n  font-weight: normal;\n}\n#footer[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%] {\n  max-width: 420px;\n  text-align: center;\n}\n@media screen and (min-width: 992px) {\n  #footer[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9mb290ZXIvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXGFwcFxcYmFzZVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2UvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFzZS9mb290ZXIvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXHNjc3NcXHBhcnRpYWxzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxpQkFBQTtBQ0hOO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FETUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSko7QUNOSTtFRlFGO0lBSUksaUJBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFzZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhcnRpYWxzL3BhcnRpYWxzXCI7XHJcblxyXG4jZm9vdGVyIHtcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1lbnVfX2l0ZW1fX2xpbmsge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5tZW51X19pdGVtX19zdWJtZW51IC5tZW51X19pdGVtX19saW5rIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcbiAgLmRpc2NsYWltZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIGJwKCRzLW1kKSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjZm9vdGVyIDo6bmctZGVlcCAubWVudV9faXRlbV9fbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2Zvb3RlciA6Om5nLWRlZXAgLm1lbnVfX2l0ZW1fX3N1Ym1lbnUgLm1lbnVfX2l0ZW1fX2xpbmsge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuI2Zvb3RlciAuZGlzY2xhaW1lciB7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNmb290ZXIgLmRpc2NsYWltZXIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59IiwiLy8gQlJFQUtQT0lOVFNcclxuQG1peGluIGJwKCRtaW4tc2l6ZTogZmFsc2UsICRtYXgtc2l6ZTogZmFsc2UpIHtcclxuICBAaWYgJG1pbi1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtaW4tc2l6ZSBhbmQgJG1heC1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkgYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/base/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/base/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/base/logo/logo.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/base/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../searchbar/searchbar.component */ "./src/app/base/searchbar/searchbar.component.ts");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../socials/socials.component */ "./src/app/base/socials/socials.component.ts");









function HeaderComponent_app_socials_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-socials", 12);
} }
function HeaderComponent_app_socials_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-socials", 13);
} }
const _c0 = function () { return ["col", "d-flex", "flex-column", "justify-content-space-between"]; };
class HeaderComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.menuToggled = false;
        this.showSocials = wordpress.THEME.options.header.socials;
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 8, consts: [["id", "header", 1, "theme--menu-bg", "theme--menu-color", "container-fluid", "py-lg-2"], [1, "row", "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "col-2", "d-flex", "justify-content-start"], [1, "btn", "btn--transparent", "d-lg-none", 3, "click"], ["name", "menu", 1, "theme--menu-color"], [1, "d-none", "d-lg-flex", "align-items-center"], [1, "col-8", "col-lg-auto", "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start", "flex-fill"], [1, "d-lg-none"], ["location", "main-nav", 1, "header__menu", 3, "showHome", "classes"], ["class", "mt-auto mb-3 d-lg-none", 4, "ngIf"], [1, "col-2", "col-lg-auto", "d-flex", "justify-content-end"], ["class", "d-none d-lg-flex", 4, "ngIf"], [1, "mt-auto", "mb-3", "d-lg-none"], [1, "d-none", "d-lg-flex"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.menuToggled = !ctx.menuToggled; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i-feather", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-logo", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-logo", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-menu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_app_socials_9_Template, 1, 0, "app-socials", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_app_socials_11_Template, 1, 0, "app-socials", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-searchbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("header__menu--toggled", ctx.menuToggled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHome", true)("classes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.menuToggled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSocials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSocials);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_7__["SocialsComponent"]], styles: ["#header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10;\n}\n@media screen and (max-width: 991px) {\n  #header[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  #header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 40px;\n    left: 0;\n    width: 80%;\n    max-width: 320px;\n    height: calc(100vh - 40px);\n  }\n}\n@media screen and (max-width: 991px) and (max-width: 991px) {\n  #header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%] {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    -webkit-transition: -webkit-transform 0.3s ease-in-out;\n    transition: -webkit-transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  }\n  #header[_ngcontent-%COMP%]   .header__menu--toggled[_ngcontent-%COMP%] {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n  #header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%]     .menu {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9oZWFkZXIvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXGFwcFxcYmFzZVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFzZS9oZWFkZXIvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXHNjc3NcXHBhcnRpYWxzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0RGO0FDUUk7RUZMQTtJQUNFLFlBQUE7RUNBSjtFREVFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUNBSjtBQUNGO0FDTEk7RUZGQTtJQVFJLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxzREFBQTtJQUFBLDhDQUFBO0lBQUEsc0NBQUE7SUFBQSwwRUFBQTtFQ0dOO0VERk07SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDSVI7RUREUTtJQUNFLFlBQUE7RUNHVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFzZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhcnRpYWxzL3BhcnRpYWxzXCI7XHJcblxyXG4jaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgQGluY2x1ZGUgYnAoZmFsc2UsICRzLW1kKSB7XHJcbiAgICA+IC5yb3cge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19tZW51IHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDQwcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xyXG4gICAgICBAaW5jbHVkZSBicChmYWxzZSwgJHMtbWQpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1kZWZhdWx0O1xyXG4gICAgICAgICYtLXRvZ2dsZWQge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNoZWFkZXIgPiAucm93IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgI2hlYWRlciAuaGVhZGVyX19tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNoZWFkZXIgLmhlYWRlcl9fbWVudSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAjaGVhZGVyIC5oZWFkZXJfX21lbnUtLXRvZ2dsZWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbiAgI2hlYWRlciAuaGVhZGVyX19tZW51IDo6bmctZGVlcCAubWVudSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59IiwiLy8gQlJFQUtQT0lOVFNcclxuQG1peGluIGJwKCRtaW4tc2l6ZTogZmFsc2UsICRtYXgtc2l6ZTogZmFsc2UpIHtcclxuICBAaWYgJG1pbi1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtaW4tc2l6ZSBhbmQgJG1heC1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkgYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/base/icons/icons.module.ts":
/*!********************************************!*\
  !*** ./src/app/base/icons/icons.module.ts ***!
  \********************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather/icons */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather-icons.js");





class IconsModule {
}
IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick({
                Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Menu"],
                Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
                Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Twitter"],
                Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Search"],
                ExternalLink: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"],
                ChevronDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronDown"],
                Loader: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Loader"]
            })
        ],
        angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick({
                        Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Menu"],
                        Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
                        Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Twitter"],
                        Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Search"],
                        ExternalLink: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"],
                        ChevronDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronDown"],
                        Loader: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Loader"]
                    })
                ],
                exports: [
                    angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/base/loading/loading.component.ts":
/*!***************************************************!*\
  !*** ./src/app/base/loading/loading.component.ts ***!
  \***************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");




function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoadingComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], inputs: { loading: "loading" }, decls: 1, vars: 1, consts: [["class", "loading", 4, "ngIf"], [1, "loading"], ["name", "loader", 1, "loader"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherComponent"]], styles: [".loading[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9sb2FkaW5nL0M6XFx4YW1wcFxcaHRkb2NzXFxhbmd1bGFycHJlc3Mvc3JjXFxhcHBcXGJhc2VcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2UvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0csa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKO0FEQUM7RUFDQywwQ0FBQTtVQUFBLGtDQUFBO0FDRUY7QURFQTtFQUNDO0lBQ0MsaUNBQUE7WUFBQSx5QkFBQTtFQ0NBO0FBQ0Y7QURKQTtFQUNDO0lBQ0MsaUNBQUE7WUFBQSx5QkFBQTtFQ0NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYXNlL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC5sb2FkZXIge1xyXG5cdFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdH1cclxufSIsIi5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2FkaW5nIC5sb2FkZXIge1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/base/logo/logo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/base/logo/logo.component.ts ***!
  \*********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LogoComponent_picture_1_source_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 7);
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("srcset", ctx_r54.logos.desktop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LogoComponent_picture_1_source_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 8);
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("srcset", ctx_r55.logos.mobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LogoComponent_picture_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogoComponent_picture_1_source_1_Template, 1, 1, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogoComponent_picture_1_source_2_Template, 1, 1, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.logos.desktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.logos.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r52.logos.mobile || ctx_r52.logos.desktop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r52.title.getTitle());
} }
function LogoComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r53.title.getTitle(), " ");
} }
const _c0 = function () { return ["/"]; };
class LogoComponent {
    constructor(title, wordpress) {
        this.title = title;
        this.wordpress = wordpress;
        this.footer = false;
    }
    ngOnInit() {
        this.logos = this.wordpress.THEME.logos;
        if (this.footer && (this.wordpress.THEME.logos.footer.desktop || this.wordpress.THEME.logos.footer.mobile)) {
            this.logos = this.wordpress.THEME.logos.footer;
        }
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"])); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], inputs: { footer: "footer" }, decls: 3, vars: 4, consts: [[1, "menu__home", 3, "routerLink"], ["class", "logo", 4, "ngIf"], [4, "ngIf"], [1, "logo"], ["media", "(min-width:768px)", 4, "ngIf"], ["media", "(max-width:768px)", 4, "ngIf"], [3, "src", "alt"], ["media", "(min-width:768px)"], ["media", "(max-width:768px)"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogoComponent_picture_1_Template, 4, 4, "picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogoComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logos && (ctx.logos.mobile || ctx.logos.desktop));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logos.mobile && !ctx.logos.desktop);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n@media screen and (max-width: 991px) {\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 120px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9sb2dvL0M6XFx4YW1wcFxcaHRkb2NzXFxhbmd1bGFycHJlc3Mvc3JjXFxhcHBcXGJhc2VcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2UvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYXNlL2xvZ28vQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXHNjc3NcXHBhcnRpYWxzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0REO0FDUUk7RUZUSjtJQUlHLFlBQUE7RUNDRDtBQUNGO0FDTEk7RUZESjtJQU9HLGdCQUFBO0VDR0Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhcnRpYWxzL3BhcnRpYWxzXCI7XHJcblxyXG4ubG9nbyBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRAaW5jbHVkZSBicChmYWxzZSwgJHMtbWQpIHtcclxuXHQgIHdpZHRoOiAxMjBweDtcclxuXHR9XHJcblx0QGluY2x1ZGUgYnAoJHMtbGcpIHtcclxuXHQgIG1heC13aWR0aDogMjAwcHg7XHJcblx0fVxyXG4gIH0iLCIubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubG9nbyBpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbn0iLCIvLyBCUkVBS1BPSU5UU1xyXG5AbWl4aW4gYnAoJG1pbi1zaXplOiBmYWxzZSwgJG1heC1zaXplOiBmYWxzZSkge1xyXG4gIEBpZiAkbWluLXNpemUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi1zaXplKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1pbi1zaXplIGFuZCAkbWF4LXNpemUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi1zaXplKSBhbmQgKG1heC13aWR0aDogJG1heC1zaXplIC0gMXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1heC1zaXplIC0gMXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] }]; }, { footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/base/logo/logo.module.ts":
/*!******************************************!*\
  !*** ./src/app/base/logo/logo.module.ts ***!
  \******************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.component */ "./src/app/base/logo/logo.component.ts");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");





class LogoModule {
}
LogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogoModule });
LogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogoModule_Factory(t) { return new (t || LogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoModule, { declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                exports: [
                    _logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/base/menu/menu-link/menu-link.component.ts":
/*!************************************************************!*\
  !*** ./src/app/base/menu/menu-link/menu-link.component.ts ***!
  \************************************************************/
/*! exports provided: MenuLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLinkComponent", function() { return MenuLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function MenuLinkComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r66.link.urlRouter)("target", ctx_r66.link.target)("ngClass", ctx_r66.link.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r66.link.title, "\n");
} }
function MenuLinkComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r67.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", ctx_r67.link.target)("ngClass", ctx_r67.link.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r67.link.title, "\n");
} }
class MenuLinkComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MenuLinkComponent.ɵfac = function MenuLinkComponent_Factory(t) { return new (t || MenuLinkComponent)(); };
MenuLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuLinkComponent, selectors: [["app-menu-link"]], inputs: { link: "link" }, decls: 2, vars: 2, consts: [["class", "menu__item__link theme--menu-color", 3, "routerLink", "target", "ngClass", 4, "ngIf"], ["class", "menu__item__link theme--menu-color", 3, "href", "target", "ngClass", 4, "ngIf"], [1, "menu__item__link", "theme--menu-color", 3, "routerLink", "target", "ngClass"], [1, "menu__item__link", "theme--menu-color", 3, "href", "target", "ngClass"]], template: function MenuLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuLinkComponent_a_0_Template, 2, 4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuLinkComponent_a_1_Template, 2, 4, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link.urlRouter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.link.urlRouter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".menu__item__link[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9tZW51L21lbnUtbGluay9DOlxceGFtcHBcXGh0ZG9jc1xcYW5ndWxhcnByZXNzL3NyY1xcYXBwXFxiYXNlXFxtZW51XFxtZW51LWxpbmtcXG1lbnUtbGluay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFzZS9tZW51L21lbnUtbGluay9tZW51LWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBQTtFQUNBLHFCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9iYXNlL21lbnUvbWVudS1saW5rL21lbnUtbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51X19pdGVtX19saW5rIHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIi5tZW51X19pdGVtX19saW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-link',
                templateUrl: './menu-link.component.html',
                styleUrls: ['./menu-link.component.scss']
            }]
    }], function () { return []; }, { link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/base/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/base/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-link/menu-link.component */ "./src/app/base/menu/menu-link/menu-link.component.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");







const _c0 = ["$submenu"];
function MenuComponent_li_2_nav_2_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-link", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link__r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", link__r62);
} }
function MenuComponent_li_2_nav_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_li_2_nav_2_li_3_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r58.submenuH, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu__item__submenu--toggled", ctx_r58.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", link_r57.items);
} }
function MenuComponent_li_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.toggleSubmenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu__item__toggler--toggled", ctx_r59.submenu);
} }
function MenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-link", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_2_nav_2_Template, 4, 5, "nav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_li_2_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", link_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r57.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r57.items);
} }
const _c1 = ["*"];
class MenuComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.items = [];
        this.submenu = false;
        this.submenuH = 0;
        this.showHome = false;
        this.classes = [];
    }
    setMenu(items) {
        this.items = [];
        items.forEach((item) => {
            item = this.setUrl(item);
            if (item.items) {
                item.classes.push('menu__item__link--has-child', 'mb-2');
                item.items.forEach((item_, i) => {
                    item.items[i] = this.setUrl(item_);
                    item.items[i].classes.push('mb-2');
                });
            }
            this.items.push(item);
        });
    }
    setUrl(item) {
        if (item.url.includes(src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"].BASE_HREF) && !item.target) {
            item.urlRouter = item.url.replace(src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"].BASE_HREF, "");
            item.url = null;
        }
        return item;
    }
    toggleSubmenu() {
        this.submenu = !this.submenu;
        const height = this.$submenu.nativeElement.firstChild.offsetHeight;
        if (this.submenu) {
            this.submenuH = height;
        }
        else {
            this.submenuH = 0;
        }
    }
    ngOnInit() {
        this.wordpress.getMenu(this.location).subscribe(menu => this.setMenu(menu));
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.$submenu = _t.first);
    } }, inputs: { showHome: "showHome", classes: "classes", location: "location" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "menu", "theme--menu-bg", "theme--menu-color", 3, "ngClass"], [1, "menu__items"], ["class", "menu__item", 4, "ngFor", "ngForOf"], [1, "menu__item"], [3, "link"], ["class", "menu__item__submenu", 3, "menu__item__submenu--toggled", "height", 4, "ngIf"], ["class", "menu__item__toggler btn btn--transparent theme--menu-color d-lg-none", 3, "menu__item__toggler--toggled", "click", 4, "ngIf"], [1, "menu__item__submenu"], ["$submenu", ""], ["class", "menu__item--subitem", 4, "ngFor", "ngForOf"], [1, "menu__item--subitem"], [1, "menu__item__toggler", "btn", "btn--transparent", "theme--menu-color", "d-lg-none", 3, "click"], ["name", "chevron-down"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_2_Template, 4, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_3__["MenuLinkComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherComponent"]], styles: [".menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (min-width: 992px) {\n  .menu__items[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n}\n.menu__item[_ngcontent-%COMP%] {\n  margin: 15px auto;\n  position: relative;\n}\n@media screen and (max-width: 991px) {\n  .menu__item__submenu[_ngcontent-%COMP%] {\n    overflow: hidden;\n    height: 0;\n    -webkit-transition: height 0.3s ease-in-out;\n    transition: height 0.3s ease-in-out;\n  }\n  .menu__item__toggler[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: -webkit-transform 0.3s ease-in-out;\n    transition: -webkit-transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  }\n  .menu__item__toggler--toggled[_ngcontent-%COMP%] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n}\n@media screen and (min-width: 992px) {\n  .menu__item[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n  .menu__item__submenu[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9tZW51L0M6XFx4YW1wcFxcaHRkb2NzXFxhbmd1bGFycHJlc3Mvc3JjXFxhcHBcXGJhc2VcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2UvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYXNlL21lbnUvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXHNjc3NcXHBhcnRpYWxzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxXQUFBO0FDRkY7QUNDSTtFRkdGO0lBRUksb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtFQ0ZKO0FBQ0Y7QURJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBQ0RJO0VGS0U7SUFDRSxnQkFBQTtJQUNBLFNBQUE7SUFDQSwyQ0FBQTtJQUFBLG1DQUFBO0VDRE47RURHSTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLE1BQUE7SUFDQSxzREFBQTtJQUFBLDhDQUFBO0lBQUEsc0NBQUE7SUFBQSwwRUFBQTtFQ0ROO0VERU07SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDQVI7QUFDRjtBQ3pCSTtFRlNGO0lBb0JJLGNBQUE7RUNBSjtFRENJO0lBQ0UsdUJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFzZS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFydGlhbHMvcGFydGlhbHNcIjtcclxuXHJcbi5tZW51IHtcclxuICAkc2VsZjogJjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJl9faXRlbXMge1xyXG4gICAgQGluY2x1ZGUgYnAoJHMtbWQpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2l0ZW0ge1xyXG4gICAgbWFyZ2luOiAkZ3V0dGVyIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBAaW5jbHVkZSBicChmYWxzZSwgJHMtbWQpIHtcclxuICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgJl9fdG9nZ2xlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tZGVmYXVsdDtcclxuICAgICAgICAmLS10b2dnbGVkIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBicCgkcy1tZCkge1xyXG4gICAgICBtYXJnaW46IDAgJGd1dHRlcjtcclxuICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm1lbnUge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZW51X19pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLm1lbnVfX2l0ZW0ge1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1lbnVfX2l0ZW1fX3N1Ym1lbnUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5tZW51X19pdGVtX190b2dnbGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5tZW51X19pdGVtX190b2dnbGVyLS10b2dnbGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWVudV9faXRlbSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cbiAgLm1lbnVfX2l0ZW1fX3N1Ym1lbnUge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gQlJFQUtQT0lOVFNcclxuQG1peGluIGJwKCRtaW4tc2l6ZTogZmFsc2UsICRtYXgtc2l6ZTogZmFsc2UpIHtcclxuICBAaWYgJG1pbi1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtaW4tc2l6ZSBhbmQgJG1heC1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkgYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, { showHome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], $submenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['$submenu']
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/base/menu/menu.module.ts":
/*!******************************************!*\
  !*** ./src/app/base/menu/menu.module.ts ***!
  \******************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/base/menu/menu.component.ts");
/* harmony import */ var _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-link/menu-link.component */ "./src/app/base/menu/menu-link/menu-link.component.ts");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/icons.module */ "./src/app/base/icons/icons.module.ts");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socials/socials.module */ "./src/app/base/socials/socials.module.ts");








class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_3__["MenuLinkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
                    _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_3__["MenuLinkComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
                    src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _socials_socials_module__WEBPACK_IMPORTED_MODULE_6__["SocialsModule"]
                ],
                exports: [
                    _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/base/searchbar/searchbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/searchbar/searchbar.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");






const _c0 = ["$input"];
class SearchbarComponent {
    constructor(wordpress, router, route) {
        this.wordpress = wordpress;
        this.router = router;
        this.route = route;
        this.active = false;
        this.route.queryParams.subscribe(params => {
            this.query = params['query'];
        });
    }
    ngOnInit() { }
    btnClick() {
        this.active = !this.active;
        if (this.active) {
            this.$input.nativeElement.focus();
        }
    }
    onSubmit() {
        if (this.query) {
            this.router.navigate(['/search'], {
                queryParams: {
                    'query': this.query
                }
            });
        }
        else {
            this.active = false;
        }
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["app-searchbar"]], viewQuery: function SearchbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.$input = _t.first);
    } }, decls: 6, vars: 11, consts: [[1, "search", 3, "submit"], [1, "search__input"], ["type", "text", "name", "s", 1, "px-2", 3, "placeholder", "ngModel", "ngModelChange"], ["$input", ""], [1, "btn", "btn--transparent", 3, "type", "click"], ["name", "search"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchbarComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_2_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchbarComponent_Template_button_click_4_listener() { return ctx.active && ctx.query && ctx.query.length ? ctx.onSubmit() : ctx.btnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i-feather", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("search--active", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.wordpress.translate("search"))("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("theme--menu-color", !ctx.active)("theme--color", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.active && ctx.query && ctx.query.length ? "submit" : "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.wordpress.translate("search"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherComponent"]], styles: [".search[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 24px;\n}\n.search__input[_ngcontent-%COMP%] {\n  border: none;\n  height: 100%;\n  width: 0;\n  right: 0;\n  overflow: hidden;\n  -webkit-transition: width 0.3s ease-in-out;\n  transition: width 0.3s ease-in-out;\n}\n.search__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search--active[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%] {\n  width: calc(100vw - 30px);\n}\n@media screen and (min-width: 768px) {\n  .search--active[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n}\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  -webkit-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9zZWFyY2hiYXIvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXGFwcFxcYmFzZVxcc2VhcmNoYmFyXFxzZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2Uvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFzZS9zZWFyY2hiYXIvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXHNjc3NcXHBhcnRpYWxzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxrQkFBQTtFQUVBLGVBQUE7QUNGRDtBRElDO0VBRUMsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtBQ0hGO0FESUU7RUFDQyxXQUFBO0FDRkg7QURPRTtFQUNDLHlCQUFBO0FDTEg7QUNkSTtFRmtCRjtJQUdFLFlBQUE7RUNIRjtBQUNGO0FETUM7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2Jhc2Uvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJ0aWFscy9wYXJ0aWFsc1wiO1xyXG5cclxuLnNlYXJjaCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCRzZWxmOiAmO1xyXG5cdG1pbi13aWR0aDogMjRweDtcclxuXHRcclxuXHQmX19pbnB1dCB7XHJcblx0XHQvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR3aWR0aDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRyYW5zaXRpb246IHdpZHRoICR0cmFuc2l0aW9uLWRlZmF1bHQ7XHJcblx0XHRpbnB1dCB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQmLS1hY3RpdmUge1xyXG5cdFx0I3skc2VsZn1fX2lucHV0IHtcclxuXHRcdFx0d2lkdGg6IGNhbGMoMTAwdncgLSAjeyRndXR0ZXIqMn0pO1xyXG5cdFx0XHRAaW5jbHVkZSBicCgkcy1zbSkge1xyXG5cdFx0XHRcdHdpZHRoOiAyNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRidXR0b24ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdFx0dHJhbnNpdGlvbjogY29sb3IgJHRyYW5zaXRpb24tZGVmYXVsdDtcclxuXHR9XHJcbn0iLCIuc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDI0cHg7XG59XG4uc2VhcmNoX19pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc2VhcmNoX19pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaC0tYWN0aXZlIC5zZWFyY2hfX2lucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMHB4KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtLWFjdGl2ZSAuc2VhcmNoX19pbnB1dCB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG59XG4uc2VhcmNoIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn0iLCIvLyBCUkVBS1BPSU5UU1xyXG5AbWl4aW4gYnAoJG1pbi1zaXplOiBmYWxzZSwgJG1heC1zaXplOiBmYWxzZSkge1xyXG4gIEBpZiAkbWluLXNpemUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi1zaXplKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1pbi1zaXplIGFuZCAkbWF4LXNpemUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi1zaXplKSBhbmQgKG1heC13aWR0aDogJG1heC1zaXplIC0gMXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1heC1zaXplIC0gMXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-searchbar',
                templateUrl: './searchbar.component.html',
                styleUrls: ['./searchbar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { $input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['$input']
        }] }); })();


/***/ }),

/***/ "./src/app/base/searchbar/searchbar.module.ts":
/*!****************************************************!*\
  !*** ./src/app/base/searchbar/searchbar.module.ts ***!
  \****************************************************/
/*! exports provided: SearchBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarModule", function() { return SearchBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _searchbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbar.component */ "./src/app/base/searchbar/searchbar.component.ts");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/icons.module */ "./src/app/base/icons/icons.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SearchBarModule {
}
SearchBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchBarModule });
SearchBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchBarModule_Factory(t) { return new (t || SearchBarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchBarModule, { declarations: [_searchbar_component__WEBPACK_IMPORTED_MODULE_2__["SearchbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]], exports: [_searchbar_component__WEBPACK_IMPORTED_MODULE_2__["SearchbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _searchbar_component__WEBPACK_IMPORTED_MODULE_2__["SearchbarComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
                ],
                exports: [
                    _searchbar_component__WEBPACK_IMPORTED_MODULE_2__["SearchbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/base/socials/socials.component.ts":
/*!***************************************************!*\
  !*** ./src/app/base/socials/socials.component.ts ***!
  \***************************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");





function SocialsComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r51 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", social_r51.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", social_r51.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r50.getIcon(social_r51.url));
} }
class SocialsComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.socials = [];
    }
    ngOnInit() {
        this.wordpress.getMenu('social').subscribe(menu => (this.socials = menu));
    }
    getIcon(url) {
        const name = new URL(url).hostname.match(/^(.*?)\./)[1];
        switch (name) {
            case 'facebook':
            case 'twitter':
            case 'instagram':
            case 'twitch':
                return name;
            default:
                return 'external-link';
        }
    }
}
SocialsComponent.ɵfac = function SocialsComponent_Factory(t) { return new (t || SocialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
SocialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialsComponent, selectors: [["app-socials"]], decls: 2, vars: 1, consts: [[1, "social"], ["target", "_blank", "class", "social__item theme--menu-color mx-2 ml-lg-0", 3, "href", "title", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "social__item", "theme--menu-color", "mx-2", "ml-lg-0", 3, "href", "title"], [3, "name"]], template: function SocialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialsComponent_a_1_Template, 2, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherComponent"]], styles: [".social[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media screen and (min-width: 992px) {\n  .social[_ngcontent-%COMP%] {\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9zb2NpYWxzL0M6XFx4YW1wcFxcaHRkb2NzXFxhbmd1bGFycHJlc3Mvc3JjXFxhcHBcXGJhc2VcXHNvY2lhbHNcXHNvY2lhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhc2Uvc29jaWFscy9zb2NpYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYXNlL3NvY2lhbHMvQzpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXJwcmVzcy9zcmNcXHNjc3NcXHBhcnRpYWxzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDREY7QUNBSTtFRkRKO0lBSUksOEJBQUE7WUFBQSw2QkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYXNlL3NvY2lhbHMvc29jaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJ0aWFscy9wYXJ0aWFsc1wiO1xyXG5cclxuLnNvY2lhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBAaW5jbHVkZSBicCgkcy1tZCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG59XHJcbiIsIi5zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zb2NpYWwge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG59IiwiLy8gQlJFQUtQT0lOVFNcclxuQG1peGluIGJwKCRtaW4tc2l6ZTogZmFsc2UsICRtYXgtc2l6ZTogZmFsc2UpIHtcclxuICBAaWYgJG1pbi1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtaW4tc2l6ZSBhbmQgJG1heC1zaXplIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2l6ZSkgYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtYXgtc2l6ZSAtIDFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-socials',
                templateUrl: './socials.component.html',
                styleUrls: ['./socials.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/base/socials/socials.module.ts":
/*!************************************************!*\
  !*** ./src/app/base/socials/socials.module.ts ***!
  \************************************************/
/*! exports provided: SocialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsModule", function() { return SocialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _socials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socials.component */ "./src/app/base/socials/socials.component.ts");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/icons.module */ "./src/app/base/icons/icons.module.ts");





class SocialsModule {
}
SocialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialsModule });
SocialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialsModule_Factory(t) { return new (t || SocialsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialsModule, { declarations: [_socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]], exports: [_socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]
                ],
                exports: [
                    _socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blocks/blocks.component.ts":
/*!********************************************!*\
  !*** ./src/app/blocks/blocks.component.ts ***!
  \********************************************/
/*! exports provided: BlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksComponent", function() { return BlocksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _youtube_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube/youtube/youtube.component */ "./src/app/blocks/youtube/youtube/youtube.component.ts");
/* harmony import */ var _latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./latest-posts/latest-posts.component */ "./src/app/blocks/latest-posts/latest-posts.component.ts");
/* harmony import */ var _gallery_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery/gallery.component */ "./src/app/blocks/gallery/gallery/gallery.component.ts");






function BlocksComponent_ng_container_0_ng_container_1_app_youtube_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-youtube", 5);
} if (rf & 2) {
    const block_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attrs", block_r14.attrs);
} }
function BlocksComponent_ng_container_0_ng_container_1_app_latest_posts_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-latest-posts", 5);
} if (rf & 2) {
    const block_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attrs", block_r14.attrs);
} }
function BlocksComponent_ng_container_0_ng_container_1_app_gallery_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery", 5);
} if (rf & 2) {
    const block_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attrs", block_r14.attrs);
} }
function BlocksComponent_ng_container_0_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const block_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", block_r14.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BlocksComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlocksComponent_ng_container_0_ng_container_1_app_youtube_1_Template, 1, 1, "app-youtube", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlocksComponent_ng_container_0_ng_container_1_app_latest_posts_2_Template, 1, 1, "app-latest-posts", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlocksComponent_ng_container_0_ng_container_1_app_gallery_3_Template, 1, 1, "app-gallery", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlocksComponent_ng_container_0_ng_container_1_div_4_Template, 1, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const block_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", block_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "core-embed/youtube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "core/latest-posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "core/gallery");
} }
function BlocksComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlocksComponent_ng_container_0_ng_container_1_Template, 5, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const block_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", block_r14.name);
} }
class BlocksComponent {
    constructor() {
        this.blocks = [];
    }
    ngOnInit() { }
}
BlocksComponent.ɵfac = function BlocksComponent_Factory(t) { return new (t || BlocksComponent)(); };
BlocksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlocksComponent, selectors: [["app-blocks"]], inputs: { blocks: "blocks" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [3, "attrs", 4, "ngSwitchCase"], ["class", "block-content", 3, "innerHTML", 4, "ngSwitchDefault"], [3, "attrs"], [1, "block-content", 3, "innerHTML"]], template: function BlocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlocksComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _youtube_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"], _latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_3__["LatestPostsComponent"], _gallery_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9ibG9ja3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlocksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blocks',
                templateUrl: './blocks.component.html',
                styleUrls: ['./blocks.component.scss']
            }]
    }], function () { return []; }, { blocks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/blocks/blocks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/blocks/blocks.module.ts ***!
  \*****************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _blocks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks.component */ "./src/app/blocks/blocks.component.ts");
/* harmony import */ var _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube/youtube.module */ "./src/app/blocks/youtube/youtube.module.ts");
/* harmony import */ var _latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./latest-posts/latest-posts.component */ "./src/app/blocks/latest-posts/latest-posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/blocks/post/post.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.module */ "./src/app/blocks/gallery/gallery.module.ts");










class BlocksModule {
}
BlocksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlocksModule });
BlocksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlocksModule_Factory(t) { return new (t || BlocksModule)(); }, imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_3__["YoutubeModule"],
            _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlocksModule, { declarations: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"],
        _blocks_component__WEBPACK_IMPORTED_MODULE_2__["BlocksComponent"],
        _latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_4__["LatestPostsComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_3__["YoutubeModule"],
        _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"]], exports: [_blocks_component__WEBPACK_IMPORTED_MODULE_2__["BlocksComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlocksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"],
                    _blocks_component__WEBPACK_IMPORTED_MODULE_2__["BlocksComponent"],
                    _latest_posts_latest_posts_component__WEBPACK_IMPORTED_MODULE_4__["LatestPostsComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_3__["YoutubeModule"],
                    _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"]
                ],
                exports: [
                    _blocks_component__WEBPACK_IMPORTED_MODULE_2__["BlocksComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blocks/gallery/gallery.module.ts":
/*!**************************************************!*\
  !*** ./src/app/blocks/gallery/gallery.module.ts ***!
  \**************************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/blocks/gallery/gallery/gallery.component.ts");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm2015/ngu-carousel.js");





class GalleryModule {
}
GalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GalleryModule_Factory(t) { return new (t || GalleryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__["NguCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryModule, { declarations: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__["NguCarouselModule"]], exports: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngu_carousel__WEBPACK_IMPORTED_MODULE_3__["NguCarouselModule"]
                ],
                exports: [
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blocks/gallery/gallery/gallery.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blocks/gallery/gallery/gallery.component.ts ***!
  \*************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm2015/ngu-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function GalleryComponent_ngu_tile_2_figcaption_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r37.caption);
} }
function GalleryComponent_ngu_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_ngu_tile_2_figcaption_3_Template, 2, 1, "figcaption", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r37.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r37.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r37.caption);
} }
function GalleryComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const i_r41 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r34.moveTo(i_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r41 == _r34.activePoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("aria-label", "Ir para ", i_r41 + 1, "");
} }
class GalleryComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.ids = [];
        this.images = [];
        this.css = [];
    }
    set attrs(attrs) {
        this.ids = attrs['ids'];
        this.columns = attrs['columns'];
        this.css = [
            `gallery--columns-${attrs['columns']}`,
            `gallery--align-${attrs['align'] || 'left'}`,
            attrs['className'] || undefined
        ];
        this.config = {
            grid: { xs: 1, sm: 1, md: this.columns, lg: this.columns, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
    }
    ngOnInit() {
        this.ids.forEach((id) => this.wordpress.getMedia(id).subscribe(media => this.images.push(media.sizes['full'])));
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { attrs: "attrs" }, decls: 5, vars: 4, consts: [[1, "gallery", 3, "inputs", "dataSource", "ngClass"], ["carousel", ""], [4, "nguCarouselDef"], ["NguCarouselPoint", "", 1, "gallery__points"], ["class", "gallery__point", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "gallery__item"], [3, "src", "alt"], [4, "ngIf"], [1, "gallery__point", 3, "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-carousel", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_ngu_tile_2_Template, 4, 3, "ngu-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleryComponent_li_4_Template, 2, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.config)("dataSource", ctx.images)("ngClass", ctx.css);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r34.pointNumbers);
    } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguCarouselDefDirective"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguCarouselPointDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_2__["NguTileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".gallery[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.gallery__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tzL2dhbGxlcnkvZ2FsbGVyeS9DOlxceGFtcHBcXGh0ZG9jc1xcYW5ndWxhcnByZXNzL3NyY1xcYXBwXFxibG9ja3NcXGdhbGxlcnlcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2Nrcy9nYWxsZXJ5L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQ0Q7QURBQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ibG9ja3MvZ2FsbGVyeS9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdCZfX2l0ZW0gaW1nIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxufSIsIi5nYWxsZXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5nYWxsZXJ5X19pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, { attrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/blocks/latest-posts/latest-posts.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/blocks/latest-posts/latest-posts.component.ts ***!
  \***************************************************************/
/*! exports provided: LatestPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestPostsComponent", function() { return LatestPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post/post.component */ "./src/app/blocks/post/post.component.ts");





function LatestPostsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r27)("options", ctx_r26.options);
} }
function LatestPostsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LatestPostsComponent_ul_0_li_1_Template, 2, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r25.css.join(" "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.posts);
} }
class LatestPostsComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.posts = [];
        this.css = [];
    }
    set attrs(attrs) {
        this.args = {
            per_page: attrs['postsToShow'],
            order: attrs['order'],
            orderBy: attrs['orderBy'],
            categories: attrs['categories'],
        };
        this.options = {
            showDate: attrs['displayPostDate'],
            showContent: attrs['displayPostContent'],
            contentType: attrs['displayPostContentRadio'],
            excerpt: attrs['excerptLength']
        };
        this.css = [
            `latest-posts--${attrs['postLayout']}`,
            `latest-posts--align-${attrs['align'] || 'left'}`,
            `latest-posts--columns-${attrs['columns']}`,
            attrs['className'] || undefined
        ];
    }
    ngOnInit() {
        this.wordpress.getPosts(this.args).subscribe(posts => (this.posts = posts));
    }
}
LatestPostsComponent.ɵfac = function LatestPostsComponent_Factory(t) { return new (t || LatestPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
LatestPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestPostsComponent, selectors: [["app-latest-posts"]], inputs: { attrs: "attrs" }, decls: 1, vars: 1, consts: [["class", "latest-posts", 3, "ngClass", 4, "ngIf"], [1, "latest-posts", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "post", "options"]], template: function LatestPostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LatestPostsComponent_ul_0_Template, 2, 2, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9sYXRlc3QtcG9zdHMvbGF0ZXN0LXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestPostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latest-posts',
                templateUrl: './latest-posts.component.html',
                styleUrls: ['./latest-posts.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, { attrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/blocks/post/post.component.ts":
/*!***********************************************!*\
  !*** ./src/app/blocks/post/post.component.ts ***!
  \***********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");







function PostComponent_article_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r29.thumbnail.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r29.thumbnail.alt);
} }
function PostComponent_article_0_time_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("datetime", ctx_r30.post.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.post.date_formatted);
} }
function PostComponent_article_0_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r32.post.excerpt, ctx_r32.options.excerpt), " ");
} }
function PostComponent_article_0_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.post.content, " ");
} }
function PostComponent_article_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_article_0_div_6_ng_container_2_Template, 3, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_article_0_div_6_ng_container_3_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r31.options.contentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "excerpt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "full_post");
} }
function PostComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_article_0_img_2_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_article_0_time_5_Template, 2, 2, "time", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostComponent_article_0_div_6_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r28.getRouterLink(ctx_r28.post.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.options.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.options.showContent);
} }
class PostComponent {
    constructor(wordpress) {
        this.wordpress = wordpress;
        this.options = {
            showDate: false,
            showContent: false,
            contentType: 'excerpt',
            excerpt: 0
        };
    }
    ngOnInit() {
        if (this.post.thumbnail) {
            this.wordpress.getMedia(this.post.thumbnail).subscribe(media => (this.thumbnail = media.sizes['medium']));
        }
    }
    getRouterLink(url) {
        return url.replace(src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"].BASE_HREF, '');
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post", options: "options" }, decls: 1, vars: 1, consts: [["class", "post", 4, "ngIf"], [1, "post"], [3, "routerLink"], ["class", "post__thumbnail", 3, "src", "alt", 4, "ngIf"], [1, "post__title"], [4, "ngIf"], ["class", "post__content", 4, "ngIf"], [1, "post__thumbnail", 3, "src", "alt"], [1, "post__content"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_article_0_Template, 7, 5, "article", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"]], pipes: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/blocks/youtube/youtube.module.ts":
/*!**************************************************!*\
  !*** ./src/app/blocks/youtube/youtube.module.ts ***!
  \**************************************************/
/*! exports provided: YoutubeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeModule", function() { return YoutubeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube/youtube.component */ "./src/app/blocks/youtube/youtube/youtube.component.ts");





class YoutubeModule {
}
YoutubeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YoutubeModule });
YoutubeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YoutubeModule_Factory(t) { return new (t || YoutubeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YoutubeModule, { declarations: [_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayerModule"]], exports: [_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayerModule"]
                ],
                exports: [
                    _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blocks/youtube/youtube/youtube.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blocks/youtube/youtube/youtube.component.ts ***!
  \*************************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");



class YoutubeComponent {
    constructor() {
    }
    set attrs(attrs) {
        const url = attrs['url'];
        const match = url.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        if (match && match[2].length === 11) {
            this.videoId = match[2];
        }
    }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}
YoutubeComponent.ɵfac = function YoutubeComponent_Factory(t) { return new (t || YoutubeComponent)(); };
YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeComponent, selectors: [["app-youtube"]], inputs: { attrs: "attrs" }, decls: 1, vars: 1, consts: [[3, "videoId"]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy95b3V0dWJlL3lvdXR1YmUveW91dHViZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube',
                templateUrl: './youtube.component.html',
                styleUrls: ['./youtube.component.scss']
            }]
    }], function () { return []; }, { attrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CategoryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 2, vars: 0, template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/loading/loading.component */ "./src/app/base/loading/loading.component.ts");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/blocks.component */ "./src/app/blocks/blocks.component.ts");








function HomeComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-blocks", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blocks", ctx_r3.post.blocks);
} }
class HomeComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"] {
    constructor(route, wordpress) {
        super(route, wordpress);
        this.route = route;
        this.wordpress = wordpress;
        this.slug = 'home';
    }
    ngOnInit() {
        super.ngOnInit();
        this.wordpress.setTitle(this.wordpress.THEME.NAME);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "loading"], [3, "blocks"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_article_0_Template, 2, 1, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_6__["BlocksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/loading/loading.component */ "./src/app/base/loading/loading.component.ts");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/blocks.component */ "./src/app/blocks/blocks.component.ts");








function PageComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-blocks", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blocks", ctx_r2.post.blocks);
} }
class PageComponent extends _post_post_component__WEBPACK_IMPORTED_MODULE_1__["PostComponent"] {
    constructor(route, wordpress) {
        super(route, wordpress);
        this.route = route;
        this.wordpress = wordpress;
        this.slug = this.route.snapshot.paramMap.get('page');
        this.type = 'pages';
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "loading"], [3, "blocks"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_article_0_Template, 2, 1, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_6__["BlocksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page',
                templateUrl: './page.component.html',
                styleUrls: ['./page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruncatePipe {
    transform(value, length, elipses = '...') {
        let result = value || '';
        if (value) {
            const words = value.split(/\s+/);
            if (words.length > Math.abs(length)) {
                if (length < 0) {
                    length *= -1;
                    result = `${elipses}${words.slice(words.length - length, words.length).join(' ')}`;
                }
                else {
                    result = `${words.slice(0, length).join(' ')}${elipses}`;
                }
            }
        }
        return result;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/loading/loading.component */ "./src/app/base/loading/loading.component.ts");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/blocks.component */ "./src/app/blocks/blocks.component.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../author/author.component */ "./src/app/author/author.component.ts");








function PostComponent_article_0_app_author_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-author", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.post.author);
} }
function PostComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostComponent_article_0_app_author_7_Template, 1, 1, "app-author", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "blockquote", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-blocks", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("datetime", ctx_r0.post.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.date_formatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.post.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.post.excerpt, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blocks", ctx_r0.post.blocks);
} }
class PostComponent {
    constructor(route, wordpress) {
        this.route = route;
        this.wordpress = wordpress;
        this.type = 'posts';
        this.loading = true;
        this.slug = this.route.snapshot.paramMap.get('slug');
    }
    ngOnInit() {
        this.wordpress.getPosts({
            'slug': this.slug
        }, this.type).subscribe(posts => {
            this.post = posts[0];
            this.loading = false;
            this.wordpress.setTitle(this.post.title);
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post-page"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "loading"], [3, "id", 4, "ngIf"], [3, "innerHTML"], [3, "blocks"], [3, "id"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_article_0_Template, 12, 7, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_5__["BlocksComponent"], _author_author_component__WEBPACK_IMPORTED_MODULE_6__["AuthorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-page',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wordpress.service */ "./src/app/services/wordpress.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/loading/loading.component */ "./src/app/base/loading/loading.component.ts");









function SearchComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.wordpress.translate("Results Found"), ": ", ctx_r4.posts.length, " ");
} }
function SearchComponent_div_10_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r9.title, " ");
} }
function SearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_10_li_2_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.posts);
} }
function SearchComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.wordpress.translate("No results found"), " ");
} }
function SearchComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.loadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.wordpress.translate("Load More"), "\n");
} }
class SearchComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"] {
    constructor(route, router, wordpress) {
        super(route, wordpress);
        this.route = route;
        this.router = router;
        this.wordpress = wordpress;
        this.posts = [];
        this.ids = [];
        this.offset = 0;
        this.max = 0;
        this.postOptions = {
            contentType: 'excerpt',
            showDate: true,
            excerpt: 55,
            showContent: true
        };
        this.route.queryParams.subscribe(params => {
            this.query = params['query'];
            this.loading = true;
            this.wordpress.search({
                search: this.query,
                subtype: 'post'
            }).subscribe(search => this.onSearch(search));
        });
    }
    ngOnInit() {
        this.wordpress.setTitle(this.wordpress.translate('Search'));
    }
    ngOnChanges() { }
    ngOnDestroy() { }
    onSubmit() {
        this.query = this.queryIn;
        this.router.navigate(['/search'], {
            queryParams: {
                'query': this.query
            }
        });
    }
    onSearch(results) {
        this.queryIn = this.query;
        this.posts = [];
        this.offset = 0;
        this.max = results.length;
        if (results.length) {
            this.ids = results.map(result => result.id);
            this.loadMore();
        }
        else {
            this.loading = false;
        }
    }
    loadMore() {
        this.loading = true;
        this.wordpress.getPosts({
            'include[]': this.ids,
            per_page: this.wordpress.THEME.options.posts_per_page,
            offset: this.offset
        }).toPromise().then(posts => {
            posts.forEach(post => this.posts.push(post));
            this.offset += posts.length;
            this.loading = false;
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 9, consts: [[1, "search-page", "container-fluid"], [1, "row"], [1, "col-12"], ["name", "search", 3, "submit"], ["type", "text", "name", "s", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn--transparent", 3, "title"], ["name", "search"], [4, "ngIf"], ["id", "results", "class", "row", 4, "ngIf"], ["id", "no-results", 4, "ngIf"], ["class", "btn", 3, "click", 4, "ngIf"], [3, "loading"], ["id", "results", 1, "row"], [4, "ngFor", "ngForOf"], ["id", "no-results"], [1, "btn", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchComponent_Template_form_submit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.queryIn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i-feather", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_p_9_Template, 2, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_p_11_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_button_12_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-loading", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.wordpress.translate("You searched by"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.wordpress.translate("search"))("ngModel", ctx.queryIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.wordpress.translate("search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.posts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.posts.length < ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_feather__WEBPACK_IMPORTED_MODULE_5__["FeatherComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _base_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/wordpress.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/wordpress.service.ts ***!
  \***********************************************/
/*! exports provided: WordpressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressService", function() { return WordpressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");








class WordpressService {
    constructor(http, location, title) {
        this.http = http;
        this.location = location;
        this.title = title;
        this.context = "v2";
        this.headers = {};
        this.THEME = THEME;
        this.TRANSLATION = TRANSLATION;
        this.URL = `${this.location.prepareExternalUrl('wp-json')}/wp/${this.context}/`;
    }
    /**
     * Wrapper do método get
     * @param {string} path caminho para REST API
     * @param {Params} query Parâmetros URL GET
     */
    get(path, params = {}) {
        return this.http.get(`${this.URL}${path}`, {
            headers: this.headers,
            params: params,
        });
    }
    sanitizeHtml(str) {
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    preparePost(post) {
        return {
            id: post.id,
            url: post.link,
            title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["sanitizeHtml"])(post.title.rendered),
            date: post.date,
            date_formatted: post.date_formatted,
            excerpt: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["sanitizeHtml"])(post.excerpt.rendered),
            content: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["sanitizeHtml"])(post.content.rendered),
            blocks: post.blocks.map((block) => ({
                name: block.blockName,
                attrs: block.attrs,
                html: block.innerHTML
            })),
            author: post.author,
            thumbnail: post.featured_media || null
        };
    }
    /**
     * Recupera Posts
     * @param {Params} params Parâmetros para recuperação dos posts
     * @param {'posts' | 'pages'} type Tipo de post para recuperação
     * @returns {Observable<Post[]>} Retorna um observable com array de posts
     */
    getPosts(params, type = 'posts') {
        return this.get(type, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            let posts = [];
            res.forEach((post) => {
                posts.push(this.preparePost(post));
            });
            return posts;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    getPost(id) {
        return this.get(`posts/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((post) => this.preparePost(post)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    /**
     * Recupera Usuário
     * @param {number} id ID do usuário
     * @returns {Observable<User>} Retorna um observable com dados do usuário
     */
    getUser(id) {
        return this.get(`users/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return {
                id: res.id,
                name: res.name,
                link: res.link,
                slug: res.slug,
                avatar: res.avatar_urls['96']
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    getMenuItem(item) {
        return {
            ID: parseInt(item.ID),
            type: (item.post_type === 'custom') ? 'custom' : 'post',
            title: item.title,
            url: item.url,
            classes: item.classes,
            target: item.target || null
        };
    }
    /**
     * Recupera um Menu do Wordpress
     * @param {string} location Nome do menu
     * @returns {Observable<MenuItem[]>} Retorna um observable com uma lista de itens de menu
     */
    getMenu(location) {
        return this.get(`menu`, { location: location }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            let items = [];
            if (!res) {
                return [];
            }
            res.forEach((item) => {
                if (parseInt(item.menu_item_parent)) {
                    let index;
                    items.forEach((obj, i) => {
                        if (obj.ID === parseInt(item.menu_item_parent)) {
                            index = i;
                        }
                    });
                    if (items[index].items) {
                        items[index].items.push(this.getMenuItem(item));
                    }
                    else {
                        items[index].items = [this.getMenuItem(item)];
                    }
                }
                else {
                    items.push(this.getMenuItem(item));
                }
            });
            return items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    /**
     * Recupera informações sobre uma mídia
     * @param {string} id id da mídia
     * @returns {Obeservable<Media>} Observable da resposta com uma mídia
     */
    getMedia(id) {
        return this.get(`media/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((media) => {
            return {
                id: media.id,
                type: media.media_type,
                url: media.source_url,
                sizes: (() => {
                    const images = [];
                    Object.getOwnPropertyNames(media.media_details.sizes).forEach((key) => {
                        const image = media.media_details.sizes[key];
                        images[key] = {
                            size: key,
                            width: image.width,
                            height: image.height,
                            url: image.source_url,
                            alt: media.alt_text,
                            caption: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["sanitizeHtml"])(media.caption.rendered)
                        };
                    });
                    return images;
                })()
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    /**
     * Método para fazer busca na API do Wordpress
     * @param {SearchRequest} req Argumentos para o request
     * @returns {Observable<SearchReponse[]} Obersable com um array de SearchResponse
     */
    search(req) {
        return this.get(`search`, req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            const response = [];
            res.forEach((item) => {
                response.push({
                    id: item.id,
                    title: item.title,
                    url: item.url,
                    type: item.type,
                    subtype: item.subtype
                });
            });
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    /**
     * Traduz o tema
     * @param {string} label Label a ser traduzida
     * @returns {string} Retorna a tradução (se houver)
     */
    translate(label) {
        return this.TRANSLATION[label] || label;
    }
    /**
     * Modifica o título da página. Mantendo o título do blog no final
     * @param {string} title Título
     * @param {string} separator Separador
     */
    setTitle(title, separator = ' | ') {
        this.title.setTitle(`${title}${separator}${this.THEME.NAME}`);
    }
}
WordpressService.BASE_HREF = BASE_HREF;
WordpressService.ɵfac = function WordpressService_Factory(t) { return new (t || WordpressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"])); };
WordpressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WordpressService, factory: WordpressService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordpressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tag/tag.component.ts":
/*!**************************************!*\
  !*** ./src/app/tag/tag.component.ts ***!
  \**************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TagComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["app-tag"]], decls: 2, vars: 0, template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tag works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy90YWcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag',
                templateUrl: './tag.component.html',
                styleUrls: ['./tag.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: sanitizeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeHtml", function() { return sanitizeHtml; });
function sanitizeHtml(str) {
    return str.replace(/(<([^>]+)>)/ig, '');
}


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angularpress\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map