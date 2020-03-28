require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_orders_vue__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_206eabec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_orders_vue__ = __webpack_require__(329);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(324)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_orders_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_206eabec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_orders_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\orders.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] orders.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-206eabec", Component.options)
  } else {
    hotAPI.reload("data-v-206eabec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 324:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_dist_toast_toast__ = __webpack_require__(7);

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





/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad(options) {
    console.log(options);
    if (!options.shopId) wx.navigateBack();
    wx.setNavigationBarTitle({ title: options.shopName + " 订单列表" });
  },
  onReady: function onReady() {},

  components: {
    order: __WEBPACK_IMPORTED_MODULE_2__components_order__["a" /* default */]
  },
  mounted: function mounted() {
    this.getorder();
  },

  data: {
    selectIndex: 0
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["e" /* mapState */])(["orders", "openid"])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(["SET_ORDERS"]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(["getOrders"]), {
    getorder: function getorder() {
      var that = this;

      that.getOrders({ shopId: this.$root.$mp.query.shopId });
    }
  }),

  //下拉
  onPullDownRefresh: function onPullDownRefresh() {
    this.getorder();
    wx.stopPullDownRefresh();
  }
});

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "background": "#fff"
    }
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.selectIndex,
      "mpcomid": '6'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "已付款",
      "mpcomid": '1'
    }
  }, _vm._l((_vm.orders), function(x, index) {
    return (x.IsSuccessPay && !x.IsCheckOut && x.ProductState === 'Default') ? _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "shop",
        "mpcomid": '0_' + index
      }
    }) : _vm._e()
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "待取货",
      "mpcomid": '3'
    }
  }, _vm._l((_vm.orders), function(x, index) {
    return (x.IsSuccessPay && !x.IsCheckOut && x.ProductState === '可取货') ? _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "shop",
        "mpcomid": '2_' + index
      }
    }) : _vm._e()
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "已完成",
      "mpcomid": '5'
    }
  }, _vm._l((_vm.orders), function(x, index) {
    return (x.IsSuccessPay && x.IsCheckOut) ? _c('order', {
      key: x,
      attrs: {
        "data": x,
        "type": "shop",
        "mpcomid": '4_' + index
      }
    }) : _vm._e()
  }))], 1)], 1), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '7'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-206eabec", esExports)
  }
}

/***/ })

},[376]);