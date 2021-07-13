(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layouts_FrontendLayout_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'P:\\archive\\node_modules\\@babel\\runtime\\regenerator\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/FrontendLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/FrontendLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FrontendLayout",
  data: function data() {
    return {
      loading: true,
      drawer: null,
      menus: [],
      searchdata: null
    };
  },
  methods: {
    asyncData: function asyncData() {
      var _this = this;

      this.$event.$emit('loading', true);
      axios.get('/get-archive').then(function (res) {
        _this.menus = res.data;
        setTimeout(function () {
          _this.$event.$emit('loading', false);
        }, 1000);
      });
    },
    searchArchive: function searchArchive() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/search-menus', {
                  params: {
                    key: _this2.searchdata
                  }
                }).then(function (res) {
                  _this2.menus = res.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;

    this.$event.$on('loading', function (playload) {
      _this3.loading = playload;
    });
    this.asyncData();
  }
});

/***/ }),

/***/ "./resources/js/components/layouts/FrontendLayout.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/layouts/FrontendLayout.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FrontendLayout_vue_vue_type_template_id_259c1b4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true& */ "./resources/js/components/layouts/FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true&");
/* harmony import */ var _FrontendLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontendLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/FrontendLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FrontendLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FrontendLayout_vue_vue_type_template_id_259c1b4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FrontendLayout_vue_vue_type_template_id_259c1b4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "259c1b4d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/FrontendLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/FrontendLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/layouts/FrontendLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FrontendLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/FrontendLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layouts/FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/layouts/FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendLayout_vue_vue_type_template_id_259c1b4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendLayout_vue_vue_type_template_id_259c1b4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendLayout_vue_vue_type_template_id_259c1b4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/FrontendLayout.vue?vue&type=template&id=259c1b4d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    {
                      staticClass:
                        "d-flex flex-row justify-space-between align-center"
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "3em" },
                        attrs: {
                          src: _vm.$root.baseurl + "/images/logo1.png",
                          alt: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("Codecamp App")])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "12" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: "Search",
                  placeholder: "What are you like to see",
                  outlined: "",
                  dense: "",
                  "append-icon": "mdi-magnify"
                },
                on: { keyup: _vm.searchArchive },
                model: {
                  value: _vm.searchdata,
                  callback: function($$v) {
                    _vm.searchdata = $$v
                  },
                  expression: "searchdata"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { nav: "", dense: "" } },
            [
              _c(
                "v-list-item",
                { attrs: { link: "", to: "/" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-home-circle-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Home")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.menus, function(menu) {
                return _c(
                  "v-list-item",
                  {
                    key: menu.title,
                    attrs: {
                      link: "",
                      to: { name: "code", params: { slug: menu.slug } }
                    }
                  },
                  [
                    _c(
                      "v-list-item-icon",
                      [_c("v-icon", [_vm._v("mdi-xml")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [_c("v-list-item-title", [_vm._v(_vm._s(menu.title))])],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { app: "", color: "white", "elevate-on-scroll": "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                _vm.drawer = !_vm.drawer
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "v-overlay",
        { attrs: { value: _vm.loading } },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "64" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);