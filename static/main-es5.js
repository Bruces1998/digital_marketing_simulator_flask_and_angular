function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-config.ts":
  /*!*******************************!*\
    !*** ./src/app/app-config.ts ***!
    \*******************************/

  /*! exports provided: NextConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextConfig", function () {
      return NextConfig;
    });

    var NextConfig = function NextConfig() {
      _classCallCheck(this, NextConfig);
    };

    NextConfig.config = {
      layout: 'vertical',
      subLayout: '',
      collapseMenu: false,
      layoutType: 'menu-dark',
      headerBackColor: 'default-header',
      navBrandColor: 'brand-default',
      rtlLayout: false,
      navFixedLayout: true,
      headerFixedLayout: true,
      boxLayout: false
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme/layout/admin/admin.component */
    "./src/app/theme/layout/admin/admin.component.ts");
    /* harmony import */


    var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme/layout/auth/auth.component */
    "./src/app/theme/layout/auth/auth.component.ts");

    var routes = [{
      path: '',
      component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
      children: [{
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      }, {
        path: 'sample-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-pages-sample-page-sample-page-module */
          "demo-pages-sample-page-sample-page-module").then(__webpack_require__.bind(null,
          /*! ./demo/pages/sample-page/sample-page.module */
          "./src/app/demo/pages/sample-page/sample-page.module.ts")).then(function (module) {
            return module.SamplePageModule;
          });
        }
      }]
    }, {
      path: '',
      component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
      children: []
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! feather-icons */
    "./node_modules/feather-icons/dist/feather.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme/shared/components/spinner/spinner.component */
    "./src/app/theme/shared/components/spinner/spinner.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      // @ViewChild('myDiagram', { static: true }) public myDiagramComponent: DiagramComponent;
      // @ViewChild('myPalette', { static: true }) public myPaletteComponent: PaletteComponent;
      // // ***DIAGRAM***
      // public initDiagram(): go.Diagram {
      //   const $ = go.GraphObject.make;
      //   const dia = $(go.Diagram, {
      //     'undoManager.isEnabled': true,
      //     model: $(go.GraphLinksModel,
      //       {
      //         linkToPortIdProperty: 'toPort',
      //         linkFromPortIdProperty: 'fromPort',
      //         linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      //       }
      //     )
      //   });
      //   dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };
      //   dia.nodeTemplate =
      //     $(go.Node, "Vertical",
      //       $(go.Picture, {width: 125, height: 125}, new go.Binding("source", "elem"),
      //       {portId:"", fromLinkable: true, toLinkable: true, cursor:'pointer'}),
      //       $(go.TextBlock, {font:'14pt Sen, sans-serif',margin:2, editable:true}, new go.Binding("text","elemName"))
      //     )
      //   return dia;
      // }
      // public diagramNodeData: Array<go.ObjectData> = [];
      // public diagramLinkData: Array<go.ObjectData> = [];
      // public diagramDivClassName: string = 'myDiagramDiv';
      // public diagramModelData = { prop: 'value' };
      // public skipsDiagramUpdate = false;
      // // When the diagram model changes, update app data to reflect those changes
      // public diagramModelChange = function(changes: go.IncrementalData) {
      //   // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
      //   // (since this is a GoJS model changed listener event function)
      //   // this way, we don't log an unneeded transaction in the Diagram's undoManager history
      //   this.skipsDiagramUpdate = true;
      //   this.diagramNodeData = DataSyncService.syncNodeData(changes, this.diagramNodeData);
      //   this.diagramLinkData = DataSyncService.syncLinkData(changes, this.diagramLinkData);
      //   this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);
      // };
      // // ***PALETTE***
      // public initPalette(): go.Palette {
      //   const $ = go.GraphObject.make;
      //   const palette = $(go.Palette);
      //   // define the Node template
      //   palette.nodeTemplate =
      //     $(go.Node, "Vertical",
      //       $(go.Picture, {width: 75, height:75, margin: 5}, new go.Binding("source", "elem")),
      //       $(go.TextBlock, {font:'12pt Sen, sans-serif', margin: 2}, new go.Binding("text", "elemName"))
      //     );
      //   palette.model = $(go.GraphLinksModel,
      //     {
      //       linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      //     });
      //   return palette;
      // }
      // public paletteNodeData: Array<go.ObjectData> = [
      //   { key: '1', elem: '../../assets/imgs/start.png', elemName: 'Start' },
      //   { key: '2', elem: '../../assets/imgs/facebook.png', elemName: 'Facebook' },
      //   { key: '3', elem: '../../assets/imgs/twitter.png', elemName: 'Twitter' },
      //   { key: '4', elem: '../../assets/imgs/instagram2.png', elemName: 'Instagram' },
      //   { key: '5', elem: '../../assets/imgs/snapchat.jpg', elemName: 'Snapchat' },
      //   { key: '6', elem: '../../assets/imgs/youtube.png', elemName: 'YouTube' },
      //   { key: '7', elem: '../../assets/imgs/tv.png', elemName: 'TV Ads' },
      //   { key: '8', elem: '../../assets/imgs/pinterest.png', elemName: 'Pinterest' },
      //   { key: '9', elem: '../../assets/imgs/linkedin2.png', elemName: 'LinkedIn' },
      //   { key: '10', elem: '../../assets/imgs/gmail.png', elemName: 'Gmail' },
      //   { key: '11', elem: '../../assets/imgs/googleads.jpg', elemName: 'Google Ads' },
      //   { key: '12', elem: '../../assets/imgs/end.png', elemName: 'Stop' }
      // ];
      // public paletteLinkData: Array<go.ObjectData> = [];
      // public paletteModelData = { prop: 'val' };
      // public paletteDivClassName = 'myPaletteDiv';
      // public paletteModelChange = function(changes: go.IncrementalData) {
      //   this.paletteNodeData = DataSyncService.syncNodeData(changes, this.paletteNodeData);
      //   this.paletteLinkData = DataSyncService.syncLinkData(changes, this.paletteLinkData);
      //   this.paletteModelData = DataSyncService.syncModelData(changes, this.paletteModelData);
      // };
      function AppComponent(router, cdr) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.cdr = cdr;
      } // ***OVERVIEW***
      // Overview Component testing
      // public oDivClassName = 'myOverviewDiv';
      // public initOverview(): go.Overview {
      //   const $ = go.GraphObject.make;
      //   const overview = $(go.Overview);
      //   return overview;
      // }
      // public observedDiagram = null;
      // // currently selected node; for inspector
      // public selectedNode: go.Node | null = null;


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          feather_icons__WEBPACK_IMPORTED_MODULE_2__["replace"]();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./theme/layout/admin/admin.component */
    "./src/app/theme/layout/admin/admin.component.ts");
    /* harmony import */


    var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./theme/layout/auth/auth.component */
    "./src/app/theme/layout/auth/auth.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/navigation.component */
    "./src/app/theme/layout/admin/navigation/navigation.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-content.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-bar.component */
    "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/nav-search/nav-search.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-search/nav-search.component.ts");
    /* harmony import */


    var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
    /* harmony import */


    var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./theme/layout/admin/configuration/configuration.component */
    "./src/app/theme/layout/admin/configuration/configuration.component.ts");
    /* harmony import */


    var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./theme/shared/full-screen/toggle-full-screen */
    "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
    /* harmony import */


    var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./theme/layout/admin/navigation/navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _theme_layout_admin_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./theme/layout/admin/footer/footer.component */
    "./src/app/theme/layout/admin/footer/footer.component.ts");
    /* harmony import */


    var gojs_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! gojs-angular */
    "./node_modules/gojs-angular/__ivy_ngcc__/fesm2015/gojs-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _element_editor_element_editor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./element-editor/element-editor.component */
    "./src/app/element-editor/element-editor.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./theme/shared/components/alert/alert.component */
    "./src/app/theme/shared/components/alert/alert.component.ts");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _theme_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./theme/shared/components/breadcrumb/breadcrumb.component */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./theme/shared/components/modal/ui-modal/ui-modal.component */
    "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
    /* harmony import */


    var _theme_shared_components_modal_animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./theme/shared/components/modal/animation-modal/animation-modal.component */
    "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts");
    /* harmony import */


    var _theme_shared_components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./theme/shared/components/todo/todo-list-remove.directive */
    "./src/app/theme/shared/components/todo/todo-list-remove.directive.ts");
    /* harmony import */


    var _theme_shared_components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./theme/shared/components/todo/todo-card-complete.directive */
    "./src/app/theme/shared/components/todo/todo-card-complete.directive.ts");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_35__);
    /* harmony import */


    var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./theme/shared/components/spinner/spinner.component */
    "./src/app/theme/shared/components/spinner/spinner.component.ts");
    /* harmony import */


    var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./theme/shared/components/chart/apex-chart/apex-chart.component */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
    /* harmony import */


    var _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./theme/shared/components/gallery/gallery.component */
    "./src/app/theme/shared/components/gallery/gallery.component.ts");
    /* harmony import */


    var _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./theme/shared/components/toast/toast.component */
    "./src/app/theme/shared/components/toast/toast.component.ts");
    /* harmony import */


    var _theme_shared_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./theme/shared/components/data-table/data-filter.pipe */
    "./src/app/theme/shared/components/data-table/data-filter.pipe.ts");
    /* Menu Items */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__["NavigationItem"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabsetModule"], gojs_angular__WEBPACK_IMPORTED_MODULE_22__["GojsAngularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_right_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"], _theme_layout_admin_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _element_editor_element_editor_component__WEBPACK_IMPORTED_MODULE_24__["ElementEditorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabsetModule"], gojs_angular__WEBPACK_IMPORTED_MODULE_22__["GojsAngularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_right_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"], _theme_layout_admin_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _element_editor_element_editor_component__WEBPACK_IMPORTED_MODULE_24__["ElementEditorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabsetModule"], gojs_angular__WEBPACK_IMPORTED_MODULE_22__["GojsAngularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"]],
          providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__["NavigationItem"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_l"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormArrayName"], _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_28__["AlertComponent"], _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_29__["CardComponent"], _theme_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_30__["BreadcrumbComponent"], _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_31__["UiModalComponent"], _theme_shared_components_modal_animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_32__["AnimationModalComponent"], _theme_shared_components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_33__["TodoListRemoveDirective"], _theme_shared_components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_34__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_35__["ClickOutsideDirective"], _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_36__["SpinnerComponent"], _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_37__["ApexChartComponent"], _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_38__["GalleryComponent"], _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_39__["ToastComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["ɵm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabTitle"], gojs_angular__WEBPACK_IMPORTED_MODULE_22__["DiagramComponent"], gojs_angular__WEBPACK_IMPORTED_MODULE_22__["OverviewComponent"], gojs_angular__WEBPACK_IMPORTED_MODULE_22__["PaletteComponent"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_9__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_10__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_11__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_12__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_14__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_right_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_15__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_16__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"], _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"], _theme_layout_admin_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _element_editor_element_editor_component__WEBPACK_IMPORTED_MODULE_24__["ElementEditorComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["KeyValuePipe"], _theme_shared_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_40__["DataFilterPipe"]]);
    /***/

  },

  /***/
  "./src/app/element-editor/element-editor.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/element-editor/element-editor.component.ts ***!
    \************************************************************/

  /*! exports provided: ElementEditorComponent */

  /***/
  function srcAppElementEditorElementEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementEditorComponent", function () {
      return ElementEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! feather-icons */
    "./node_modules/feather-icons/dist/feather.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ElementEditorComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ElementEditorComponent_form_4_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.onCommitForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElementEditorComponent_form_4_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.data.elemName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Image URL ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElementEditorComponent_form_4_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r196.data.elem = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r191.data.elemName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r191.data.elem);
      }
    }

    function ElementEditorComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select an Element to Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ElementEditorComponent = /*#__PURE__*/function () {
      function ElementEditorComponent() {
        _classCallCheck(this, ElementEditorComponent);

        this.data = {
          key: null,
          elem: null,
          elemName: null
        };
        this.onFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ElementEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          feather_icons__WEBPACK_IMPORTED_MODULE_1__["replace"]();
        }
      }, {
        key: "onCommitForm",
        value: function onCommitForm() {
          this.onFormChange.emit(this.data);
        }
      }, {
        key: "selectedNode",
        get: function get() {
          return this._selectedNode;
        },
        set: function set(node) {
          if (node) {
            this._selectedNode = node;
            this.data.key = this._selectedNode.data.key;
            this.data.elem = this._selectedNode.data.elem;
            this.data.elemName = this._selectedNode.data.elemName;
          } else {
            this._selectedNode = null;
            this.data.key = null;
            this.data.elem = null;
            this.data.elemName = null;
          }
        }
      }]);

      return ElementEditorComponent;
    }();

    ElementEditorComponent.ɵfac = function ElementEditorComponent_Factory(t) {
      return new (t || ElementEditorComponent)();
    };

    ElementEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ElementEditorComponent,
      selectors: [["app-element-editor"]],
      inputs: {
        model: "model",
        selectedNode: "selectedNode"
      },
      outputs: {
        onFormChange: "onFormChange"
      },
      decls: 6,
      vars: 2,
      consts: [["id", "elemFormContainer", 1, "show", "left"], ["id", "elemForm"], [2, "font-size", "1.5em", "color", "black"], ["id", "elemFormAlign", 3, "ngSubmit", 4, "ngIf"], ["id", "elemFormMsg", 4, "ngIf"], ["id", "elemFormAlign", 3, "ngSubmit"], [1, "form-group"], [1, "elemFormLabel"], ["type", "text", "placeholder", "Default", "name", "elemName", 1, "form-control", "elemFormInput", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "URL", "name", "elem", 1, "form-control", "elemFormInput", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "elemFormBtn"], ["src", "../../assets/imgs/save.svg"], ["type", "reset", 1, "btn", "btn-light", "elemFormBtn"], ["src", "../../assets/imgs/refresh-cw.svg"], ["id", "elemFormMsg"]],
      template: function ElementEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Element Editor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ElementEditorComponent_form_4_Template, 13, 2, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ElementEditorComponent_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedNode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["#elemFormContainer[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  width: 100%;\n  z-index: 300;\n  height: 550px;\n}\n\n#elemForm[_ngcontent-%COMP%] {\n  \n  \n  height: 100%;\n  width: 100%;\n  margin: auto;\n  display: inline-block;\n  \n}\n\n#elemFormAlign[_ngcontent-%COMP%] {\n  margin: 20px 10px 20px 0px;\n}\n\n#elemFormMsg[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: black;\n}\n\n.elemFormLabel[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: black;\n}\n\n.elemFormInput[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  height: auto;\n  font-size: 0.9em;\n  border: 1px solid rgba(93, 123, 137, 0.5);\n}\n\n.elemFormBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.elemFormBtn.btn-light[_ngcontent-%COMP%] {\n  border: 1px solid rgba(93, 123, 137, 0.5);\n  margin-left: 3%;\n}\n\n.feathicon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: rgba(50, 65, 72, 0.8);\n}\n\n#pointer[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL2VsZW1lbnQtZWRpdG9yL2VsZW1lbnQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbGVtZW50LWVkaXRvci9lbGVtZW50LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0ksa0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBR0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNFLDBCQUFBO0FDRkY7O0FES0E7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudC1lZGl0b3IvZWxlbWVudC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWxlbUZvcm1Db250YWluZXJ7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAvKiBsZWZ0OiAxMjM1OyAqL1xyXG4gICAgLyogcmlnaHQ6IDIlOyAqL1xyXG4gICAgLyogdG9wOiAyNXB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAzMDA7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG5cclxufVxyXG5cclxuI2VsZW1Gb3Jte1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgKi9cclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY2O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvKiBmbG9hdDpsZWZ0OyAqL1xyXG59XHJcblxyXG4jZWxlbUZvcm1BbGlnbntcclxuICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDBweDtcclxufVxyXG5cclxuI2VsZW1Gb3JtTXNne1xyXG4gIC8vIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTowLjg1ZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZWxlbUZvcm1MYWJlbHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmVsZW1Gb3JtSW5wdXR7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5MywgMTIzLCAxMzcsIDAuNSk7XHJcbn1cclxuXHJcbi5lbGVtRm9ybUJ0biBpbWd7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4XHJcbn0gXHJcblxyXG4uZWxlbUZvcm1CdG4uYnRuLWxpZ2h0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTMsIDEyMywgMTM3LCAwLjUpO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJVxyXG59XHJcblxyXG4uZmVhdGhpY29ue1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBjb2xvcjogcmdiYSg1MCwgNjUsIDcyLCAwLjgpO1xyXG59XHJcblxyXG4jcG9pbnRlcntcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn0iLCIjZWxlbUZvcm1Db250YWluZXIge1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIC8qIGxlZnQ6IDEyMzU7ICovXG4gIC8qIHJpZ2h0OiAyJTsgKi9cbiAgLyogdG9wOiAyNXB4OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMzAwO1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuXG4jZWxlbUZvcm0ge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIGZsb2F0OmxlZnQ7ICovXG59XG5cbiNlbGVtRm9ybUFsaWduIHtcbiAgbWFyZ2luOiAyMHB4IDEwcHggMjBweCAwcHg7XG59XG5cbiNlbGVtRm9ybU1zZyB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5lbGVtRm9ybUxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZWxlbUZvcm1JbnB1dCB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTMsIDEyMywgMTM3LCAwLjUpO1xufVxuXG4uZWxlbUZvcm1CdG4gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmVsZW1Gb3JtQnRuLmJ0bi1saWdodCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTMsIDEyMywgMTM3LCAwLjUpO1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5mZWF0aGljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogcmdiYSg1MCwgNjUsIDcyLCAwLjgpO1xufVxuXG4jcG9pbnRlciB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-element-editor',
          templateUrl: './element-editor.component.html',
          styleUrls: ['./element-editor.component.scss']
        }]
      }], function () {
        return [];
      }, {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFormChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        selectedNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/admin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/layout/admin/admin.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppThemeLayoutAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! feather-icons */
    "./node_modules/feather-icons/dist/feather.js");
    /* harmony import */


    var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var gojs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! gojs */
    "./node_modules/gojs/release/go.js");
    /* harmony import */


    var gojs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var gojs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! gojs-angular */
    "./node_modules/gojs-angular/__ivy_ngcc__/fesm2015/gojs-angular.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/theme/layout/admin/navigation/navigation.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _element_editor_element_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../element-editor/element-editor.component */
    "./src/app/element-editor/element-editor.component.ts");
    /* harmony import */


    var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./configuration/configuration.component */
    "./src/app/theme/layout/admin/configuration/configuration.component.ts");

    var _c0 = ["myDiagram"];
    var _c1 = ["myPalette"];

    var _c2 = function _c2(a0, a1, a2) {
      return {
        "navbar-collapsed": a0,
        "theme-horizontal": a1,
        "mob-open": a2
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "container": a0
      };
    };

    var _c4 = function _c4(a0, a1, a2, a3) {
      return {
        "br": a0,
        "bl": a1,
        "tl": a2,
        "tr": a3
      };
    };

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(zone, location, cdr, formBuilder) {
        _classCallCheck(this, AdminComponent);

        this.zone = zone;
        this.location = location;
        this.cdr = cdr;
        this.formBuilder = formBuilder;
        this.mainModalMax = false;
        this.hidePalette = false;
        this.hideElemForm = false;
        this.showGrid = false;
        this.enableAlign = false;
        this.overviewPos = 1;
        this.template = [{
          id: 1,
          name: 'Facebook Ad',
          img: '../../assets/imgs/Template1.JPG'
        }];
        this.icons = [{
          key: 1,
          name: 'clock'
        }, {
          key: 2,
          name: 'edit'
        }, {
          key: 3,
          name: 'grid'
        }, {
          key: 4,
          name: 'align-justify'
        }, {
          key: 5,
          name: 'zoom-in'
        }, {
          key: 6,
          name: 'zoom-out'
        }, {
          key: 7,
          name: 'rotate-ccw'
        }, {
          key: 8,
          name: 'rotate-cw'
        }, {
          key: 9,
          name: 'copy'
        }, {
          key: 10,
          name: 'clipboard'
        }, {
          key: 11,
          name: 'trash'
        }, {
          key: 12,
          name: 'clock'
        }, {
          key: 13,
          name: 'square'
        }, {
          key: 14,
          name: 'download'
        }, {
          key: 15,
          name: 'archive'
        }, {
          key: 16,
          name: 'plus'
        }];
        this.diagramNodeData = [];
        this.diagramLinkData = [];
        this.diagramDivClassName = 'myDiagramDiv';
        this.diagramModelData = {
          prop: 'value'
        };
        this.skipsDiagramUpdate = false; // When the diagram model changes, update app data to reflect those changes

        this.diagramModelChange = function (changes) {
          // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
          // (since this is a GoJS model changed listener event function)
          // this way, we don't log an unneeded transaction in the Diagram's undoManager history
          this.skipsDiagramUpdate = true;
          this.diagramNodeData = gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DataSyncService"].syncNodeData(changes, this.diagramNodeData);
          this.diagramLinkData = gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DataSyncService"].syncLinkData(changes, this.diagramLinkData);
          this.diagramModelData = gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DataSyncService"].syncModelData(changes, this.diagramModelData);
        };

        this.paletteNodeData = [{
          key: '1',
          elem: '../../assets/imgs/start.png',
          elemName: 'Start'
        }, {
          key: '2',
          elem: '../../assets/imgs/facebook.png',
          elemName: 'Facebook'
        }, {
          key: '3',
          elem: '../../assets/imgs/twitter.png',
          elemName: 'Twitter'
        }, {
          key: '4',
          elem: '../../assets/imgs/instagram2.png',
          elemName: 'Instagram'
        }, {
          key: '5',
          elem: '../../assets/imgs/snapchat.jpg',
          elemName: 'Snapchat'
        }, {
          key: '6',
          elem: '../../assets/imgs/youtube.png',
          elemName: 'YouTube'
        }, {
          key: '7',
          elem: '../../assets/imgs/tv.png',
          elemName: 'TV Ads'
        }, {
          key: '8',
          elem: '../../assets/imgs/pinterest.png',
          elemName: 'Pinterest'
        }, {
          key: '9',
          elem: '../../assets/imgs/linkedin2.png',
          elemName: 'LinkedIn'
        }, {
          key: '10',
          elem: '../../assets/imgs/gmail.png',
          elemName: 'Gmail'
        }, {
          key: '11',
          elem: '../../assets/imgs/googleads.jpg',
          elemName: 'Google Ads'
        }, {
          key: '12',
          elem: '../../assets/imgs/end.png',
          elemName: 'Stop'
        }];
        this.paletteLinkData = [];
        this.paletteModelData = {
          prop: 'val'
        };
        this.paletteDivClassName = 'myPaletteDiv';

        this.paletteModelChange = function (changes) {
          this.paletteNodeData = gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DataSyncService"].syncNodeData(changes, this.paletteNodeData);
          this.paletteLinkData = gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DataSyncService"].syncLinkData(changes, this.paletteLinkData);
          this.paletteModelData = gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DataSyncService"].syncModelData(changes, this.paletteModelData);
        }; // ********** OVERVIEW ***********


        this.oDivClassName = 'myOverviewDiv';
        this.observedDiagram = null; // currently selected node; for inspector

        this.selectedNode = null;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        var currentURL = this.location.path();
        var baseHerf = this.location['_baseHref'];

        if (baseHerf) {
          currentURL = baseHerf + this.location.path();
        }

        this.windowWidth = window.innerWidth;

        if (currentURL === baseHerf + '/layout/collapse-menu' || currentURL === baseHerf + '/layout/box' || this.windowWidth >= 992 && this.windowWidth <= 1024) {
          this.nextConfig.collapseMenu = true;
        }

        this.navCollapsed = this.windowWidth >= 992 ? this.nextConfig.collapseMenu : false;
        this.navCollapsedMob = false;
        this.newElemFormGroup = this.formBuilder.group({
          newElemTitle: '',
          newElemImage: ''
        });
      } // ********* DIAGRAM **********
      // initialize diagram / templates


      _createClass(AdminComponent, [{
        key: "maximize",
        value: function maximize() {
          console.log(this.mainModalMax);
          this.mainModalMax = !this.mainModalMax;
        }
      }, {
        key: "initDiagram",
        value: function initDiagram() {
          var $ = gojs__WEBPACK_IMPORTED_MODULE_3__["GraphObject"].make;
          var dia = $(gojs__WEBPACK_IMPORTED_MODULE_3__["Diagram"], {
            'undoManager.isEnabled': true,
            model: $(gojs__WEBPACK_IMPORTED_MODULE_3__["GraphLinksModel"], {
              linkToPortIdProperty: 'toPort',
              linkFromPortIdProperty: 'fromPort',
              linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel

            })
          });
          dia.commandHandler.archetypeGroupData = {
            key: 'Group',
            isGroup: true
          };
          dia.nodeTemplate = $(gojs__WEBPACK_IMPORTED_MODULE_3__["Node"], "Vertical", $(gojs__WEBPACK_IMPORTED_MODULE_3__["Picture"], {
            width: 85,
            height: 85
          }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("source", "elem"), {
            portId: "",
            fromLinkable: true,
            toLinkable: true,
            cursor: 'pointer'
          }), $(gojs__WEBPACK_IMPORTED_MODULE_3__["TextBlock"], {
            font: '14pt Sen, sans-serif',
            margin: 2,
            editable: true
          }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("text", "elemName")), {
            selectionAdornmentTemplate: $(gojs__WEBPACK_IMPORTED_MODULE_3__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], "RoundedRectangle", {
              fill: null,
              stroke: "rgba(0, 172, 240)",
              strokeWidth: 2.5
            }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("stroke", "color")), $(gojs__WEBPACK_IMPORTED_MODULE_3__["Placeholder"])) // end Adornment

          });
          dia.linkTemplate = $(gojs__WEBPACK_IMPORTED_MODULE_3__["Link"], $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], {
            strokeWidth: 1
          }), $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], {
            toArrow: "Standard"
          }), {
            selectionAdornmentTemplate: $(gojs__WEBPACK_IMPORTED_MODULE_3__["Adornment"], $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], {
              isPanelMain: true,
              stroke: "rgb(0, 172, 240)",
              strokeWidth: 2
            })) // end Adornment

          });
          return dia; // rgb(0, 172, 240)
        } // ******** PALETTE **********

      }, {
        key: "initPalette",
        value: function initPalette() {
          var $ = gojs__WEBPACK_IMPORTED_MODULE_3__["GraphObject"].make;
          var palette = $(gojs__WEBPACK_IMPORTED_MODULE_3__["Palette"]); // define the Node template

          palette.nodeTemplate = $(gojs__WEBPACK_IMPORTED_MODULE_3__["Node"], "Vertical", $(gojs__WEBPACK_IMPORTED_MODULE_3__["Picture"], {
            width: 55,
            height: 55,
            margin: 5
          }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("source", "elem")), $(gojs__WEBPACK_IMPORTED_MODULE_3__["TextBlock"], {
            font: '10pt Sen, sans-serif',
            margin: 2
          }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("text", "elemName")), {
            selectionAdornmentTemplate: $(gojs__WEBPACK_IMPORTED_MODULE_3__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_3__["Shape"], "RoundedRectangle", {
              fill: null,
              stroke: "rgba(0, 172, 240)",
              strokeWidth: 2.5
            }, new gojs__WEBPACK_IMPORTED_MODULE_3__["Binding"]("stroke", "color")), $(gojs__WEBPACK_IMPORTED_MODULE_3__["Placeholder"])) // end Adornment

          });
          palette.model = $(gojs__WEBPACK_IMPORTED_MODULE_3__["GraphLinksModel"], {
            linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel

          });
          return palette;
        }
      }, {
        key: "initOverview",
        value: function initOverview() {
          var $ = gojs__WEBPACK_IMPORTED_MODULE_3__["GraphObject"].make;
          var overview = $(gojs__WEBPACK_IMPORTED_MODULE_3__["Overview"]);
          return overview;
        } // ******* TOOLBAR *********

      }, {
        key: "paletteToggle",
        value: function paletteToggle() {
          this.hidePalette = !this.hidePalette;
        }
      }, {
        key: "elemFormToggle",
        value: function elemFormToggle() {
          this.hideElemForm = !this.hideElemForm;
        }
      }, {
        key: "gridToggle",
        value: function gridToggle() {
          this.showGrid = !this.showGrid;

          if (this.myDiagramComponent && this.myDiagramComponent.diagram instanceof gojs__WEBPACK_IMPORTED_MODULE_3__["Diagram"]) {
            this.myDiagramComponent.diagram.grid.visible = this.showGrid;
          }
        }
      }, {
        key: "alignToggle",
        value: function alignToggle() {
          this.enableAlign = !this.enableAlign;

          if (this.myDiagramComponent && this.myDiagramComponent.diagram instanceof gojs__WEBPACK_IMPORTED_MODULE_3__["Diagram"]) {
            this.myDiagramComponent.diagram.grid.visible = this.enableAlign;
            this.myDiagramComponent.diagram.toolManager.draggingTool.isGridSnapEnabled = this.enableAlign;
          }
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          this.myDiagramComponent.diagram.commandHandler.increaseZoom();
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          this.myDiagramComponent.diagram.commandHandler.decreaseZoom();
        }
      }, {
        key: "undoChanges",
        value: function undoChanges() {
          this.myDiagramComponent.diagram.commandHandler.undo();
        }
      }, {
        key: "redoChanges",
        value: function redoChanges() {
          this.myDiagramComponent.diagram.commandHandler.redo();
        }
      }, {
        key: "copySelect",
        value: function copySelect() {
          this.myDiagramComponent.diagram.commandHandler.copySelection();
        }
      }, {
        key: "pasteSelect",
        value: function pasteSelect() {
          this.myDiagramComponent.diagram.commandHandler.pasteSelection();
        }
      }, {
        key: "deleteSelect",
        value: function deleteSelect() {
          this.myDiagramComponent.diagram.commandHandler.deleteSelection();
        }
      }, {
        key: "clearCanvas",
        value: function clearCanvas() {
          var confirmation = confirm('Are you sure you want to Clear the Canvas?');

          if (confirmation) {
            this.myDiagramComponent.diagram.clear();
          }
        }
      }, {
        key: "overviewPositionChange",
        value: function overviewPositionChange() {
          if (this.overviewPos == 4) {
            this.overviewPos = 1;
          } else {
            this.overviewPos++;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.windowWidth < 992) {
            this.nextConfig.layout = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-pangong').style.maxHeight = '100%'; // 100% amit
            }, 500);
          }
        }
      }, {
        key: "navMobClick",
        value: function navMobClick() {
          var _this = this;

          if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.navCollapsedMob = !this.navCollapsedMob;
              setTimeout(function () {
                _this.navCollapsedMob = !_this.navCollapsedMob;
              }, 100);
            } else {
              this.navCollapsedMob = !this.navCollapsedMob;
            }
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          feather_icons__WEBPACK_IMPORTED_MODULE_2__["replace"]();
          if (this.observedDiagram) return;
          this.observedDiagram = this.myDiagramComponent.diagram;
          this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

          var appComp = this; // listener for inspector

          this.myDiagramComponent.diagram.addDiagramListener('ChangedSelection', function (e) {
            if (e.diagram.selection.count === 0) {
              appComp.selectedNode = null;
            }

            var node = e.diagram.selection.first();

            if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_3__["Node"]) {
              appComp.selectedNode = node;
            } else {
              appComp.selectedNode = null;
            }
          });
        }
      }, {
        key: "addNew",
        value: function addNew(newElemFormData) {
          var t = newElemFormData['newElemTitle'];
          var u = newElemFormData['newElemImage'];
          var newElem = {
            elemName: t,
            elem: u
          };
          this.paletteNodeData.push(newElem);
        } // ********* INSPECTOR **********

      }, {
        key: "handleInspectorChange",
        value: function handleInspectorChange(newNodeData) {
          var key = newNodeData.key; // find the entry in nodeDataArray with this key, replace it with newNodeData

          var index = null;

          for (var i = 0; i < this.diagramNodeData.length; i++) {
            var entry = this.diagramNodeData[i];

            if (entry.key && entry.key === key) {
              index = i;
            }
          }

          if (index >= 0) {
            // here, we set skipsDiagramUpdate to false, since GoJS does not yet have this update
            this.skipsDiagramUpdate = false;
            this.diagramNodeData[index] = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](newNodeData);
          }
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      viewQuery: function AdminComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiagramComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myPaletteComponent = _t.first);
        }
      },
      decls: 163,
      vars: 35,
      consts: [[1, "pcoded-navbar", 3, "ngClass", "onNavMobCollapse"], [1, "navbar", "pcoded-header", "navbar-expand-lg", "navbar-light", 3, "onNavCollapse", "onNavHeaderMobCollapse"], [1, "pcoded-main-container"], [1, "pcoded-content", 3, "ngClass"], ["href", "#", "data-toggle", "modal", "data-target", "#SimulatorModal"], ["href", "#"], ["id", "SimulatorModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", "id", "mainModalDialog", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["id", "simulatorModalHeader", 1, "modal-header"], ["id", "addElemModalLabel", 1, "modal-title"], ["type", "button", "id", "maxmin", "aria-label", "maximize", 1, "maximize", 3, "click"], ["data-feather", "maximize", "id", "maximizeIcon"], ["type", "button", "id", "close", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "hidHeader"], ["id", "toolbar", 1, "row"], ["id", "alignIcons"], ["id", "paletteIcons"], [1, "toolBarIcon", 3, "click"], ["src", "../../assets/imgs/color-palette-outline.svg", 1, "feathicon"], ["data-toggle", "modal", "data-target", "#addElemModal", 1, "toolBarIcon"], ["data-feather", "plus-square", 1, "feathicon"], ["id", "canvasIcons"], ["data-feather", "grid", 1, "feathicon"], ["data-feather", "align-justify", 1, "feathicon"], ["data-feather", "zoom-in", 1, "feathicon"], ["data-feather", "zoom-out", 1, "feathicon"], ["data-feather", "rotate-ccw", 1, "feathicon"], ["data-feather", "rotate-cw", 1, "feathicon"], ["data-feather", "copy", 1, "feathicon"], ["data-feather", "clipboard", 1, "feathicon"], ["data-feather", "x-square", 1, "feathicon"], ["data-feather", "trash", 1, "feathicon"], ["data-feather", "layout", 1, "feathicon"], [1, "toolBarIcon"], ["data-feather", "download", "data-toggle", "modal", "data-target", "#exportCanvas", 1, "feathicon"], ["data-feather", "archive", "data-toggle", "modal", "data-target", "#chooseTemplateModal", 1, "feathicon"], ["id", "elemFormIcons"], ["data-feather", "edit", 1, "feathicon"], ["id", "addElemModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "newElemTitle"], ["type", "text", "id", "newElemTitle", "placeholder", "Title", "formControlName", "newElemTitle", 1, "form-control"], ["for", "newElemImage"], ["type", "text", "id", "newElemImage", "placeholder", "URL", "formControlName", "newElemImage", 1, "form-control"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "chooseTemplateModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["id", "chooseTemplate", 1, "modal-title"], [1, "templateTitle"], ["onclick", "addTemplate()", "data-dismiss", "modal", 1, "btn", "btn-primary", "templateBtn"], ["src", "../../assets/imgs/Template1.JPG", 1, "templateImg"], ["id", "exportCanvas", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exportCanvasTitle", 1, "modal-title"], ["ng-submit", "download()"], [1, "radio"], ["type", "radio", "name", "format", "value", "svg", "checked", ""], ["type", "radio", "name", "format", "value", "png"], ["type", "radio", "name", "format", "value", "jpg"], ["type", "radio", "name", "format", "value", "pdf"], ["id", "paletteContainer", 3, "ngClass"], [3, "initPalette", "divClassName", "nodeDataArray", "linkDataArray", "modelData", "modelChange"], ["myPalette", ""], ["id", "canvasContainer", 3, "ngClass"], [3, "initDiagram", "nodeDataArray", "linkDataArray", "divClassName", "modelData", "skipsDiagramUpdate", "modelChange"], ["myDiagram", ""], [3, "initOverview", "divClassName", "observedDiagram", "ngClass"], ["myOverview", ""], ["id", "elemEditorContainer", 3, "ngClass"], [3, "selectedNode", "onFormChange"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigation", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavMobCollapse", function AdminComponent_Template_app_navigation_onNavMobCollapse_0_listener() {
            return ctx.navMobClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-bar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavCollapse", function AdminComponent_Template_app_nav_bar_onNavCollapse_1_listener() {
            return ctx.navCollapsed = !ctx.navCollapsed;
          })("onNavHeaderMobCollapse", function AdminComponent_Template_app_nav_bar_onNavHeaderMobCollapse_1_listener() {
            return ctx.navMobClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Facebook Ad Funnel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Marketing Campaign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2021 Marketing Proposal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Simulator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_21_listener() {
            return ctx.maximize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_32_listener() {
            return ctx.paletteToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_37_listener() {
            return ctx.gridToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_39_listener() {
            return ctx.alignToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_41_listener() {
            return ctx.zoomIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_43_listener() {
            return ctx.zoomOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_45_listener() {
            return ctx.undoChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_47_listener() {
            return ctx.redoChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_49_listener() {
            return ctx.copySelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_51_listener() {
            return ctx.pasteSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_53_listener() {
            return ctx.deleteSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_55_listener() {
            return ctx.clearCanvas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_57_listener() {
            return ctx.overviewPositionChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_64_listener() {
            return ctx.elemFormToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Add New Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "form", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_76_listener() {
            return ctx.addNew(ctx.newElemFormGroup.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Give the Element a Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Enter an Image URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Choose a Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Template 1: Facebook Ad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Template 2: Twitter Ad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Template 1: Facebook Ad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Export Canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Select Format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "form", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " SVG Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " PNG Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " JPEG Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "gojs-palette", 67, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function AdminComponent_Template_gojs_palette_modelChange_151_listener($event) {
            return ctx.paletteModelChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "gojs-diagram", 70, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function AdminComponent_Template_gojs_diagram_modelChange_154_listener($event) {
            return ctx.diagramModelChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "gojs-overview", 72, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "app-element-editor", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFormChange", function AdminComponent_Template_app_element_editor_onFormChange_160_listener($event) {
            return ctx.handleInspectorChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "app-configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Ameya Pawar\nAtharvan Chavan\nRasika Hankare\nPrathamesh Gawande\nYogita Jatla\nDarshan Rajput");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](24, _c2, ctx.navCollapsed, ctx.nextConfig["layout"] === "horizontal", ctx.navCollapsedMob));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c3, ctx.nextConfig.layout === "horizontal" && ctx.nextConfig.subLayout === "horizontal-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mainModalMax ? "mainModalMaximized" : "mainModalMinimized");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidHeader", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newElemFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hidePalette ? "hide" : "show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initPalette", ctx.initPalette)("divClassName", ctx.paletteDivClassName)("nodeDataArray", ctx.paletteNodeData)("linkDataArray", ctx.paletteLinkData)("modelData", ctx.paletteModelData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mainModalMax ? "canvasMaximized" : "canvasMinimized");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initDiagram", ctx.initDiagram)("nodeDataArray", ctx.diagramNodeData)("linkDataArray", ctx.diagramLinkData)("divClassName", ctx.diagramDivClassName)("modelData", ctx.diagramModelData)("skipsDiagramUpdate", ctx.skipsDiagramUpdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initOverview", ctx.initOverview)("divClassName", ctx.oDivClassName)("observedDiagram", ctx.observedDiagram)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](30, _c4, ctx.overviewPos == 1, ctx.overviewPos == 2, ctx.overviewPos == 3, ctx.overviewPos == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hideElemForm ? "hide" : "show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedNode", ctx.selectedNode);
        }
      },
      directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ɵm"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], gojs_angular__WEBPACK_IMPORTED_MODULE_4__["PaletteComponent"], gojs_angular__WEBPACK_IMPORTED_MODULE_4__["DiagramComponent"], gojs_angular__WEBPACK_IMPORTED_MODULE_4__["OverviewComponent"], _element_editor_element_editor_component__WEBPACK_IMPORTED_MODULE_13__["ElementEditorComponent"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_14__["ConfigurationComponent"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Sen&display=swap);\n.card {\n  height: 100%;\n}\n#SimulatorModal {\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n}\n#simulatorModalHeader {\n  border: 0px;\n  padding: 20px 20px 0px 20px;\n}\n#SimulatorModal .card-body {\n  height: 560px;\n  padding: 20px 10px;\n}\n#close {\n  margin: -20px -20px -20px -20px;\n}\n#maxmin {\n  padding: 20px 20px;\n  margin: -20px 0px -20px 84%;\n  outline: none;\n}\n.mainModalMaximized {\n  margin: 0px auto;\n  max-width: 100%;\n  height: 100%;\n}\n.mainModalMinimized {\n  max-width: 1250px;\n  height: 700px;\n  margin-top: 10px;\n}\n.modal-content {\n  height: 100%;\n}\n.maximize {\n  border: none;\n  background: none;\n  margin-left: 85%;\n}\n#maximizeIcon {\n  width: 16px;\n  height: 16px;\n}\n#toolbar {\n  padding-bottom: 10px;\n}\n#toolbarComp {\n  top: 5px;\n  z-index: 300;\n  width: 100%;\n}\n#toolbarComp {\n  z-index: 300;\n  width: 100%;\n  margin: 0px 0px;\n  background-color: #c7c8c9;\n  display: inline-block;\n}\n.toolBarIcon {\n  margin: 12px;\n  width: 25px;\n}\n#alignIcons {\n  margin: 0px auto;\n}\n.templateBtn {\n  float: right;\n}\n.templateTitle {\n  color: black;\n}\n#paletteContainer {\n  position: absolute;\n  height: 81%;\n  z-index: 500;\n  left: 2.5%;\n  top: 85px;\n  background-color: white;\n  border: 1px solid rgba(93, 123, 137, 0.5);\n  border-radius: 5px;\n  transition: opacity 0.5s ease, width 0.2s ease;\n}\n.myPaletteDiv {\n  /* border: 1px solid navy; */\n  /* width: 200px; */\n  height: 100%;\n  width: 100%;\n  margin: auto;\n}\n#paletteIcons {\n  position: absolute;\n  left: 2%;\n  display: inline-block;\n}\n#canvasIcons {\n  display: inline-block;\n  margin: 0px 300px;\n}\n#elemFormIcons {\n  position: absolute;\n  right: 2%;\n  display: inline;\n}\n::-webkit-scrollbar {\n  width: 6px;\n  /* width of the entire scrollbar */\n}\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n  /* color of the tracking area */\n}\n::-webkit-scrollbar-thumb {\n  background-color: rgba(93, 123, 137, 0.4);\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  border-radius: 5px;\n}\n#addElemBtn {\n  background-color: #2b383e;\n  color: white;\n  margin: auto 0px;\n  width: 100%;\n}\n#addElemModal {\n  margin: 10px auto;\n  width: 500px;\n}\n#chooseTemplateModal {\n  margin: 10px auto;\n  width: 600px;\n}\n#exportCanvas {\n  margin: 10px auto;\n  width: 400px;\n}\n.modal-backdrop.show {\n  opacity: 0;\n}\n#canvasContainer {\n  width: 100%;\n}\n.canvasMinimized {\n  height: 525px;\n}\n.canvasMaximized {\n  height: 575px;\n}\n.myDiagramDiv {\n  width: 100%;\n  height: 100%;\n  /* border: 1px solid black; */\n}\n.myOverviewDiv {\n  /* width: 200px;\n  height: 150px;\n  background: whitesmoke;\n  border: 1px solid black; */\n  position: absolute;\n  width: 200px;\n  height: 120px;\n  background-color: white;\n  z-index: 300;\n  border: solid 1px rgba(93, 123, 137, 0.5);\n}\n.mainModalMaximized .tr > .myOverviewDiv {\n  top: 13.5%;\n  left: 66%;\n}\n.mainModalMinimized .tr > .myOverviewDiv {\n  top: 14.5%;\n  left: 63%;\n}\n.mainModalMaximized .br > .myOverviewDiv {\n  top: 75.5%;\n  left: 66%;\n}\n.mainModalMinimized .br > .myOverviewDiv {\n  top: 75%;\n  left: 63%;\n}\n.mainModalMaximized .tl > .myOverviewDiv {\n  top: 13.5%;\n  left: 20.5%;\n}\n.mainModalMinimized .tl > .myOverviewDiv {\n  top: 14.5%;\n  left: 20.2%;\n}\n.mainModalMaximized .bl > .myOverviewDiv {\n  top: 75.5%;\n  left: 20.5%;\n}\n.mainModalMinimized .bl > .myOverviewDiv {\n  top: 75%;\n  left: 20.2%;\n}\n#elemEditorContainer {\n  position: absolute;\n  /* left: 1235; */\n  right: 2.5%;\n  top: 85px;\n  z-index: 300;\n  height: 81%;\n  background-color: white;\n  border: 1px solid rgba(93, 123, 137, 0.5);\n  border-radius: 5px;\n  transition: opacity 0.5s ease, width 0.2s ease;\n}\n.show {\n  opacity: 1;\n  width: 16%;\n}\n.hide {\n  opacity: 0;\n  width: 0%;\n}\n.feathicon {\n  width: 20px;\n  height: 20px;\n  color: #324148;\n}\n/* #elemForm{ */\n/* background-color: whitesmoke; */\n/* border: 1px solid black; */\n/* height: 590px;\nwidth: 100%;\nmargin: auto;\ndisplay: inline-block;\nbackground-color: #f0f0f0;\nborder: 1px solid black; */\n/* float:left; */\n/* } */\n/* #elemFormAlign{\n  margin: 20px;\n} */\n.left {\n  float: left;\n  padding: 5px;\n  margin: 5px;\n}\n.clear {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFFQUFBO0FBRVI7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLCtCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNERjtBREtBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBRFVBO0VBQ0UsWUFBQTtBQ1BGO0FEVUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEWUE7RUFDRSxvQkFBQTtBQ1RGO0FEV0E7RUFDRSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ1JGO0FEV0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEWUE7RUFDRSxnQkFBQTtBQ1RGO0FEWUE7RUFDRSxZQUFBO0FDVEY7QURZQTtFQUNFLFlBQUE7QUNURjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FDNUJGO0FEK0JBO0VBRUksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzdCSjtBRGtDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDL0JKO0FEa0NFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQy9CSjtBRGtDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUMvQko7QURtQ0U7RUFDRSxVQUFBO0VBQTBCLGtDQUFBO0FDL0I5QjtBRGlDRTtFQUNFLDRDQUFBO0VBQ0Esb0RBQUE7RUFDQSx5QkFBQTtFQUFrQywrQkFBQTtBQzdCdEM7QUQrQkU7RUFDRSx5Q0FBQTtFQUNELDBNQUFBO0VBT0Msa0JBQUE7QUNsQ0o7QURxQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxVQUFBO0FDbENGO0FEbURBO0VBQ0UsV0FBQTtBQ2hERjtBRG9EQTtFQUNFLGFBQUE7QUNqREY7QURvREE7RUFDRSxhQUFBO0FDakRGO0FEcURBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ25ERjtBRHNEQTtFQUNFOzs7NEJBQUE7RUFJQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUNuREY7QURpRkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQzlFRjtBRGlGQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDOUVGO0FEaUZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUM5RUY7QURpRkE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQzlFRjtBRGlGQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDOUVGO0FEaUZBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUM5RUY7QURpRkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQzlFRjtBRGlGQTtFQUNFLFFBQUE7RUFDQSxXQUFBO0FDOUVGO0FEaUZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQy9FSjtBRG1GQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDaEZGO0FEbUZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNoRkY7QURtRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNoRkY7QURrRkEsZUFBQTtBQUNJLGtDQUFBO0FBQ0EsNkJBQUE7QUFDQTs7Ozs7MEJBQUE7QUFNQSxnQkFBQTtBQUNKLE1BQUE7QUFFQTs7R0FBQTtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDakZGO0FEMEZBO0VBQ0UsV0FBQTtBQ3ZGRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TZW4mZGlzcGxheT1zd2FwKTtcclxuJG1vZGFsU2l6ZSA6IDA7XHJcbi5jYXJke1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4vL01haW4gTW9kYWxcclxuI1NpbXVsYXRvck1vZGFse1xyXG4gIC8vIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiNzaW11bGF0b3JNb2RhbEhlYWRlcntcclxuICBib3JkZXI6IDBweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbiNTaW11bGF0b3JNb2RhbCAuY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogNTYwcHg7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG59XHJcblxyXG4jY2xvc2V7XHJcbiAgbWFyZ2luOi0yMHB4IC0yMHB4IC0yMHB4IC0yMHB4O1xyXG59XHJcblxyXG4jbWF4bWlue1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBtYXJnaW46IC0yMHB4IDBweCAtMjBweCA4NCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1haW5Nb2RhbE1heGltaXplZHtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgJG1vZGFsU2l6ZSA6IDE7XHJcbn1cclxuXHJcbi5tYWluTW9kYWxNaW5pbWl6ZWR7XHJcbiAgbWF4LXdpZHRoOiAxMjUwcHg7IFxyXG4gIGhlaWdodDogNzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAkbW9kYWxTaXplIDogMDtcclxufVxyXG5cclxuLy8gLm1vZGFsLW9wZW4gLm1vZGFse1xyXG4vLyAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuLy8gfVxyXG5cclxuLm1vZGFsLWNvbnRlbnR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF4aW1pemV7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1JTtcclxufVxyXG5cclxuI21heGltaXplSWNvbntcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4vLyBUb29sYmFyXHJcbiN0b29sYmFye1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OztcclxufVxyXG4jdG9vbGJhckNvbXB7XHJcbiAgdG9wOjVweDtcclxuICB6LWluZGV4OiAzMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0b29sYmFyQ29tcHtcclxuICB6LWluZGV4OiAzMDA7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW46IDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzhjOTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sQmFySWNvbntcclxuICBtYXJnaW46IDEycHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgXHJcbn1cclxuXHJcbiNhbGlnbkljb25ze1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn0gXHJcblxyXG4udGVtcGxhdGVCdG57XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGVtcGxhdGVUaXRsZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8vICNwYWxldHRlQ29udGFpbmVye1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgaGVpZ2h0OiA1NTBweDtcclxuLy8gICAgIC8qIHdpZHRoOiA0MDBweDsgKi9cclxuLy8gICAgIHdpZHRoOjE2JTtcclxuLy8gICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4vLyAgICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4vLyAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4vLyAgICAgei1pbmRleDogMjAwO1xyXG4vLyAgICAgLy8gdG9wOiAyNXB4O1xyXG4vLyAgICAgbGVmdDogMi41JTtcclxuLy8gICAgIHRvcDogMTUwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbi8vIH1cclxuXHJcbi8vIFBhbGV0dGVcclxuI3BhbGV0dGVDb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODElO1xyXG4gIC8vIHdpZHRoOiAxNiU7XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIGxlZnQ6IDIuNSU7XHJcbiAgdG9wOiA4NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTYsIDI1NiwgMjU2KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDkzLCAxMjMsIDEzNywwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgd2lkdGggMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubXlQYWxldHRlRGl2IHtcclxuICAgIC8vIGJhY2tncm91bmQ6I2Y1ZjVmNjtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG5hdnk7ICovXHJcbiAgICAvKiB3aWR0aDogMjAwcHg7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAjcGFsZXR0ZUljb25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAjY2FudmFzSWNvbnN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAzMDBweDtcclxuICB9XHJcblxyXG4gICNlbGVtRm9ybUljb25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuXHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDsgICAgICAgICAgICAgICAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7ICAgICAgICAvKiBjb2xvciBvZiB0aGUgdHJhY2tpbmcgYXJlYSAqL1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTMsIDEyMywgMTM3LDAuNCk7XHRcclxuXHQgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDI1JSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdHJhbnNwYXJlbnQgMjUlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0cmFuc3BhcmVudCA1MCUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDUwJSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNzUlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0cmFuc3BhcmVudCA3NSUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4jYWRkRWxlbUJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzODNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG8gMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jYWRkRWxlbU1vZGFse1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuI2Nob29zZVRlbXBsYXRlTW9kYWx7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4jZXhwb3J0Q2FudmFze1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wLnNob3d7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gI2NhbnZhc0NvbnRhaW5lcntcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGxlZnQ6IDEwcHg7XHJcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4vLyAgICAgaGVpZ2h0OiA2MDBweDtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHdpZHRoOiA5OC41JTtcclxuLy8gICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbi8vICAgICB6LWluZGV4OiAxO1xyXG4vLyAgICAgYmFja2dyb3VuZDojZjVmNWY2O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBcclxuLy8gfVxyXG5cclxuI2NhbnZhc0NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FudmFzTWluaW1pemVke1xyXG4gIGhlaWdodDogNTI1cHg7XHJcbn1cclxuXHJcbi5jYW52YXNNYXhpbWl6ZWR7XHJcbiAgaGVpZ2h0OiA1NzVweDtcclxufVxyXG5cclxuXHJcbi5teURpYWdyYW1EaXYge1xyXG4gIC8vIGJhY2tncm91bmQ6ICNmNWY1ZjY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG59XHJcblxyXG4ubXlPdmVydmlld0RpdiB7XHJcbiAgLyogd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gIHotaW5kZXg6IDMwMDtcclxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDkzLCAxMjMsIDEzNywwLjUpO1xyXG4gIC8vIHRvcDogNzUlOyBcclxuICAvLyBsZWZ0OiA2MCU7XHJcbn1cclxuXHJcbi8vIC5iciA+IC5teU92ZXJ2aWV3RGl2e1xyXG4vLyAgIHRvcDogNzUlO1xyXG4vLyAgIEBpZiAkbW9kYWxTaXplPT0xe1xyXG4vLyAgICAgbGVmdDogNjYlO1xyXG4vLyAgIH1cclxuLy8gICBAaWYgJG1vZGFsU2l6ZT09MHtcclxuLy8gICAgIGxlZnQ6IDYzJTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC5ibCA+IC5teU92ZXJ2aWV3RGl2e1xyXG4vLyAgIHRvcDogNzUlO1xyXG4vLyAgIGxlZnQ6IDIwJVxyXG4vLyB9XHJcblxyXG4vLyAudGwgID4gLm15T3ZlcnZpZXdEaXZ7XHJcbi8vICAgdG9wOiAxNyU7XHJcbi8vICAgbGVmdDogMjAlO1xyXG4vLyB9XHJcblxyXG4vLyAudHIgPiAubXlPdmVydmlld0RpdntcclxuLy8gICB0b3A6IDE3JTtcclxuLy8gICBsZWZ0OiA2MyVcclxuLy8gfVxyXG5cclxuLm1haW5Nb2RhbE1heGltaXplZCAudHIgPiAubXlPdmVydmlld0RpdiB7XHJcbiAgdG9wOiAxMy41JTtcclxuICBsZWZ0OiA2NiU7XHJcbn1cclxuXHJcbi5tYWluTW9kYWxNaW5pbWl6ZWQgLnRyID4gLm15T3ZlcnZpZXdEaXYge1xyXG4gIHRvcDogMTQuNSU7XHJcbiAgbGVmdDogNjMlO1xyXG59XHJcblxyXG4ubWFpbk1vZGFsTWF4aW1pemVkIC5iciA+IC5teU92ZXJ2aWV3RGl2IHtcclxuICB0b3A6IDc1LjUlO1xyXG4gIGxlZnQ6IDY2JTtcclxufVxyXG5cclxuLm1haW5Nb2RhbE1pbmltaXplZCAuYnIgPiAubXlPdmVydmlld0RpdiB7XHJcbiAgdG9wOiA3NSU7XHJcbiAgbGVmdDogNjMlO1xyXG59XHJcblxyXG4ubWFpbk1vZGFsTWF4aW1pemVkIC50bCA+IC5teU92ZXJ2aWV3RGl2IHtcclxuICB0b3A6IDEzLjUlO1xyXG4gIGxlZnQ6IDIwLjUlO1xyXG59XHJcblxyXG4ubWFpbk1vZGFsTWluaW1pemVkIC50bCA+IC5teU92ZXJ2aWV3RGl2IHtcclxuICB0b3A6IDE0LjUlO1xyXG4gIGxlZnQ6IDIwLjIlO1xyXG59XHJcblxyXG4ubWFpbk1vZGFsTWF4aW1pemVkIC5ibCA+IC5teU92ZXJ2aWV3RGl2IHtcclxuICB0b3A6IDc1LjUlO1xyXG4gIGxlZnQ6IDIwLjUlO1xyXG59XHJcblxyXG4ubWFpbk1vZGFsTWluaW1pemVkIC5ibCA+IC5teU92ZXJ2aWV3RGl2IHtcclxuICB0b3A6IDc1JTtcclxuICBsZWZ0OiAyMC4yJTtcclxufVxyXG5cclxuI2VsZW1FZGl0b3JDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBsZWZ0OiAxMjM1OyAqL1xyXG4gICAgcmlnaHQ6IDIuNSU7XHJcbiAgICB0b3A6IDg1cHg7XHJcbiAgICAvLyB3aWR0aDogMTYlO1xyXG4gICAgei1pbmRleDogMzAwO1xyXG4gICAgaGVpZ2h0OiA4MSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU2LCAyNTYsIDI1Nik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDkzLCAxMjMsIDEzNywwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHdpZHRoIDAuMnMgZWFzZTtcclxuXHJcbn1cclxuXHJcbi5zaG93e1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDE2JTtcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMCU7XHJcbn1cclxuXHJcbi5mZWF0aGljb257XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoNTAsIDY1LCA3Mik7XHJcbn1cclxuLyogI2VsZW1Gb3JteyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgKi9cclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgLyogaGVpZ2h0OiA1OTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgLyogZmxvYXQ6bGVmdDsgKi9cclxuLyogfSAqL1xyXG5cclxuLyogI2VsZW1Gb3JtQWxpZ257XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59ICovXHJcblxyXG4ubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4vLyAuYm94IHtcclxuLy8gICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbi8vIH1cclxuXHJcbi5jbGVhciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn0iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U2VuJmRpc3BsYXk9c3dhcCk7XG4uY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI1NpbXVsYXRvck1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jc2ltdWxhdG9yTW9kYWxIZWFkZXIge1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4jU2ltdWxhdG9yTW9kYWwgLmNhcmQtYm9keSB7XG4gIGhlaWdodDogNTYwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuI2Nsb3NlIHtcbiAgbWFyZ2luOiAtMjBweCAtMjBweCAtMjBweCAtMjBweDtcbn1cblxuI21heG1pbiB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAtMjBweCAwcHggLTIwcHggODQlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWFpbk1vZGFsTWF4aW1pemVkIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluTW9kYWxNaW5pbWl6ZWQge1xuICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXhpbWl6ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDg1JTtcbn1cblxuI21heGltaXplSWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbiN0b29sYmFyIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbiN0b29sYmFyQ29tcCB7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdG9vbGJhckNvbXAge1xuICB6LWluZGV4OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M4Yzk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2xCYXJJY29uIHtcbiAgbWFyZ2luOiAxMnB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuI2FsaWduSWNvbnMge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4udGVtcGxhdGVCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50ZW1wbGF0ZVRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jcGFsZXR0ZUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4MSU7XG4gIHotaW5kZXg6IDUwMDtcbiAgbGVmdDogMi41JTtcbiAgdG9wOiA4NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5MywgMTIzLCAxMzcsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHdpZHRoIDAuMnMgZWFzZTtcbn1cblxuLm15UGFsZXR0ZURpdiB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIG5hdnk7ICovXG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jcGFsZXR0ZUljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jY2FudmFzSWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDMwMHB4O1xufVxuXG4jZWxlbUZvcm1JY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIC8qIGNvbG9yIG9mIHRoZSB0cmFja2luZyBhcmVhICovXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkzLCAxMjMsIDEzNywgMC40KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jYWRkRWxlbUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjM4M2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiBhdXRvIDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhZGRFbGVtTW9kYWwge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4jY2hvb3NlVGVtcGxhdGVNb2RhbCB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogNjAwcHg7XG59XG5cbiNleHBvcnRDYW52YXMge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNjYW52YXNDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhbnZhc01pbmltaXplZCB7XG4gIGhlaWdodDogNTI1cHg7XG59XG5cbi5jYW52YXNNYXhpbWl6ZWQge1xuICBoZWlnaHQ6IDU3NXB4O1xufVxuXG4ubXlEaWFncmFtRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbi5teU92ZXJ2aWV3RGl2IHtcbiAgLyogd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAzMDA7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoOTMsIDEyMywgMTM3LCAwLjUpO1xufVxuXG4ubWFpbk1vZGFsTWF4aW1pemVkIC50ciA+IC5teU92ZXJ2aWV3RGl2IHtcbiAgdG9wOiAxMy41JTtcbiAgbGVmdDogNjYlO1xufVxuXG4ubWFpbk1vZGFsTWluaW1pemVkIC50ciA+IC5teU92ZXJ2aWV3RGl2IHtcbiAgdG9wOiAxNC41JTtcbiAgbGVmdDogNjMlO1xufVxuXG4ubWFpbk1vZGFsTWF4aW1pemVkIC5iciA+IC5teU92ZXJ2aWV3RGl2IHtcbiAgdG9wOiA3NS41JTtcbiAgbGVmdDogNjYlO1xufVxuXG4ubWFpbk1vZGFsTWluaW1pemVkIC5iciA+IC5teU92ZXJ2aWV3RGl2IHtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDYzJTtcbn1cblxuLm1haW5Nb2RhbE1heGltaXplZCAudGwgPiAubXlPdmVydmlld0RpdiB7XG4gIHRvcDogMTMuNSU7XG4gIGxlZnQ6IDIwLjUlO1xufVxuXG4ubWFpbk1vZGFsTWluaW1pemVkIC50bCA+IC5teU92ZXJ2aWV3RGl2IHtcbiAgdG9wOiAxNC41JTtcbiAgbGVmdDogMjAuMiU7XG59XG5cbi5tYWluTW9kYWxNYXhpbWl6ZWQgLmJsID4gLm15T3ZlcnZpZXdEaXYge1xuICB0b3A6IDc1LjUlO1xuICBsZWZ0OiAyMC41JTtcbn1cblxuLm1haW5Nb2RhbE1pbmltaXplZCAuYmwgPiAubXlPdmVydmlld0RpdiB7XG4gIHRvcDogNzUlO1xuICBsZWZ0OiAyMC4yJTtcbn1cblxuI2VsZW1FZGl0b3JDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIGxlZnQ6IDEyMzU7ICovXG4gIHJpZ2h0OiAyLjUlO1xuICB0b3A6IDg1cHg7XG4gIHotaW5kZXg6IDMwMDtcbiAgaGVpZ2h0OiA4MSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDkzLCAxMjMsIDEzNywgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgd2lkdGggMC4ycyBlYXNlO1xufVxuXG4uc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxNiU7XG59XG5cbi5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDAlO1xufVxuXG4uZmVhdGhpY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY29sb3I6ICMzMjQxNDg7XG59XG5cbi8qICNlbGVtRm9ybXsgKi9cbi8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7ICovXG4vKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbi8qIGhlaWdodDogNTkwcHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbjogYXV0bztcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5ib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbi8qIGZsb2F0OmxlZnQ7ICovXG4vKiB9ICovXG4vKiAjZWxlbUZvcm1BbGlnbntcbiAgbWFyZ2luOiAyMHB4O1xufSAqL1xuLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      }, {
        myDiagramComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myDiagram', {
            "static": true
          }]
        }],
        myPaletteComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myPalette', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/configuration/configuration.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppThemeLayoutAdminConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ConfigurationComponent_div_0_h6_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Brand Color");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function ConfigurationComponent_div_0_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_div_45_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r160.setBrandBackground("brand-blue");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_div_45_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r162.setBrandBackground("brand-red");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_div_45_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r163.setBrandBackground("brand-purple");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_div_45_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r164.setBrandBackground("brand-info");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_div_45_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r165.setBrandBackground("brand-dark");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_div_45_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r166.setBrandBackground("brand-default");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r155.brandBackgroundColor === "brand-blue"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r155.brandBackgroundColor === "brand-red"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r155.brandBackgroundColor === "brand-purple"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r155.brandBackgroundColor === "brand-info"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r155.brandBackgroundColor === "brand-dark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r155.brandBackgroundColor === "brand-default"));
      }
    }

    function ConfigurationComponent_div_0_div_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_46_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r167.rtlLayout = $event;
        })("change", function ConfigurationComponent_div_0_div_46_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r169.setRtlLayout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RTL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r156.rtlLayout);
      }
    }

    function ConfigurationComponent_div_0_div_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_47_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r170.menuFixedLayout = $event;
        })("change", function ConfigurationComponent_div_0_div_47_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r172.setMenuFixedLayout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Fixed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r157.menuFixedLayout);
      }
    }

    function ConfigurationComponent_div_0_div_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_48_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174);

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r173.headerFixedLayout = $event;
        })("change", function ConfigurationComponent_div_0_div_48_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r175.setHeaderFixedLayout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Header Fixed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r158.headerFixedLayout);
      }
    }

    function ConfigurationComponent_div_0_div_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_div_0_div_49_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r176.boxLayout = $event;
        })("change", function ConfigurationComponent_div_0_div_49_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r178.setBoxLayout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Box Layouts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r159.boxLayout);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "open": a0
      };
    };

    function ConfigurationComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pangong Live Menu Customizer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Layouts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r179.setLayout("menu-dark");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r181.setLayout("menu-light");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r182.setLayout("dark");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r183.setLayout("reset");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reset to Default");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "header background");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r184.setHeaderBackground("header-blue");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r185.setHeaderBackground("header-red");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r186.setHeaderBackground("header-purple");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r187.setHeaderBackground("header-info");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r188.setHeaderBackground("header-green");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r189.setHeaderBackground("header-dark");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurationComponent_div_0_Template_a_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r190.setHeaderBackground("");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ConfigurationComponent_div_0_h6_44_Template, 2, 0, "h6", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ConfigurationComponent_div_0_div_45_Template, 19, 18, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ConfigurationComponent_div_0_div_46_Template, 6, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ConfigurationComponent_div_0_div_47_Template, 6, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ConfigurationComponent_div_0_div_48_Template, 6, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ConfigurationComponent_div_0_div_49_Template, 6, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx_r153.styleSelectorToggle));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx_r153.layoutType === "menu-dark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r153.layoutType === "menu-light"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r153.layoutType === "dark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx_r153.layoutType === "reset"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx_r153.headerBackgroundColor === "header-blue"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx_r153.headerBackgroundColor === "header-red"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx_r153.headerBackgroundColor === "header-purple"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx_r153.headerBackgroundColor === "header-info"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx_r153.headerBackgroundColor === "header-green"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx_r153.headerBackgroundColor === "header-dark"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx_r153.headerBackgroundColor === "default-header"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.nextConfig["layout"] !== "horizontal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.nextConfig["layout"] !== "horizontal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.nextConfig["layout"] !== "horizontal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.nextConfig["layout"] !== "horizontal" && !ctx_r153.nextConfig["boxLayout"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.nextConfig["layout"] !== "horizontal" && !ctx_r153.nextConfig["boxLayout"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.nextConfig["layout"] !== "horizontal");
      }
    }

    var ConfigurationComponent = /*#__PURE__*/function () {
      function ConfigurationComponent(zone, location) {
        var _this2 = this;

        _classCallCheck(this, ConfigurationComponent);

        this.zone = zone;
        this.location = location;

        this.scroll = function () {
          if (_this2.headerFixedLayout === false) {
            document.querySelector('#nav-ps-pangong').style.maxHeight = 'calc(100vh)';
            var el = document.querySelector('.pcoded-navbar.menupos-fixed');
            var scrollPosition = window.pageYOffset;

            if (scrollPosition > 56) {
              el.style.position = 'fixed';
              el.style.transition = 'none';
              el.style.marginTop = '0';
            } else {
              el.style.position = 'absolute';
              el.style.marginTop = '56px';
            }
          } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
            document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
          }
        };

        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        this.setThemeLayout();
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.styleSelectorToggle = false;
          this.layoutType = this.nextConfig.layoutType;
          this.setLayout(this.layoutType);
          this.headerBackgroundColor = this.nextConfig.headerBackColor;
          this.brandBackgroundColor = this.nextConfig.navBrandColor;
          this.setHeaderBackground(this.headerBackgroundColor);
          this.rtlLayout = this.nextConfig.rtlLayout;
          this.changeRtlLayout(this.rtlLayout);
          this.menuFixedLayout = this.nextConfig.navFixedLayout;

          if (this.nextConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
          }

          this.headerFixedLayout = this.nextConfig.headerFixedLayout;
          this.changeHeaderFixedLayout(this.headerFixedLayout);
          this.boxLayout = this.nextConfig.boxLayout;
          this.changeBoxLayout(this.boxLayout);
        }
      }, {
        key: "setThemeLayout",
        value: function setThemeLayout() {
          var currentURL = this.location.path();
          var baseHref = this.location['_baseHref'];

          if (baseHref) {
            currentURL = baseHref + this.location.path();
          }

          if (currentURL.includes('?_ga=')) {
            currentURL = currentURL.split('?_ga=', 1)[0];
          }

          switch (currentURL) {
            case baseHref + '/layout/static':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/fixed':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navFixedLayout = true;
              this.nextConfig.headerFixedLayout = true;
              break;

            case baseHref + '/layout/nav-fixed':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navFixedLayout = true;
              this.nextConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/collapse-menu':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.collapseMenu = true;
              break;

            case baseHref + '/layout/vertical-rtl':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.rtlLayout = true;
              break;

            case baseHref + '/layout/horizontal':
              this.nextConfig.layout = 'horizontal';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/horizontal-l2':
              this.nextConfig.layout = 'horizontal';
              this.nextConfig.subLayout = 'horizontal-2';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/horizontal-rtl':
              this.nextConfig.layout = 'horizontal';
              this.nextConfig.subLayout = 'horizontal-2';
              this.nextConfig.navFixedLayout = false;
              this.nextConfig.headerFixedLayout = false;
              this.nextConfig.rtlLayout = true;
              break;

            case baseHref + '/layout/box':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.boxLayout = true;
              this.nextConfig.headerFixedLayout = false;
              this.nextConfig.collapseMenu = true;
              break;

            case baseHref + '/layout/light':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.layoutType = 'menu-light';
              this.nextConfig.headerBackColor = 'default-header';
              break;

            case baseHref + '/layout/dark':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.layoutType = 'dark';
              this.nextConfig.headerBackColor = 'header-blue';
              break;

            case baseHref + '/layout/nav-color':
              this.nextConfig.layout = 'vertical';
              this.nextConfig.navBrandColor = 'brand-info';
              this.nextConfig.layoutType = 'menu-light';
              this.nextConfig.headerBackColor = 'header-info';
              this.nextConfig.navFixedLayout = true;
              this.nextConfig.headerFixedLayout = true;
              break;

            default:
              break;
          }
        }
      }, {
        key: "setHeaderBackColor",
        value: function setHeaderBackColor(color) {
          this.headerBackColor = color;
          document.querySelector('body').style.background = color;
        } // change main layout

      }, {
        key: "setLayout",
        value: function setLayout(layout) {
          this.isConfig = true;
          this.setBrandBackground(this.nextConfig.navBrandColor);
          document.querySelector('.pcoded-navbar').classList.remove('menu-light');
          document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
          document.querySelector('body').classList.remove('pangong-dark');
          this.layoutType = layout;

          if (layout === 'menu-light') {
            document.querySelector('.pcoded-navbar').classList.add(layout);
          }

          if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            this.setHeaderBackground('header-dark');
            document.querySelector('body').classList.add('pangong-dark');
          }

          if (layout === 'reset') {
            this.reset();
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
          this.ngOnInit();
        }
      }, {
        key: "setRtlLayout",
        value: function setRtlLayout(e) {
          var flag = !!e.target.checked;
          this.changeRtlLayout(flag);
        }
      }, {
        key: "changeRtlLayout",
        value: function changeRtlLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('pangong-rtl');
          } else {
            document.querySelector('body').classList.remove('pangong-rtl');
          }
        }
      }, {
        key: "setMenuFixedLayout",
        value: function setMenuFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeMenuFixedLayout(flag);
        }
      }, {
        key: "changeMenuFixedLayout",
        value: function changeMenuFixedLayout(flag) {
          var _this3 = this;

          setTimeout(function () {
            if (flag) {
              document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
              document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');

              if (_this3.nextConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-pangong').style.maxHeight = 'calc(100vh - 56px)'; // calc(100vh - 70px) amit
              }

              window.addEventListener('scroll', _this3.scroll, true);
              window.scrollTo(0, 0);
            } else {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');

              if (_this3.nextConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-pangong').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
              }

              if (_this3.nextConfig.layout === 'vertical') {
                window.removeEventListener('scroll', _this3.scroll, true);
              }
            }
          }, 100);
        }
      }, {
        key: "setHeaderFixedLayout",
        value: function setHeaderFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeHeaderFixedLayout(flag);
        }
      }, {
        key: "changeHeaderFixedLayout",
        value: function changeHeaderFixedLayout(flag) {
          if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
          } else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed'); // static

            if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
              window.addEventListener('scroll', this.scroll, true);
              window.scrollTo(0, 0);
            } else {
              window.removeEventListener('scroll', this.scroll, true);
            }
          }
        }
      }, {
        key: "setBoxLayout",
        value: function setBoxLayout(e) {
          var flag = !!e.target.checked;
          this.changeBoxLayout(flag);
        }
      }, {
        key: "changeBoxLayout",
        value: function changeBoxLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
            this.nextConfig['box-layout'] = true;
          } else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
            this.nextConfig['box-layout'] = false;
          }
        }
      }, {
        key: "setHeaderBackground",
        value: function setHeaderBackground(background) {
          this.headerBackgroundColor = background;
          this.nextConfig.headerBackColor = background;
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-red');
          document.querySelector('.pcoded-header').classList.remove('header-purple');
          document.querySelector('.pcoded-header').classList.remove('header-info');
          document.querySelector('.pcoded-header').classList.remove('header-green');
          document.querySelector('.pcoded-header').classList.remove('header-dark');
          document.querySelector('.pcoded-header').classList.add(background);
        }
      }, {
        key: "setBrandBackground",
        value: function setBrandBackground(background) {
          this.brandBackgroundColor = background;
          this.nextConfig.navBrandColor = background;
          document.querySelector('.pcoded-header').classList.remove('brand-blue');
          document.querySelector('.pcoded-header').classList.remove('brand-red');
          document.querySelector('.pcoded-header').classList.remove('brand-purple');
          document.querySelector('.pcoded-header').classList.remove('brand-info');
          document.querySelector('.pcoded-header').classList.remove('brand-green');
          document.querySelector('.pcoded-header').classList.remove('brand-dark');
          document.querySelector('.pcoded-header').classList.remove('brand-default');
          document.querySelector('.pcoded-header').classList.add(background);
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) {
      return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigurationComponent,
      selectors: [["app-configuration"]],
      decls: 1,
      vars: 1,
      consts: [["id", "styleSelector", "class", "menu-styler", 3, "ngClass", 4, "ngIf"], ["id", "styleSelector", 1, "menu-styler", 3, "ngClass"], [1, "style-block"], [1, "mb-2"], [1, "my-0"], [1, "m-style-scroller"], [1, "theme-color", "layout-type"], ["href", "javascript:", "data-value", "menu-dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "menu-light", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "reset", 3, "ngClass", "click"], [1, "theme-color", "header-color"], ["href", "javascript:", "data-value", "header-blue", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-red", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-purple", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-info", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-green", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "header-default", 3, "ngClass", "click"], [4, "ngIf"], ["class", "theme-color brand-color", 4, "ngIf"], ["class", "form-group mb-0", 4, "ngIf"], [1, "theme-color", "brand-color"], ["href", "javascript:", "data-value", "brand-blue", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "brand-red", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "brand-purple", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "brand-info", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "brand-dark", 3, "ngClass", "click"], ["href", "javascript:", "data-value", "brand-default", 3, "ngClass", "click"], [1, "form-group", "mb-0"], [1, "switch", "switch-primary", "d-inline", "m-r-10"], ["type", "checkbox", "id", "theme-rtl", 3, "ngModel", "ngModelChange", "change"], ["for", "theme-rtl", 1, "cr"], ["type", "checkbox", "id", "menu-fixed", 3, "ngModel", "ngModelChange", "change"], ["for", "menu-fixed", 1, "cr"], ["type", "checkbox", "id", "header-fixed", 3, "ngModel", "ngModelChange", "change"], ["for", "header-fixed", 1, "cr"], ["type", "checkbox", "id", "box-layouts", 3, "ngModel", "ngModelChange", "change"], ["for", "box-layouts", 1, "cr"]],
      template: function ConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfigurationComponent_div_0_Template, 50, 42, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfig);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.pangong-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.pangong-dark .menu-styler h1,\nbody.pangong-dark .menu-styler h2,\nbody.pangong-dark .menu-styler h3,\nbody.pangong-dark .menu-styler h4,\nbody.pangong-dark .menu-styler h5,\nbody.pangong-dark .menu-styler p,\nbody.pangong-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FETUk7RUFDRSxtQ0FBQTtBQ0hOOztBREtJOzs7Ozs7O0VBT0UsV0FBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXN0eWxlciB7XHJcbiAgLm5hdi1waWxscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuYm9keS5wYW5nb25nLWRhcmt7XHJcbiAgLm1lbnUtc3R5bGVye1xyXG4gICAgLnRhYi1jb250ZW50e1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xyXG4gICAgfVxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIHAsXHJcbiAgICBoNntcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tZW51LXN0eWxlciAubmF2LXBpbGxzIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgLnRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSg0LCAxNjksIDI0NSwgMC4wMyk7XG59XG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgaDEsXG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgaDIsXG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgaDMsXG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgaDQsXG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgaDUsXG5ib2R5LnBhbmdvbmctZGFyayAubWVudS1zdHlsZXIgcCxcbmJvZHkucGFuZ29uZy1kYXJrIC5tZW51LXN0eWxlciBoNiB7XG4gIGNvbG9yOiAjMjIyO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-configuration',
          templateUrl: './configuration.component.html',
          styleUrls: ['./configuration.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/footer/footer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/layout/admin/footer/footer.component.ts ***!
    \***************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppThemeLayoutAdminFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 17,
      vars: 0,
      consts: [[1, "footer"], [1, "row"], [1, "col-md-6", "col-sm-12", "text-center", "text-md-left"], ["href", "https://hencework.com/", "target", "_blank", 1, "text-dark", "mx-2"], [1, "col-md-6", "col-sm-12", "text-center", "text-md-right"], ["href", "javascript:", 1, "text-dark", "ml-2"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google-plus-g"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pampered by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hencework");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA9 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Follow us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-left/nav-left.component */
    "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
    /* harmony import */


    var _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav-right/nav-right.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");

    function NavBarComponent_div_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavBarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r142);
      }
    }

    function NavBarComponent_ng_template_1_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
      }
    }

    function NavBarComponent_ng_template_1_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }
    }

    var _c0 = function _c0() {
      return ["/dashboard/analytics"];
    };

    var _c1 = function _c1(a0) {
      return {
        "on": a0
      };
    };

    function NavBarComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r147.navCollapse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavBarComponent_ng_template_1_img_4_Template, 1, 0, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavBarComponent_ng_template_1_img_5_Template, 1, 0, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r149.toggleMobOption();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-nav-left", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-nav-right", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r143.nextConfig.navBrandColor !== "brand-default" || ctx_r143.nextConfig.headerBackColor !== "default-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r143.nextConfig.navBrandColor === "brand-default" && ctx_r143.nextConfig.headerBackColor === "default-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r143.menuClass));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r143.collapseStyle);
      }
    }

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);

        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMobOption",
        value: function toggleMobOption() {
          this.menuClass = !this.menuClass;
          this.collapseStyle = this.menuClass ? 'block' : 'none';
        }
      }, {
        key: "navCollapse",
        value: function navCollapse() {
          if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
          } else {
            this.onNavHeaderMobCollapse.emit();
          }
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      outputs: {
        onNavCollapse: "onNavCollapse",
        onNavHeaderMobCollapse: "onNavHeaderMobCollapse"
      },
      decls: 3,
      vars: 2,
      consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["mainHeader", ""], [1, "container"], [4, "ngTemplateOutlet"], [1, "m-header"], ["href", "javascript:", "id", "mobile-collapse", 1, "mobile-menu", 3, "click"], [1, "b-brand", 3, "routerLink"], ["id", "main-logo", "src", "../../../../../assets/images/logo.png", "alt", "", "class", "logo", 4, "ngIf"], ["src", "../../../../../assets/images/logo-dark.png", "alt", "", "class", "logo", 4, "ngIf"], ["src", "../../../../../assets/images/logo-icon.png", "alt", "", 1, "logo-thumb"], ["href", "javascript:", 1, "mob-toggler", 3, "ngClass", "click"], [1, "feather", "icon-more-vertical"], [1, "collapse", "navbar-collapse"], [1, "mr-auto"], [1, "ml-auto"], ["id", "main-logo", "src", "../../../../../assets/images/logo.png", "alt", "", 1, "logo"], ["src", "../../../../../assets/images/logo-dark.png", "alt", "", 1, "logo"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_Template, 12, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextConfig.layout === "horizontal" && ctx.nextConfig.subLayout === "horizontal-2")("ngIfElse", _r142);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_4__["NavLeftComponent"], _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_5__["NavRightComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onNavCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onNavHeaderMobCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NavLeftComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavLeftNavLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
      return NavLeftComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../app-config */
    "./src/app/app-config.ts");

    var NavLeftComponent = /*#__PURE__*/function () {
      function NavLeftComponent() {
        _classCallCheck(this, NavLeftComponent);

        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
      }

      _createClass(NavLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavLeftComponent;
    }();

    NavLeftComponent.ɵfac = function NavLeftComponent_Factory(t) {
      return new (t || NavLeftComponent)();
    };

    NavLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavLeftComponent,
      selectors: [["app-nav-left"]],
      decls: 0,
      vars: 0,
      template: function NavLeftComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-left',
          templateUrl: './nav-left.component.html',
          styleUrls: ['./nav-left.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: NavRightComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightNavRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
      return NavRightComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nav-search/nav-search.component */
    "./src/app/theme/layout/admin/nav-bar/nav-right/nav-search/nav-search.component.ts");

    var NavRightComponent = /*#__PURE__*/function () {
      function NavRightComponent() {
        _classCallCheck(this, NavRightComponent);
      }

      _createClass(NavRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavRightComponent;
    }();

    NavRightComponent.ɵfac = function NavRightComponent_Factory(t) {
      return new (t || NavRightComponent)();
    };

    NavRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavRightComponent,
      selectors: [["app-nav-right"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
      decls: 104,
      vars: 0,
      consts: [[1, "navbar-nav", "ml-auto"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:"], ["data-feather", "bell", 1, "feathicon", "icon", 2, "margin", "20px"], [1, "badge", "badge-pill", "badge-primary"], [1, "sr-only"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "notification"], [1, "noti-head"], [1, "d-inline-block", "m-b-0"], [1, "float-right"], ["href", "javascript:", 1, "m-r-10"], ["href", "javascript:"], [1, "noti-body"], [1, "n-title"], [1, "m-b-0"], [1, "notification"], [1, "media"], ["src", "../../../../../../../../assets/images/user/avatar-1.jpg", "alt", "Generic placeholder image", 1, "img-radius"], [1, "media-body"], [1, "n-time", "text-muted"], ["data-feather", "clock", 1, "feathicon"], ["src", "../../../../../../../../assets/images/user/avatar-2.jpg", "alt", "Generic placeholder image", 1, "img-radius"], ["src", "../../../../../../../../assets/images/user/avatar-3.jpg", "alt", "Generic placeholder image", 1, "img-radius"], [1, "noti-footer"], ["ngbDropdown", "", "placement", "auto", 1, "drp-user", "dropdown"], ["href", "javascript:", "ngbDropdownToggle", ""], [1, "media", "d-inline-block", "d-md-flex"], ["src", "assets/images/user/avatar-2.jpg", "alt", "User-Profile-Image", 1, "align-self-center", "img-radius"], [1, "media-body", "ml-2", "d-none", "d-xl-flex", "d-lg-flex", "d-md-flex"], [1, "mb-0"], ["data-feather", "chevron-down", 1, "feathicon"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "profile-notification"], [1, "pro-body"], ["href", "javascript:", 1, "dropdown-item"], ["data-feather", "user", 1, "feathicon"], ["data-feather", "mail", 1, "feathicon"], ["data-feather", "lock", 1, "feathicon"], [1, "dropdown-divider"]],
      template: function NavRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "mark as read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "clear all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "30 min");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "New ticket Added");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "EARLIER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Joseph William");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "30 min");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Prchace New Theme and make payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sara Soudein");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "< ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "30 min");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "currently login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "show all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Madelyn Shane ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " My Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_2__["NavSearchComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-right',
          templateUrl: './nav-right.component.html',
          styleUrls: ['./nav-right.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/nav-bar/nav-right/nav-search/nav-search.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-search/nav-search.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: NavSearchComponent */

  /***/
  function srcAppThemeLayoutAdminNavBarNavRightNavSearchNavSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
      return NavSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavSearchComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSearchComponent_div_2_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152);

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r151.isSearch = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavSearchComponent = /*#__PURE__*/function () {
      function NavSearchComponent() {
        _classCallCheck(this, NavSearchComponent);
      }

      _createClass(NavSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavSearchComponent;
    }();

    NavSearchComponent.ɵfac = function NavSearchComponent_Factory(t) {
      return new (t || NavSearchComponent)();
    };

    NavSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavSearchComponent,
      selectors: [["app-nav-search"]],
      decls: 3,
      vars: 1,
      consts: [["href", "javascript:", 1, "pop-search", 3, "click"], ["data-feather", "search", 1, "feathicon", "icon"], ["class", "search-bar", 4, "ngIf"], [1, "search-bar"], ["type", "text", "placeholder", "Search here", 1, "form-control", "border-0", "shadow-none"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
      template: function NavSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSearchComponent_Template_a_click_0_listener() {
            return ctx.isSearch = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavSearchComponent_div_2_Template, 5, 0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearch);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtc2VhcmNoL25hdi1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-search',
          templateUrl: './nav-search.component.html',
          styleUrls: ['./nav-search.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: NavCollapseComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavCollapseNavCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
      return NavCollapseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");

    function NavCollapseComponent_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavCollapseComponent_ng_container_0_li_1_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0() {
      return ["active"];
    };

    function NavCollapseComponent_ng_container_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavCollapseComponent_ng_container_0_li_1_Template_li_mouseenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r102.navCollapse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_li_1_ng_container_3_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r98);
      }
    }

    function NavCollapseComponent_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavCollapseComponent_ng_container_0_li_2_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavCollapseComponent_ng_container_0_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavCollapseComponent_ng_container_0_li_2_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r106.navCollapse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_li_2_ng_container_3_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r98);
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r108.item.icon);
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r109.item.badge.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r109.item.badge.title, " ");
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_3_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r110.item.badge.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r110.item.badge.title, " ");
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavCollapseComponent_ng_container_0_ng_template_3_span_0_Template, 2, 3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_3_span_3_Template, 2, 2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavCollapseComponent_ng_container_0_ng_template_3_span_4_Template, 2, 2, "span", 13);
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.item.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r97.item.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.item.badge && ctx_r97.themeLayout === "horizontal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.item.badge && ctx_r97.themeLayout === "vertical");
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_group_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 20);
      }

      if (rf & 2) {
        var item_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r112);
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_collapse_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 20);
      }

      if (rf & 2) {
        var item_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r112);
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 20);
      }

      if (rf & 2) {
        var item_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r112);
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_group_1_Template, 1, 1, "app-nav-group", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_app_nav_item_3_Template, 1, 1, "app-nav-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r112 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r112.type == "group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r112.type == "collapse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r112.type == "item");
      }
    }

    function NavCollapseComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_ng_template_5_ng_container_1_Template, 4, 3, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r99.item.children);
      }
    }

    function NavCollapseComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavCollapseComponent_ng_container_0_li_1_Template, 4, 6, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavCollapseComponent_ng_container_0_li_2_Template, 4, 6, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavCollapseComponent_ng_container_0_ng_template_3_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavCollapseComponent_ng_container_0_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.themeLayout === "horizontal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.themeLayout === "vertical");
      }
    }

    var NavCollapseComponent = /*#__PURE__*/function () {
      function NavCollapseComponent() {
        _classCallCheck(this, NavCollapseComponent);

        this.visible = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.themeLayout = this.nextConfig.layout;
      }

      _createClass(NavCollapseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navCollapse",
        value: function navCollapse(e) {
          this.visible = !this.visible;
          var parent = e.target;

          if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
          }

          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
              sections[i].classList.remove('pcoded-trigger');
            }
          }

          var firstParent = parent.parentElement;
          var preParent = parent.parentElement.parentElement;

          if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
              firstParent.classList.add('pcoded-trigger'); // firstParent.parentElement.classList.toggle('pcoded-trigger');

              firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
          } else if (preParent.classList.contains('pcoded-submenu')) {
            do {
              preParent.parentElement.classList.add('pcoded-trigger');
              preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
          }

          parent.classList.toggle('pcoded-trigger');
        }
      }]);

      return NavCollapseComponent;
    }();

    NavCollapseComponent.ɵfac = function NavCollapseComponent_Factory(t) {
      return new (t || NavCollapseComponent)();
    };

    NavCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavCollapseComponent,
      selectors: [["app-nav-collapse"]],
      inputs: {
        item: "item"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", "mouseenter", 4, "ngIf"], ["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", 4, "ngIf"], ["itemContent", ""], ["subMenuContent", ""], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive", "mouseenter"], ["href", "javascript:", 1, "nav-link", 3, "routerLinkActive"], [4, "ngTemplateOutlet"], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:", 1, "nav-link", 3, "routerLinkActive", "click"], ["class", "pcoded-micon", 4, "ngIf"], [1, "pcoded-mtext"], ["class", "badge label", 3, "ngClass", 4, "ngIf"], ["class", "pcoded-badge badge", 3, "ngClass", 4, "ngIf"], [1, "pcoded-micon"], [1, "badge", "label", 3, "ngClass"], [1, "pcoded-badge", "badge", 3, "ngClass"], [1, "pcoded-submenu", 3, "routerLinkActive"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
      template: function NavCollapseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavCollapseComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-100%)',
          display: 'block'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-100%)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavCollapseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-collapse',
          templateUrl: './nav-collapse.component.html',
          styleUrls: ['./nav-collapse.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)',
            display: 'block'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0%)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)'
          }))])])]
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NavContentComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
      return NavContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav-group/nav-group.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
    /* harmony import */


    var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-collapse/nav-collapse.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */


    var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./nav-item/nav-item.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");

    var _c0 = ["navbarContent"];
    var _c1 = ["navbarWrapper"];

    function NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_group_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 7);
      }

      if (rf & 2) {
        var item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r59);
      }
    }

    function NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_collapse_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 7);
      }

      if (rf & 2) {
        var item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r59);
      }
    }

    function NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 7);
      }

      if (rf & 2) {
        var item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r59);
      }
    }

    function NavContentComponent_perfect_scrollbar_0_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_group_1_Template, 1, 1, "app-nav-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_perfect_scrollbar_0_ng_container_3_app_nav_item_3_Template, 1, 1, "app-nav-item", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.type == "group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.type == "collapse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.type == "item");
      }
    }

    function NavContentComponent_perfect_scrollbar_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_perfect_scrollbar_0_Template_perfect_scrollbar_clickOutside_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.navMob();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_perfect_scrollbar_0_Template_ul_clickOutside_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.fireOutClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_perfect_scrollbar_0_ng_container_3_Template, 4, 3, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "300px")("max-height", "calc(100vh - 56px)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("excludeBeforeClick", true)("exclude", "#mobile-collapse")("usePSClass", "pangong")("disabled", null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.navigation);
      }
    }

    function NavContentComponent_div_1_ng_container_6_app_nav_group_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 7);
      }

      if (rf & 2) {
        var item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r72);
      }
    }

    function NavContentComponent_div_1_ng_container_6_app_nav_collapse_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 7);
      }

      if (rf & 2) {
        var item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r72);
      }
    }

    function NavContentComponent_div_1_ng_container_6_app_nav_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 7);
      }

      if (rf & 2) {
        var item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r72);
      }
    }

    function NavContentComponent_div_1_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_div_1_ng_container_6_app_nav_group_1_Template, 1, 1, "app-nav-group", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavContentComponent_div_1_ng_container_6_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavContentComponent_div_1_ng_container_6_app_nav_item_3_Template, 1, 1, "app-nav-item", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r72.type == "group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r72.type == "collapse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r72.type == "item");
      }
    }

    function NavContentComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContentComponent_div_1_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.scrollMinus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavContentComponent_div_1_Template_ul_clickOutside_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.fireLeave();
        })("mouseleave", function NavContentComponent_div_1_Template_ul_mouseleave_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.fireLeave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavContentComponent_div_1_ng_container_6_Template, 4, 3, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContentComponent_div_1_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.scrollPlus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r57.prevDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r57.navigation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r57.nextDisabled);
      }
    }

    var NavContentComponent = /*#__PURE__*/function () {
      function NavContentComponent(nav, zone, location) {
        _classCallCheck(this, NavContentComponent);

        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
        this.isNavProfile = false;
      }

      _createClass(NavContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.windowWidth < 992) {
            this.nextConfig['layout'] = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-pangong').style.maxHeight = '100%';
            }, 500);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.nextConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
          }
        }
      }, {
        key: "scrollPlus",
        value: function scrollPlus() {
          this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

          if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
          }

          this.prevDisabled = '';

          if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "scrollMinus",
        value: function scrollMinus() {
          this.scrollWidth = this.scrollWidth - this.wrapperWidth;

          if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
          }

          this.nextDisabled = '';

          if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "fireLeave",
        value: function fireLeave() {
          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
          }

          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              last_parent.classList.add('active');
            }
          }
        }
      }, {
        key: "navMob",
        value: function navMob() {
          if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
          }
        }
      }, {
        key: "fireOutClick",
        value: function fireOutClick() {
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavContentComponent;
    }();

    NavContentComponent.ɵfac = function NavContentComponent_Factory(t) {
      return new (t || NavContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    NavContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavContentComponent,
      selectors: [["app-nav-content"]],
      viewQuery: function NavContentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarWrapper = _t.first);
        }
      },
      outputs: {
        onNavMobCollapse: "onNavMobCollapse"
      },
      decls: 2,
      vars: 2,
      consts: [["id", "nav-ps-pangong", "ngClass", "pangong-scroll", 3, "excludeBeforeClick", "exclude", "max-width", "max-height", "usePSClass", "disabled", "clickOutside", 4, "ngIf"], ["class", "navbar-content sidenav-horizontal", "id", "layout-sidenav", 4, "ngIf"], ["id", "nav-ps-pangong", "ngClass", "pangong-scroll", 3, "excludeBeforeClick", "exclude", "usePSClass", "disabled", "clickOutside"], [1, "navbar-content"], [1, "nav", "pcoded-inner-navbar", 3, "clickOutside"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"], ["id", "layout-sidenav", 1, "navbar-content", "sidenav-horizontal"], ["navbarWrapper", ""], ["href", "javascript:", 1, "sidenav-horizontal-prev", 3, "ngClass", "click"], [1, "sidenav-horizontal-wrapper"], ["id", "side-nav-horizontal", 1, "nav", "pcoded-inner-navbar", "sidenav-inner", 3, "clickOutside", "mouseleave"], ["navbarContent", ""], ["href", "javascript:", 1, "sidenav-horizontal-next", 3, "ngClass", "click"]],
      template: function NavContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavContentComponent_perfect_scrollbar_0_Template, 4, 9, "perfect-scrollbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavContentComponent_div_1_Template, 8, 3, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextConfig["layout"] === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextConfig["layout"] === "horizontal");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__["NavGroupComponent"], _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__["NavItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-content',
          templateUrl: './nav-content.component.html',
          styleUrls: ['./nav-content.component.scss']
        }]
      }], function () {
        return [{
          type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        onNavMobCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        navbarContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navbarContent']
        }],
        navbarWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navbarWrapper']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: NavGroupComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavGroupNavGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
      return NavGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-collapse/nav-collapse.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */


    var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-item/nav-item.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");

    function NavGroupComponent_ng_container_0_ng_container_4_app_nav_group_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-group", 4);
      }

      if (rf & 2) {
        var item_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r86);
      }
    }

    function NavGroupComponent_ng_container_0_ng_container_4_app_nav_collapse_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-collapse", 4);
      }

      if (rf & 2) {
        var item_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r86);
      }
    }

    function NavGroupComponent_ng_container_0_ng_container_4_app_nav_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-item", 4);
      }

      if (rf & 2) {
        var item_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r86);
      }
    }

    function NavGroupComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavGroupComponent_ng_container_0_ng_container_4_app_nav_group_1_Template, 1, 1, "app-nav-group", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavGroupComponent_ng_container_0_ng_container_4_app_nav_collapse_2_Template, 1, 1, "app-nav-collapse", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavGroupComponent_ng_container_0_ng_container_4_app_nav_item_3_Template, 1, 1, "app-nav-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r86 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r86.type == "group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r86.type == "collapse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r86.type == "item");
      }
    }

    function NavGroupComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavGroupComponent_ng_container_0_ng_container_4_Template, 4, 3, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r84.item.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r84.item.children);
      }
    }

    var NavGroupComponent = /*#__PURE__*/function () {
      function NavGroupComponent(zone, location) {
        _classCallCheck(this, NavGroupComponent);

        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
      }

      _createClass(NavGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // at reload time active and trigger link
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.nextConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavGroupComponent;
    }();

    NavGroupComponent.ɵfac = function NavGroupComponent_Factory(t) {
      return new (t || NavGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    NavGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavGroupComponent,
      selectors: [["app-nav-group"]],
      inputs: {
        item: "item",
        layout1: "layout1",
        activeId: "activeId"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "nav-item", "pcoded-menu-caption"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
      template: function NavGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavGroupComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NavGroupComponent, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_4__["NavItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-group',
          templateUrl: './nav-group.component.html',
          styleUrls: ['./nav-group.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        layout1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: NavItemComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavContentNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
      return NavItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavItemComponent_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavItemComponent_ng_container_0_li_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r127.item.title);
      }
    }

    function NavItemComponent_ng_container_0_li_1_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r129.item.title, " ");
      }
    }

    function NavItemComponent_ng_container_0_li_1_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0() {
      return ["active"];
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function NavItemComponent_ng_container_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavItemComponent_ng_container_0_li_1_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r131.closeOtherMenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_li_1_span_3_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavItemComponent_ng_container_0_li_1_ng_template_4_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavItemComponent_ng_container_0_li_1_ng_container_6_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r120.item.classes)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r120.item.target ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r120.item.url));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r120.item.icon)("ngIfElse", _r128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r124);
      }
    }

    function NavItemComponent_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavItemComponent_ng_container_0_li_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r134.item.title);
      }
    }

    function NavItemComponent_ng_container_0_li_2_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r136.item.title, " ");
      }
    }

    function NavItemComponent_ng_container_0_li_2_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavItemComponent_ng_container_0_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_li_2_span_3_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavItemComponent_ng_container_0_li_2_ng_template_4_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavItemComponent_ng_container_0_li_2_ng_container_6_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r121.item.classes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r121.item.target ? "_blank" : "_self")("href", ctx_r121.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r121.item.icon)("ngIfElse", _r135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r124);
      }
    }

    function NavItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r138.item.icon);
      }
    }

    function NavItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_ng_template_3_span_0_Template, 2, 1, "span", 13);
      }

      if (rf & 2) {
        var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.item.icon);
      }
    }

    function NavItemComponent_ng_container_0_ng_template_5_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r139.item.badge.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r139.item.badge.title, " ");
      }
    }

    function NavItemComponent_ng_container_0_ng_template_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r140.item.badge.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r140.item.badge.title, " ");
      }
    }

    function NavItemComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_ng_template_5_span_0_Template, 2, 2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavItemComponent_ng_container_0_ng_template_5_span_1_Template, 2, 2, "span", 17);
      }

      if (rf & 2) {
        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.item.badge && ctx_r125.themeLayout === "vertical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.item.badge && ctx_r125.themeLayout === "horizontal");
      }
    }

    function NavItemComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavItemComponent_ng_container_0_li_1_Template, 7, 11, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavItemComponent_ng_container_0_li_2_Template, 7, 7, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavItemComponent_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavItemComponent_ng_container_0_ng_template_5_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.item.url && !ctx_r119.item.external);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.item.url && ctx_r119.item.external);
      }
    }

    var NavItemComponent = /*#__PURE__*/function () {
      function NavItemComponent(location) {
        _classCallCheck(this, NavItemComponent);

        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        this.themeLayout = this.nextConfig['layout'];
      }

      _createClass(NavItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeOtherMenu",
        value: function closeOtherMenu(event) {
          var _this4 = this;

          if (this.nextConfig['layout'] === 'vertical') {
            var ele = event.target;

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
                sections[i].classList.remove('pcoded-trigger');
              }

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('pcoded-trigger');
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('pcoded-trigger');
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('pcoded-trigger');
                last_parent.classList.add('active');
              }
            }

            if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
          } else {
            setTimeout(function () {
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var _i = 0; _i < sections.length; _i++) {
                sections[_i].classList.remove('active');

                sections[_i].classList.remove('pcoded-trigger');
              }

              var current_url = _this4.location.path();

              if (_this4.location['_baseHref']) {
                current_url = _this4.location['_baseHref'] + _this4.location.path();
              }

              var link = "a.nav-link[ href='" + current_url + "' ]";
              var ele = document.querySelector(link);

              if (ele !== null && ele !== undefined) {
                var _parent = ele.parentElement;
                var _up_parent = _parent.parentElement.parentElement;
                var _last_parent = _up_parent.parentElement;

                if (_parent.classList.contains('pcoded-hasmenu')) {
                  _parent.classList.add('active');
                } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                  _up_parent.classList.add('active');
                } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                  _last_parent.classList.add('active');
                }
              }
            }, 500);
          }
        }
      }]);

      return NavItemComponent;
    }();

    NavItemComponent.ɵfac = function NavItemComponent_Factory(t) {
      return new (t || NavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    NavItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavItemComponent,
      selectors: [["app-nav-item"]],
      inputs: {
        item: "item"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "ngClass", "routerLinkActive", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["itemIcon", ""], ["itemBadge", ""], [3, "ngClass", "routerLinkActive"], [1, "nav-link", 3, "target", "routerLink", "click"], [4, "ngTemplateOutlet"], ["class", "pcoded-mtext", 4, "ngIf", "ngIfElse"], ["directTitle", ""], [1, "pcoded-mtext"], [3, "ngClass"], [3, "target", "href"], ["class", "pcoded-micon", 4, "ngIf"], [1, "pcoded-micon"], [1, "feather", 3, "ngClass"], ["class", "pcoded-badge badge", 3, "ngClass", 4, "ngIf"], ["class", "badge label", 3, "ngClass", 4, "ngIf"], [1, "pcoded-badge", "badge", 3, "ngClass"], [1, "badge", "label", 3, "ngClass"]],
      template: function NavItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavItemComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-item',
          templateUrl: './nav-item.component.html',
          styleUrls: ['./nav-item.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nav-content/nav-content.component */
    "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "container": a0
      };
    };

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_1__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navMobCollapse",
        value: function navMobCollapse() {
          if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
          }
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      outputs: {
        onNavMobCollapse: "onNavMobCollapse"
      },
      decls: 2,
      vars: 3,
      consts: [[1, "navbar-wrapper", 3, "ngClass"], [3, "onNavMobCollapse"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNavMobCollapse", function NavigationComponent_Template_app_nav_content_onNavMobCollapse_1_listener() {
            return ctx.navMobCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.nextConfig.layout === "horizontal" && ctx.nextConfig.subLayout === "horizontal-2"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_3__["NavContentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onNavMobCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/admin/navigation/navigation.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
    \*************************************************************/

  /*! exports provided: NavigationItem */

  /***/
  function srcAppThemeLayoutAdminNavigationNavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
      return NavigationItem;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationItems = [{
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'feather icon-align-left',
      children: [{
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }, {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [{
          id: 'menu-level-2.1',
          title: 'Menu Level 2.1',
          type: 'item',
          url: 'javascript:',
          external: true
        }, {
          id: 'menu-level-2.2',
          title: 'Menu Level 2.2',
          type: 'collapse',
          children: [{
            id: 'menu-level-2.2.1',
            title: 'Menu Level 2.2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          }, {
            id: 'menu-level-2.2.2',
            title: 'Menu Level 2.2.2',
            type: 'item',
            url: 'javascript:',
            external: true
          }]
        }]
      }, {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        type: 'item',
        url: 'javascript:',
        classes: 'nav-item disabled',
        icon: 'feather icon-power',
        external: true
      }]
    }];

    var NavigationItem = /*#__PURE__*/function () {
      function NavigationItem() {
        _classCallCheck(this, NavigationItem);
      }

      _createClass(NavigationItem, [{
        key: "get",
        value: function get() {
          return NavigationItems;
        }
      }]);

      return NavigationItem;
    }();

    NavigationItem.ɵfac = function NavigationItem_Factory(t) {
      return new (t || NavigationItem)();
    };

    NavigationItem.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationItem,
      factory: NavigationItem.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/layout/auth/auth.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/layout/auth/auth.component.ts ***!
    \*****************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppThemeLayoutAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)();
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 1,
      vars: 0,
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth',
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/alert/alert.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
    \******************************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppThemeSharedComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlertComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return ctx_r5.dismissAlert(_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "alert-dismissible": a0
      };
    };

    var _c1 = ["*"];

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent() {
        _classCallCheck(this, AlertComponent);
      }

      _createClass(AlertComponent, [{
        key: "dismissAlert",
        value: function dismissAlert(element) {
          element.parentElement.removeChild(element);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)();
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      inputs: {
        type: "type",
        dismiss: "dismiss"
      },
      ngContentSelectors: _c1,
      decls: 4,
      vars: 7,
      consts: [["role", "alert", 3, "ngClass"], ["alert", ""], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlertComponent_button_3_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", ctx.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.dismiss));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismiss);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.scss']
        }]
      }], function () {
        return [];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dismiss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/alert/alert.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
    \***************************************************************/

  /*! exports provided: AlertModule */

  /***/
  function srcAppThemeSharedComponentsAlertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alert.component */
    "./src/app/theme/shared/components/alert/alert.component.ts");

    var AlertModule = function AlertModule() {
      _classCallCheck(this, AlertModule);
    };

    AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AlertModule
    });
    AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AlertModule_Factory(t) {
        return new (t || AlertModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, {
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
          exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../layout/admin/navigation/navigation */
    "./src/app/theme/layout/admin/navigation/navigation.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_5_h5_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var breadcrumb_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r33.title);
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_5_h5_1_Template, 2, 1, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var last_r34 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r34);
      }
    }

    var _c0 = function _c0() {
      return ["/dashboard/analytics/"];
    };

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_10_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var breadcrumb_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r37.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r37.title);
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_10_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var breadcrumb_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r37.title);
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_10_li_1_Template, 3, 2, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_10_li_2_Template, 3, 1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var breadcrumb_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r37.url !== false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r37.url === false);
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_5_Template, 2, 1, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_8_Template, 2, 2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_a_9_Template, 2, 2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_ng_container_10_Template, 3, 2, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.navigationList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.type === "theme2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.type === "theme1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.navigationList);
      }
    }

    function BreadcrumbComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_div_1_Template, 11, 4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var breadcrumb_r26 = ctx.$implicit;
        var last_r27 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r27 && breadcrumb_r26.breadcrumbs !== false);
      }
    }

    function BreadcrumbComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.navigationList);
      }
    }

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(route, nav, titleService) {
        _classCallCheck(this, BreadcrumbComponent);

        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routerUrl;
          routerUrl = this.route.url;

          if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
          }
        }
      }, {
        key: "setBreadcrumb",
        value: function setBreadcrumb() {
          var _this5 = this;

          var routerUrl;
          this.route.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;

            if (routerUrl && typeof routerUrl === 'string') {
              _this5.breadcrumbList.length = 0;
              var activeLink = router.url;

              _this5.filterNavigation(activeLink);
            }
          });
        }
      }, {
        key: "filterNavigation",
        value: function filterNavigation(activeLink) {
          var result = [];
          var title = 'Welcome';
          this.navigation.forEach(function (a) {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
              result = [{
                url: 'url' in a ? a.url : false,
                title: a.title,
                breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                type: a.type
              }];
              title = a.title;
            } else {
              if (a.type === 'group' && 'children' in a) {
                a.children.forEach(function (b) {
                  if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                    result = [{
                      url: 'url' in b ? b.url : false,
                      title: b.title,
                      breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                      type: b.type
                    }];
                    title = b.title;
                  } else {
                    if (b.type === 'collapse' && 'children' in b) {
                      b.children.forEach(function (c) {
                        if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                          result = [{
                            url: 'url' in b ? b.url : false,
                            title: b.title,
                            breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                            type: b.type
                          }, {
                            url: 'url' in c ? c.url : false,
                            title: c.title,
                            breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                            type: c.type
                          }];
                          title = c.title;
                        } else {
                          if (c.type === 'collapse' && 'children' in c) {
                            c.children.forEach(function (d) {
                              if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                result = [{
                                  url: 'url' in b ? b.url : false,
                                  title: b.title,
                                  breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                  type: b.type
                                }, {
                                  url: 'url' in c ? c.url : false,
                                  title: c.title,
                                  breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                  type: c.type
                                }, {
                                  url: 'url' in d ? d.url : false,
                                  title: d.title,
                                  breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                  type: d.type
                                }];
                                title = d.title;
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
          this.navigationList = result;
          this.titleService.setTitle(title + ' | Pangong Angular 9+ Admin Template');
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
    };

    BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      inputs: {
        type: "type"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "page-header", 4, "ngIf"], [1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "page-header-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], ["class", "m-b-10", 4, "ngIf"], [1, "m-b-10"], [3, "routerLink"], [1, "feather", "icon-home"], ["class", "breadcrumb-item", 4, "ngIf"], ["href", "javascript:"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navigationList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html',
          styleUrls: ['./breadcrumb.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
    \*************************************************************************/

  /*! exports provided: BreadcrumbModule */

  /***/
  function srcAppThemeSharedComponentsBreadcrumbBreadcrumbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return BreadcrumbModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb.component */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BreadcrumbModule = function BreadcrumbModule() {
      _classCallCheck(this, BreadcrumbModule);
    };

    BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BreadcrumbModule
    });
    BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BreadcrumbModule_Factory(t) {
        return new (t || BreadcrumbModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
        declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
          exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/card/card.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.component.ts ***!
    \****************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppThemeSharedComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /*import { AnimationBuilder, AnimationService } from 'css-animator';*/


    function CardComponent_div_2_h5_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.cardTitle);
      }
    }

    function CardComponent_div_2_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r15.captionClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.cardCaption);
      }
    }

    function CardComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return ctx_r18.fullCardToggle(_r7, "", true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.collapsedCardToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.cardRefresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_div_3_Template_li_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.cardRemoveAction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.fullIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.cardClass === "full-card" ? "Restore" : "Maximize", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.collapsedIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.collapsedCard === "collapsed" ? "Expand" : "Collapse", " ");
      }
    }

    function CardComponent_div_2_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "customHeader"]);
      }
    }

    function CardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_2_h5_1_Template, 2, 1, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_p_2_Template, 2, 2, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_2_div_3_Template, 25, 4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_2_4_Template, 1, 0, undefined, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.headerClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.customHeader);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.customHeader && ctx_r8.cardCaption);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.options && !ctx_r8.customHeader);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.customHeader);
      }
    }

    function CardComponent_div_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function CardComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapsedCard", ctx_r9.collapsedCard);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);
      }
    }

    function CardComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r11.blockClass);
      }
    }

    function CardComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r12.footerClass);
      }
    }

    function CardComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = [[["", 8, "app-card-header"]], "*", [["", 8, "app-card-footer"]]];
    var _c1 = [".app-card-header", "*", ".app-card-footer"];

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(
      /*animationService: AnimationService,*/
      config) {
        _classCallCheck(this, CardComponent);

        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        /*this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;*/

        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.hidHeader) {
            this.options = false;
          }

          if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
          }
        }
      }, {
        key: "fullCardToggle",
        value: function fullCardToggle(element, animation, status) {
          var _this6 = this;

          animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
          this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize'; // const duration = this.cardClass === 'full-card' ? 300 : 600;

          this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';

          if (status) {
            this.animation = animation;
          }

          this.isAnimating = true;
          /*this.animators
            .setType(this.animation)
            .setDuration(500)
            .setDirection('alternate')
            .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
            .animate(element)
            .then(() => {
              this.isAnimating = false;
            })
            .catch(() => {
              this.isAnimating = false;
            });*/

          setTimeout(function () {
            _this6.cardClass = animation === 'zoomOut' ? '' : _this6.cardClass;

            if (_this6.cardClass === 'full-card') {
              document.querySelector('body').style.overflow = 'hidden';
            } else {
              document.querySelector('body').removeAttribute('style');
            }
          }, 500);
        }
      }, {
        key: "collapsedCardToggle",
        value: function collapsedCardToggle() {
          this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
          this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
        }
      }, {
        key: "cardRefresh",
        value: function cardRefresh() {
          var _this7 = this;

          this.loadCard = true;
          this.cardClass = 'card-load';
          setTimeout(function () {
            _this7.loadCard = false;
            _this7.cardClass = 'expanded';
          }, 3000);
        }
      }, {
        key: "cardRemoveAction",
        value: function cardRemoveAction() {
          this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        cardTitle: "cardTitle",
        cardClass: "cardClass",
        blockClass: "blockClass",
        headerClass: "headerClass",
        options: "options",
        hidHeader: "hidHeader",
        customHeader: "customHeader",
        cardCaption: "cardCaption",
        captionClass: "captionClass",
        isCardFooter: "isCardFooter",
        footerClass: "footerClass"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 7,
      consts: [[1, "card", 3, "ngClass"], ["toAnimate", ""], ["class", "card-header", 3, "ngClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["subMenuContent", ""], ["class", "card-footer", 3, "ngClass", 4, "ngIf"], ["class", "card-loader", 4, "ngIf"], [1, "card-header", 3, "ngClass"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "card-header-right", 4, "ngIf"], [3, "ngClass"], [1, "card-header-right"], ["ngbDropdown", "", "placement", "auto", 1, "btn-group", "card-option", "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle", "btn-icon"], [1, "feather", "icon-more-horizontal"], ["ngbDropdownMenu", "", 1, "list-unstyled", "card-option", "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", "full-card", 3, "click"], ["href", "javascript:"], [1, "feather", 3, "ngClass"], [1, "dropdown-item", "minimize-card", 3, "click"], [2, "display", "none"], [1, "feather", "icon-plus"], [1, "dropdown-item", "reload-card", 3, "click"], [1, "feather", "icon-refresh-cw"], [1, "dropdown-item", "close-card", 3, "click"], [1, "feather", "icon-trash"], [4, "ngTemplateOutlet"], [1, "card-body", 3, "ngClass"], [1, "card-footer", 3, "ngClass"], [1, "card-loader"], [1, "pct-loader1", "anim-rotate"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 5, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_div_6_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_div_7_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardClass)("@cardRemove", ctx.cardRemove);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options)("ngIfElse", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCard);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
      styles: [".card.full-card[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNhcmQuZnVsbC1jYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          overflow: 'hidden',
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          overflow: 'hidden',
          height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 0,
          display: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            overflow: 'hidden',
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            overflow: 'hidden',
            height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))])]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]
        }];
      }, {
        cardTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        blockClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hidHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardCaption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        captionClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isCardFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        footerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/card/card.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/shared/components/card/card.module.ts ***!
    \*************************************************************/

  /*! exports provided: CardModule */

  /***/
  function srcAppThemeSharedComponentsCardCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /*import { AnimationService, AnimatorModule } from 'css-animator';*/


    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CardModule
    });
    CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CardModule_Factory(t) {
        return new (t || CardModule)();
      },
      providers: [
        /*AnimationService*/
      ],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, {
        declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]],
        exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]],
          declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
          exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
          providers: [
            /*AnimationService*/
          ]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ApexChartComponent */

  /***/
  function srcAppThemeSharedComponentsChartApexChartApexChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
      return ApexChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apexcharts/dist/apexcharts.common.js */
    "./node_modules/apexcharts/dist/apexcharts.common.js");
    /* harmony import */


    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _apex_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./apex-chart.service */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");

    var ApexChartComponent = /*#__PURE__*/function () {
      function ApexChartComponent(apexEvent) {
        _classCallCheck(this, ApexChartComponent);

        this.apexEvent = apexEvent;
      }

      _createClass(ApexChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          setTimeout(function () {
            _this8.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_1___default.a(document.querySelector('#' + _this8.chartID), _this8.chartConfig);

            _this8.chart.render();
          });
          this.apexEvent.changeTimeRange.subscribe(function () {
            if (_this8.xAxis) {
              _this8.chart.updateOptions({
                xaxis: _this8.xAxis
              });
            }
          });
          this.apexEvent.changeSeriesData.subscribe(function () {
            if (_this8.newData) {
              _this8.chart.updateSeries([{
                data: _this8.newData
              }]);
            }
          });
        }
      }]);

      return ApexChartComponent;
    }();

    ApexChartComponent.ɵfac = function ApexChartComponent_Factory(t) {
      return new (t || ApexChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]));
    };

    ApexChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApexChartComponent,
      selectors: [["app-apex-chart"]],
      inputs: {
        chartID: "chartID",
        chartConfig: "chartConfig",
        xAxis: "xAxis",
        newData: "newData"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "id"]],
      template: function ApexChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.chartID);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-apex-chart',
          templateUrl: './apex-chart.component.html',
          styleUrls: ['./apex-chart.component.scss']
        }]
      }], function () {
        return [{
          type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]
        }];
      }, {
        chartID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        xAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        newData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
    \********************************************************************************/

  /*! exports provided: ApexChartService */

  /***/
  function srcAppThemeSharedComponentsChartApexChartApexChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartService", function () {
      return ApexChartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApexChartService = /*#__PURE__*/function () {
      function ApexChartService() {
        _classCallCheck(this, ApexChartService);

        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ApexChartService, [{
        key: "eventChangeTimeRange",
        value: function eventChangeTimeRange() {
          this.changeTimeRange.emit();
        }
      }, {
        key: "eventChangeSeriesData",
        value: function eventChangeSeriesData() {
          this.changeSeriesData.emit();
        }
      }]);

      return ApexChartService;
    }();

    ApexChartService.ɵfac = function ApexChartService_Factory(t) {
      return new (t || ApexChartService)();
    };

    ApexChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApexChartService,
      factory: ApexChartService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, {
        changeTimeRange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changeSeriesData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/data-table/data-filter.pipe.ts":
  /*!************************************************************************!*\
    !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
    \************************************************************************/

  /*! exports provided: DataFilterPipe */

  /***/
  function srcAppThemeSharedComponentsDataTableDataFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function () {
      return DataFilterPipe;
    });
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DataFilterPipe = /*#__PURE__*/function () {
      function DataFilterPipe() {
        _classCallCheck(this, DataFilterPipe);
      }

      _createClass(DataFilterPipe, [{
        key: "transform",
        value: function transform(array, query) {
          if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (row) {
              return row.name.indexOf(query) > -1;
            });
          }

          return array;
        }
      }]);

      return DataFilterPipe;
    }();

    DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) {
      return new (t || DataFilterPipe)();
    };

    DataFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dataFilter",
      type: DataFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'dataFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/gallery/gallery.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/theme/shared/components/gallery/gallery.component.ts ***!
    \**********************************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppThemeSharedComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-lightbox */
    "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalleryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var i_r53 = ctx.index;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.open(i_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r52.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent(lightbox, lightboxEvent, lighboxConfig) {
        _classCallCheck(this, GalleryComponent);

        this.lightbox = lightbox;
        this.lightboxEvent = lightboxEvent;
        this.lighboxConfig = lighboxConfig;
        this.albums = this.albums ? this.albums : [];
        lighboxConfig.fadeDuration = 1;
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(index) {
          var _this9 = this;

          this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(function (event) {
            return _this9._onReceivedEvent(event);
          });
          this.lightbox.open(this.albums, index, {
            wrapAround: true,
            showImageNumberLabel: true
          });
        }
      }, {
        key: "_onReceivedEvent",
        value: function _onReceivedEvent(event) {
          if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LIGHTBOX_EVENT"].CLOSE) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]));
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      inputs: {
        albums: "albums"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "column", "has-text-centered"], ["class", "img-row", 4, "ngFor", "ngForOf"], [1, "img-row"], [1, "img-frame", 3, "src", "click"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albums);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]
        }, {
          type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"]
        }, {
          type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]
        }];
      }, {
        albums: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/theme/shared/components/index.ts ***!
    \**************************************************/

  /*! exports provided: AlertModule, CardModule, BreadcrumbModule, ModalModule */

  /***/
  function srcAppThemeSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./alert/alert.module */
    "./src/app/theme/shared/components/alert/alert.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"];
    });
    /* harmony import */


    var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card/card.module */
    "./src/app/theme/shared/components/card/card.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"];
    });
    /* harmony import */


    var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.module */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"];
    });
    /* harmony import */


    var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal/modal.module */
    "./src/app/theme/shared/components/modal/modal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"];
    });
    /***/

  },

  /***/
  "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AnimationModalComponent */

  /***/
  function srcAppThemeSharedComponentsModalAnimationModalAnimationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function () {
      return AnimationModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AnimationModalComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }
    }

    function AnimationModalComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimationModalComponent_ng_template_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.close(ctx_r47.modalID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"];

    var AnimationModalComponent = /*#__PURE__*/function () {
      function AnimationModalComponent() {
        _classCallCheck(this, AnimationModalComponent);

        this.backDrop = false;
      }

      _createClass(AnimationModalComponent, [{
        key: "close",
        value: function close(event) {
          document.querySelector('#' + event).classList.remove('md-show');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationModalComponent;
    }();

    AnimationModalComponent.ɵfac = function AnimationModalComponent_Factory(t) {
      return new (t || AnimationModalComponent)();
    };

    AnimationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimationModalComponent,
      selectors: [["app-animation-modal"]],
      inputs: {
        modalClass: "modalClass",
        contentClass: "contentClass",
        modalID: "modalID",
        backDrop: "backDrop"
      },
      ngContentSelectors: _c0,
      decls: 6,
      vars: 5,
      consts: [[1, "md-modal", 3, "ngClass", "id"], [1, "md-content", 3, "ngClass"], ["class", "md-overlay", 4, "ngIf", "ngIfElse"], ["backDropOver", ""], [1, "md-overlay"], [1, "md-overlay", 3, "click"]],
      template: function AnimationModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnimationModalComponent_div_3_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimationModalComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.modalID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.modalClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backDrop)("ngIfElse", _r45);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  perspective: 600px;\n}\n.container {\n  min-height: 100%;\n}\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n.md-show {\n  visibility: visible;\n}\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  transition: all 0.3s;\n}\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n/* Content styles */\n.md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n.md-content h3 {\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  opacity: 0.8;\n  color: #fff;\n  border-radius: 3px 3px 0 0;\n}\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n}\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n  line-height: 1.5;\n}\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n.md-content > div ul li {\n  padding: 5px 0;\n}\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n/* Individual modal styles with animations/transitions */\n/* Effect 1: Fade in and scale up */\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 2: Slide from the right */\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n/* Effect 3: Slide from the bottom */\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 4: Newspaper */\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 5: fall */\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 6: side fall */\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 7:  slide and stick to top */\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n/* Effect 8: 3D flip horizontal */\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 9: 3D flip vertical */\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 10: 3D sign */\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 11: Super scaled */\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 12:  Just me */\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent;\n}\n.md-effect-12 .md-content h3 {\n  background: transparent;\n}\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 13: 3D slit */\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit 0.7s forwards ease-out;\n  animation: slit 0.7s forwards ease-out;\n}\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: 0.5;\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n/* Effect 14:  3D Rotate from bottom */\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 15:  3D Rotate in from left */\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 16:  Blur */\nbody.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 17:  Slide in from bottom with perspective on container */\nbody.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\nbody.modal-17 > header {\n  height: 70px;\n}\nbody.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n}\nbody.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\nbody.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none;\n}\nbody.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n/* Effect 18:  Slide from right with perspective on container */\nbody.modal-18 {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-18 ~ .md-overlay {\n  transition: all 0.5s;\n}\nbody.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none;\n}\nbody.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\nbody.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n  }\n}\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n/* Effect 19:  Slip in from the top with perspective on container */\nbody.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none;\n}\nbody.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\nbody.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n}\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUVBLDRDQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBRUEsb0JBQUE7QUNDRjtBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQSxtQkFBQTtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FEQ0U7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VOO0FEQUk7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUNFTjtBRERNO0VBQ0UsY0FBQTtBQ0dSO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURHQSx3REFBQTtBQUVBLG1DQUFBO0FBRUE7RUFFRSxxQkFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQ0ZGO0FES0E7RUFFRSxtQkFBQTtFQUNBLFVBQUE7QUNGRjtBREtBLG1DQUFBO0FBRUE7RUFFRSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxzREFBQTtBQ0hGO0FETUE7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUNIRjtBRE1BLG9DQUFBO0FBRUE7RUFFRSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQ0pGO0FET0E7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUNKRjtBRE9BLHdCQUFBO0FBRUE7RUFJRSxrQ0FBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBR0Usb0JBQUE7QUNMRjtBRFFBO0VBSUUsZ0NBQUE7RUFDQSxVQUFBO0FDTEY7QURRQSxtQkFBQTtBQUdFO0VBR0UsbUJBQUE7QUNQSjtBRFNFO0VBR0UsNEJBQUE7RUFJQSwyQ0FBQTtFQUNBLFVBQUE7QUNQSjtBRFdBO0VBR0UsNEJBQUE7RUFJQSx3Q0FBQTtFQUNBLFVBQUE7QUNSRjtBRFdBLHdCQUFBO0FBR0U7RUFHRSxtQkFBQTtBQ1ZKO0FEWUU7RUFHRSw0QkFBQTtFQUlBLHlEQUFBO0VBQ0EsVUFBQTtBQ1ZKO0FEY0E7RUFHRSw0QkFBQTtFQUlBLG1EQUFBO0VBQ0EsVUFBQTtBQ1hGO0FEY0Esc0NBQUE7QUFFQTtFQUNFLE1BQUE7RUFJQSwyQkFBQTtBQ1pGO0FEYUU7RUFJRSw0QkFBQTtFQUdBLG9CQUFBO0VBQ0EsVUFBQTtBQ1hKO0FEZUE7RUFJRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ1pGO0FEZUEsaUNBQUE7QUFHRTtFQUdFLG1CQUFBO0FDZEo7QURnQkU7RUFHRSw0QkFBQTtFQUlBLDBCQUFBO0VBR0Esb0JBQUE7RUFDQSxVQUFBO0FDZEo7QURrQkE7RUFJRSx3QkFBQTtFQUNBLFVBQUE7QUNmRjtBRGtCQSwrQkFBQTtBQUdFO0VBR0UsbUJBQUE7QUNqQko7QURtQkU7RUFHRSw0QkFBQTtFQUlBLDBCQUFBO0VBR0Esb0JBQUE7RUFDQSxVQUFBO0FDakJKO0FEcUJBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FDbEJGO0FEcUJBLHVCQUFBO0FBR0U7RUFHRSxtQkFBQTtBQ3BCSjtBRHNCRTtFQUdFLDRCQUFBO0VBSUEsMEJBQUE7RUFHQSx1QkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQ3BCSjtBRHdCQTtFQUlFLHdCQUFBO0VBQ0EsVUFBQTtBQ3JCRjtBRHdCQSw0QkFBQTtBQUVBO0VBSUUsbUJBQUE7RUFDQSxVQUFBO0VBR0Esb0JBQUE7QUN0QkY7QUR5QkE7RUFJRSxtQkFBQTtFQUNBLFVBQUE7QUN0QkY7QUR5QkEsd0JBQUE7QUFFQTtFQUlFLHFCQUFBO0VBQ0EsVUFBQTtFQUdBLG9CQUFBO0VBQ0EsV0FBQTtFQUlBLHVCQUFBO0FDMUJGO0FEdUJFO0VBQ0UsdUJBQUE7QUNyQko7QUQwQkE7RUFJRSxtQkFBQTtFQUNBLFVBQUE7QUN2QkY7QUQwQkEsdUJBQUE7QUFHRTtFQUdFLG1CQUFBO0FDekJKO0FEMkJFO0VBR0UsNEJBQUE7RUFJQSw2Q0FBQTtFQUNBLFVBQUE7QUN6Qko7QUQ2QkE7RUFDRSw4Q0FBQTtFQUVBLHNDQUFBO0FDMUJGO0FENkJBO0VBQ0U7SUFDRSxvREFBQTtJQUNBLFlBQUE7SUFDQSwyQ0FBQTtFQzFCRjtFRDZCQTtJQUNFLDhDQUFBO0lBQ0EsVUFBQTtFQzNCRjtBQUNGO0FENkNBO0VBQ0U7SUFDRSw0Q0FBQTtJQUNBLFVBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0VDaENGO0VEbUNBO0lBQ0Usc0NBQUE7SUFDQSxVQUFBO0VDakNGO0FBQ0Y7QURxQ0Esc0NBQUE7QUFHRTtFQUdFLG1CQUFBO0FDckNKO0FEdUNFO0VBR0UsNEJBQUE7RUFJQSwwQ0FBQTtFQUdBLHdCQUFBO0VBQ0EsVUFBQTtFQUdBLDZCQUFBO0FDckNKO0FEeUNBO0VBSUUsdUNBQUE7RUFDQSxVQUFBO0FDdENGO0FEeUNBLHVDQUFBO0FBR0U7RUFHRSxtQkFBQTtBQ3hDSjtBRDBDRTtFQUdFLDRCQUFBO0VBSUEsNERBQUE7RUFHQSx3QkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQ3hDSjtBRDRDQTtFQUlFLHVEQUFBO0VBQ0EsVUFBQTtBQ3pDRjtBRDRDQSxxQkFBQTtBQUdFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQzNDSjtBRCtDQTtFQUVFLDBCQUFBO0VBQ0EsVUFBQTtBQzVDRjtBRCtDQTtFQUVFLG9CQUFBO0FDNUNGO0FEK0NBO0VBRUUsd0JBQUE7RUFDQSxVQUFBO0FDNUNGO0FEK0NBLG1FQUFBO0FBR0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSwwQkFBQTtBQzlDSjtBRGtEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUdBLDBCQUFBO0FDL0NGO0FEb0RJO0VBQ0UsWUFBQTtBQ2pETjtBRG1ESTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNqRE47QURvREU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBRUEseUJBQUE7RUFFQSx3QkFBQTtFQUVBLDRCQUFBO0FDbERKO0FEcURJO0VBQ0UsYUFBQTtBQ25ETjtBRHVESTtFQUVFLHlCQUFBO0VBRUEsd0JBQUE7RUFFQSw0QkFBQTtBQ3JETjtBRDBEQTtFQUNFLFVBQUE7RUFFQSwyQkFBQTtBQ3ZERjtBRDBEQTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtFQUdBLHlCQUFBO0FDdkRGO0FEMERBLCtEQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUN4REY7QUQyREE7RUFFRSxvQkFBQTtBQ3hERjtBRDZESTtFQUNFLGFBQUE7QUMxRE47QUQ2REU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FDM0RKO0FEOERJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FDNUROO0FEaUVBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLDJDQUFBO0VDOURGO0VEaUVBO0lBQ0UscUNBQUE7RUMvREY7QUFDRjtBRG1FQTtFQUNFO0lBQ0UsMENBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VDakVGO0VEb0VBO0lBQ0UsNkJBQUE7RUNsRUY7QUFDRjtBRHNFQTtFQUVFLDJCQUFBO0VBQ0EsVUFBQTtBQ3BFRjtBRHdFRTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtFQUVBLHlCQUFBO0FDckVKO0FEd0VJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDdEVOO0FEd0VJO0VBR0Usb0JBQUE7QUN0RU47QUQyRUEsbUVBQUE7QUFJSTtFQUNFLGFBQUE7QUMzRU47QUQ4RUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FDNUVKO0FEK0VJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FDN0VOO0FEa0ZBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLDJDQUFBO0VDL0VGO0FBQ0Y7QUQyRkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtFQ25GRjtBQUNGO0FEdUZBO0VBSUUsNEJBQUE7RUFDQSxVQUFBO0FDckZGO0FEd0ZBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0VBR0EseUJBQUE7QUNyRkY7QUR3RkE7RUFDRTtJQUNFLGNBQUE7RUNyRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcGVyc3BlY3RpdmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1kLW1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgc3R5bGVzICovXHJcblxyXG4ubWQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICB9XHJcbiAgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEluZGl2aWR1YWwgbW9kYWwgc3R5bGVzIHdpdGggYW5pbWF0aW9ucy90cmFuc2l0aW9ucyAqL1xyXG5cclxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXHJcblxyXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cclxuXHJcbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cclxuXHJcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC01IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC02IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xyXG5cclxuLm1kLWVmZmVjdC03IHtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cclxuXHJcbi5tZC1lZmZlY3QtOCB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXHJcblxyXG4ubWQtZWZmZWN0LTkge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTAge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMTogU3VwZXIgc2NhbGVkICovXHJcblxyXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGgzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXHJcblxyXG4ubWQtZWZmZWN0LTEzIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxuICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTQge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXHJcblxyXG4ubWQtZWZmZWN0LTE1IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNjogIEJsdXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTYgPiB7XHJcbiAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLCAubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG5cclxuYm9keS5tb2RhbC0xNyA+IHtcclxuICBuYXYsIHNlY3Rpb24sIC5tZC1vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtMTcge1xyXG4gID4ge1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiB7XHJcbiAgICBuYXYsIC5tZC1vdmVybGF5LCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTgge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuYm9keS5tb2RhbC0xOCB7XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIH1cclxuICAmLm1kLWVmZmVjdC0xOSB+IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubWQtb3ZlcmxheSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTkge1xyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuICA+IHtcclxuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9XHJcbn1cclxuIiwiLm1kLXBlcnNwZWN0aXZlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1kLXBlcnNwZWN0aXZlIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xuICBwZXJzcGVjdGl2ZTogNjAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWQtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNjMwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMjAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm1kLXNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubWQtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogQ29udGVudCBzdHlsZXMgKi9cbi5tZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1kLWNvbnRlbnQgaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xufVxuLm1kLWNvbnRlbnQgPiBkaXYge1xuICBwYWRkaW5nOiAxNXB4IDQwcHggMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuLm1kLWNvbnRlbnQgPiBkaXYgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLm1kLWNvbnRlbnQgPiBkaXYgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XG59XG4ubWQtY29udGVudCA+IGRpdiB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLm1kLWNvbnRlbnQgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4vKiBJbmRpdmlkdWFsIG1vZGFsIHN0eWxlcyB3aXRoIGFuaW1hdGlvbnMvdHJhbnNpdGlvbnMgKi9cbi8qIEVmZmVjdCAxOiBGYWRlIGluIGFuZCBzY2FsZSB1cCAqL1xuLm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAzOiBTbGlkZSBmcm9tIHRoZSBib3R0b20gKi9cbi5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNDogTmV3c3BhcGVyICovXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA1OiBmYWxsICovXG4ubWQtZWZmZWN0LTUubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC01IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xuLm1kLWVmZmVjdC02Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNzogIHNsaWRlIGFuZCBzdGljayB0byB0b3AgKi9cbi5tZC1lZmZlY3QtNyB7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cbi5tZC1lZmZlY3QtOC5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC04IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtOCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xuLm1kLWVmZmVjdC05Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMDogM0Qgc2lnbiAqL1xuLm1kLWVmZmVjdC0xMC5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC0xMCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTE6IFN1cGVyIHNjYWxlZCAqL1xuLm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDEyOiAgSnVzdCBtZSAqL1xuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCBoMyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMzogM0Qgc2xpdCAqL1xuLm1kLWVmZmVjdC0xMy5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEzIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaXQgMC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgLW1vei1hbmltYXRpb246IHNsaXQgMC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBzbGl0IDAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cbi5tZC1lZmZlY3QtMTQubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtMTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxNTogIDNEIFJvdGF0ZSBpbiBmcm9tIGxlZnQgKi9cbi5tZC1lZmZlY3QtMTUubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE1IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTY6ICBCbHVyICovXG5ib2R5Lm1vZGFsLTE2ID4gbmF2LCBib2R5Lm1vZGFsLTE2ID4gaGVhZGVyLCBib2R5Lm1vZGFsLTE2ID4gc2VjdGlvbiB7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4ubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIsIC5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE3OiAgU2xpZGUgaW4gZnJvbSBib3R0b20gd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cbmJvZHkubW9kYWwtMTcgPiBuYXYsIGJvZHkubW9kYWwtMTcgPiBzZWN0aW9uLCBib2R5Lm1vZGFsLTE3ID4gLm1kLW92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE3IH4gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG5ib2R5Lm1vZGFsLTE3ID4gaGVhZGVyIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuYm9keS5tb2RhbC0xNyA+IG5hdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xufVxuYm9keS5tb2RhbC0xNyAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuYm9keS5tb2RhbC0xNyA+IC5oZWFkZXItY2hhdCwgYm9keS5tb2RhbC0xNyA+IC5oZWFkZXItdXNlci1saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkubW9kYWwtMTcgPiBuYXYsIGJvZHkubW9kYWwtMTcgPiAubWQtb3ZlcmxheSwgYm9keS5tb2RhbC0xNyA+IHNlY3Rpb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xufVxuXG4vKiBFZmZlY3QgMTg6ICBTbGlkZSBmcm9tIHJpZ2h0IHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5ib2R5Lm1vZGFsLTE4IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG5ib2R5Lm1vZGFsLTE4ID4gLmhlYWRlci1jaGF0LCBib2R5Lm1vZGFsLTE4ID4gLmhlYWRlci11c2VyLWxpc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keS5tb2RhbC0xOCAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG59XG5ib2R5Lm1vZGFsLTE4ID4gbmF2LCBib2R5Lm1vZGFsLTE4ID4gaGVhZGVyLCBib2R5Lm1vZGFsLTE4ID4gc2VjdGlvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XG4gIH1cbn1cbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG59XG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1kLXNob3cubWQtZWZmZWN0LTE5IH4gLm1kLW92ZXJsYXkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cbmJvZHkubW9kYWwtMTkgPiAuaGVhZGVyLWNoYXQsIGJvZHkubW9kYWwtMTkgPiAuaGVhZGVyLXVzZXItbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5Lm1vZGFsLTE5IC5wY29kZWQtbWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbn1cbmJvZHkubW9kYWwtMTkgPiBuYXYsIGJvZHkubW9kYWwtMTkgPiBoZWFkZXIsIGJvZHkubW9kYWwtMTkgPiBzZWN0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuLm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICB9XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-animation-modal',
          templateUrl: './animation-modal.component.html',
          styleUrls: ['./animation-modal.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        modalClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modalID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/modal/modal.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
    \***************************************************************/

  /*! exports provided: ModalModule */

  /***/
  function srcAppThemeSharedComponentsModalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ui-modal/ui-modal.component */
    "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
    /* harmony import */


    var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation-modal/animation-modal.component */
    "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts");

    var ModalModule = function ModalModule() {
      _classCallCheck(this, ModalModule);
    };

    ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
    ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
        declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]],
          exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_3__["AnimationModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UiModalComponent */

  /***/
  function srcAppThemeSharedComponentsModalUiModalUiModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiModalComponent", function () {
      return UiModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UiModalComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UiModalComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];

    var _c1 = function _c1(a0) {
      return {
        "in": a0
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        "display": a0,
        "opacity": a1
      };
    };

    var _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];

    var UiModalComponent = /*#__PURE__*/function () {
      function UiModalComponent() {
        _classCallCheck(this, UiModalComponent);

        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = true;
        this.visible = false;
        this.visibleAnimate = false;
      }

      _createClass(UiModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show() {
          var _this10 = this;

          this.visible = true;
          setTimeout(function () {
            return _this10.visibleAnimate = true;
          }, 100);
          document.querySelector('body').classList.add('modal-open');
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this11 = this;

          this.visibleAnimate = false;
          setTimeout(function () {
            return _this11.visible = false;
          }, 300);
          document.querySelector('body').classList.remove('modal-open');
        }
      }, {
        key: "onContainerClicked",
        value: function onContainerClicked(event) {
          if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
          }
        }
      }]);

      return UiModalComponent;
    }();

    UiModalComponent.ɵfac = function UiModalComponent_Factory(t) {
      return new (t || UiModalComponent)();
    };

    UiModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UiModalComponent,
      selectors: [["app-ui-modal"]],
      inputs: {
        dialogClass: "dialogClass",
        hideHeader: "hideHeader",
        hideFooter: "hideFooter",
        containerClick: "containerClick"
      },
      ngContentSelectors: _c3,
      decls: 7,
      vars: 10,
      consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]],
      template: function UiModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiModalComponent_Template_div_click_0_listener($event) {
            return ctx.onContainerClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dialogClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL3VpLW1vZGFsL3VpLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC91aS1tb2RhbC91aS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0FDQUo7QURFRTtFQUNFLFVBQUE7RUFHQSxnQ0FBQTtBQ0FKO0FEQ0k7RUFDRSxVQUFBO0FDQ047QURHSTtFQUlFLDBCQUFBO0FDRE47QURHSTtFQUdFLDZCQUFBO0VBSUEsNkJBQUE7QUNETjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvdWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xyXG4gICYubW9kYWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA1MDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gICYuZmFkZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAmLmluIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5tb2RhbC5mYWRlIHtcclxuICAgICYuaW4gLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iYXNpYy1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMXB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIuYmFzaWMubW9kYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBub25lO1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xufVxuLmJhc2ljLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG59XG4uYmFzaWMuZmFkZS5pbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYmFzaWMubW9kYWwuZmFkZS5pbiAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG59XG4uYmFzaWMubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbn1cbi5iYXNpYyAuYmFzaWMtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG59XG4uYmFzaWMgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzFweDtcbiAgcmlnaHQ6IC0yMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ui-modal',
          templateUrl: './ui-modal.component.html',
          styleUrls: ['./ui-modal.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        dialogClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/spinner/spinkits.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
    \*************************************************************/

  /*! exports provided: Spinkit */

  /***/
  function srcAppThemeSharedComponentsSpinnerSpinkitsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
      return Spinkit;
    });

    var Spinkit = {
      skChasingDots: 'sk-chasing-dots',
      skCubeGrid: 'sk-cube-grid',
      skDoubleBounce: 'sk-double-bounce',
      skRotatingPlane: 'sk-rotationg-plane',
      skSpinnerPulse: 'sk-spinner-pulse',
      skThreeBounce: 'sk-three-bounce',
      skWanderingCubes: 'sk-wandering-cubes',
      skWave: 'sk-wave',
      skLine: 'sk-line-material'
    };
    /***/
  },

  /***/
  "./src/app/theme/shared/components/spinner/spinner.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppThemeSharedComponentsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./spinkits */
    "./src/app/theme/shared/components/spinner/spinkits.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SpinnerComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r50.backgroundColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r50.backgroundColor);
      }
    }

    function SpinnerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_0_div_2_Template, 2, 4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.spinner === ctx_r49.Spinkit.skLine);
      }
    }

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(router, document) {
        var _this12 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        this.backgroundColor = '#ccc';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this12.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            _this12.isSpinnerVisible = false;
          }
        }, function () {
          _this12.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      inputs: {
        backgroundColor: "backgroundColor",
        spinner: "spinner"
      },
      decls: 1,
      vars: 1,
      consts: [["id", "http-loader", 4, "ngIf"], ["id", "http-loader"], [1, "loader-bg"], ["class", "sk-line-material", 3, "colored", 4, "ngIf"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iLCIjaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn0iXX0= */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0);\n  }\n  40% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuaWtldC9icnVjZS93ZWJzaXRlcy9zbS9za2VsZXRvbi9zcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5zY3NzIiwic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtRUFBQTtFQUNBLDJEQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUVJLG9CQUFBO0VDQ047RURDRTtJQUVJLG9CQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBRUksb0JBQUE7RUNBTjtFREVFO0lBRUksb0JBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUNESjs7QURJQTtFQUNJLHlDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiIsIi5zay1saW5lLW1hdGVyaWFsIHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gIGFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG4jaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgpO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          templateUrl: './spinner.component.html',
          styleUrls: ['./spinner.component.scss', './spinkit-css/sk-line-material.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        spinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/toast/toast.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/theme/shared/components/toast/toast.component.ts ***!
    \******************************************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcAppThemeSharedComponentsToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast.service */
    "./src/app/theme/shared/components/toast/toast.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var ToastComponent = /*#__PURE__*/function () {
      function ToastComponent(toastEvent) {
        _classCallCheck(this, ToastComponent);

        this.toastEvent = toastEvent;
        this.isShow = false;
      }

      _createClass(ToastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toastEvent.toggleToast.subscribe(function (toast) {
            document.querySelector('#' + toast.uid).classList.add('show');
            setTimeout(function () {
              document.querySelector('#' + toast.uid).classList.remove('show');
            }, toast.delay ? toast.delay : 500);
          });
        }
      }, {
        key: "closeToast",
        value: function closeToast(uid) {
          document.querySelector('#' + uid).classList.remove('show');
        }
      }]);

      return ToastComponent;
    }();

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toast"]],
      inputs: {
        uID: "uID",
        toastTitle: "toastTitle",
        toastCaption: "toastCaption",
        toastClass: "toastClass"
      },
      ngContentSelectors: _c0,
      decls: 12,
      vars: 4,
      consts: [["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", 3, "id", "ngClass"], [1, "toast-header"], ["src", "./favicon.ico", "alt", "", 1, "img-fluid", "m-r-5", 2, "width", "20px"], [1, "mr-auto"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "m-l-5", "mb-1", "mt-1", "close", 3, "click"], [1, "toast-body"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_Template_button_click_7_listener() {
            return ctx.closeToast(ctx.uID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.uID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toastClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toastTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toastCaption);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toast',
          templateUrl: './toast.component.html',
          styleUrls: ['./toast.component.scss']
        }]
      }], function () {
        return [{
          type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      }, {
        uID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toastTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toastCaption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toastClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/toast/toast.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/components/toast/toast.service.ts ***!
    \****************************************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppThemeSharedComponentsToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService() {
        _classCallCheck(this, ToastService);

        this.toggleToast = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ToastService, [{
        key: "toast",
        value: function toast(event) {
          this.toggleToast.emit(event);
        }
      }]);

      return ToastService;
    }();

    ToastService.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };

    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, {
        toggleToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/todo/todo-card-complete.directive.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/theme/shared/components/todo/todo-card-complete.directive.ts ***!
    \******************************************************************************/

  /*! exports provided: TodoCardCompleteDirective */

  /***/
  function srcAppThemeSharedComponentsTodoTodoCardCompleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoCardCompleteDirective", function () {
      return TodoCardCompleteDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoCardCompleteDirective = /*#__PURE__*/function () {
      function TodoCardCompleteDirective(elements) {
        _classCallCheck(this, TodoCardCompleteDirective);

        this.elements = elements;
      }

      _createClass(TodoCardCompleteDirective, [{
        key: "onToggle",
        value: function onToggle($event) {
          $event.preventDefault();
          this.elements.nativeElement.classList.toggle('complete');
        }
      }]);

      return TodoCardCompleteDirective;
    }();

    TodoCardCompleteDirective.ɵfac = function TodoCardCompleteDirective_Factory(t) {
      return new (t || TodoCardCompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    TodoCardCompleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TodoCardCompleteDirective,
      selectors: [["", "appTodoCardComplete", ""]],
      hostBindings: function TodoCardCompleteDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoCardCompleteDirective_click_HostBindingHandler($event) {
            return ctx.onToggle($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoCardCompleteDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appTodoCardComplete]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/components/todo/todo-list-remove.directive.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/theme/shared/components/todo/todo-list-remove.directive.ts ***!
    \****************************************************************************/

  /*! exports provided: TodoListRemoveDirective */

  /***/
  function srcAppThemeSharedComponentsTodoTodoListRemoveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListRemoveDirective", function () {
      return TodoListRemoveDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoListRemoveDirective = /*#__PURE__*/function () {
      function TodoListRemoveDirective(elements) {
        _classCallCheck(this, TodoListRemoveDirective);

        this.elements = elements;
      }

      _createClass(TodoListRemoveDirective, [{
        key: "onToggle",
        value: function onToggle($event) {
          $event.preventDefault();
          var parent = this.elements.nativeElement.parentElement.parentElement;
          parent.remove();
        }
      }]);

      return TodoListRemoveDirective;
    }();

    TodoListRemoveDirective.ɵfac = function TodoListRemoveDirective_Factory(t) {
      return new (t || TodoListRemoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    TodoListRemoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TodoListRemoveDirective,
      selectors: [["", "appTodoListRemove", ""]],
      hostBindings: function TodoListRemoveDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListRemoveDirective_click_HostBindingHandler($event) {
            return ctx.onToggle($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListRemoveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appTodoListRemove]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
    \****************************************************************/

  /*! exports provided: ToggleFullScreenDirective */

  /***/
  function srcAppThemeSharedFullScreenToggleFullScreenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function () {
      return ToggleFullScreenDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! screenfull */
    "./node_modules/screenfull/dist/screenfull.js");
    /* harmony import */


    var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);

    var ToggleFullScreenDirective = /*#__PURE__*/function () {
      function ToggleFullScreenDirective(elements) {
        _classCallCheck(this, ToggleFullScreenDirective);

        this.elements = elements;
      }

      _createClass(ToggleFullScreenDirective, [{
        key: "onClick",
        value: function onClick() {
          /*if (screenfull.enabled) {
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
            screenfull.toggle();
          }*/
          if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_1__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1__["isFullscreen"]) {
              screenfull__WEBPACK_IMPORTED_MODULE_1__["exit"]();
            } else {
              screenfull__WEBPACK_IMPORTED_MODULE_1__["request"]();
            }
          }
        }
      }]);

      return ToggleFullScreenDirective;
    }();

    ToggleFullScreenDirective.ɵfac = function ToggleFullScreenDirective_Factory(t) {
      return new (t || ToggleFullScreenDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ToggleFullScreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ToggleFullScreenDirective,
      selectors: [["", "appToggleFullScreen", ""]],
      hostBindings: function ToggleFullScreenDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullScreenDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullScreenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appToggleFullScreen]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();

    function isScreenFull(sf) {
      return sf.isFullscreen;
    }
    /***/

  },

  /***/
  "./src/app/theme/shared/shared.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/shared/shared.module.ts ***!
    \***********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppThemeSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/theme/shared/components/index.ts");
    /* harmony import */


    var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/data-table/data-filter.pipe */
    "./src/app/theme/shared/components/data-table/data-filter.pipe.ts");
    /* harmony import */


    var _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/todo/todo-list-remove.directive */
    "./src/app/theme/shared/components/todo/todo-list-remove.directive.ts");
    /* harmony import */


    var _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/todo/todo-card-complete.directive */
    "./src/app/theme/shared/components/todo/todo-card-complete.directive.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/spinner/spinner.component */
    "./src/app/theme/shared/components/spinner/spinner.component.ts");
    /* harmony import */


    var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/chart/apex-chart/apex-chart.component */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
    /* harmony import */


    var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/chart/apex-chart/apex-chart.service */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");
    /* harmony import */


    var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/toast/toast.component */
    "./src/app/theme/shared/components/toast/toast.component.ts");
    /* harmony import */


    var _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/toast/toast.service */
    "./src/app/theme/shared/components/toast/toast.service.ts");
    /* harmony import */


    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/gallery/gallery.component */
    "./src/app/theme/shared/components/gallery/gallery.component.ts");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-lightbox */
    "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__);
    /*import 'hammerjs';
    import 'mousetrap';
    import { GalleryModule } from '@ks89/angular-modal-gallery';*/


    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_15__["LightboxModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_3__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"], _components__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]],
          declarations: [_components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["DataFilterPipe"], _components_todo_todo_list_remove_directive__WEBPACK_IMPORTED_MODULE_5__["TodoListRemoveDirective"], _components_todo_todo_card_complete_directive__WEBPACK_IMPORTED_MODULE_6__["TodoCardCompleteDirective"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"]],
          providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"], _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/aniket/bruce/websites/sm/skeleton/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map