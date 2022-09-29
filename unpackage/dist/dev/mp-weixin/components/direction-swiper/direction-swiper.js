(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/direction-swiper/direction-swiper"],{

/***/ 841:
/*!***************************************************************************************!*\
  !*** E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction-swiper.vue?vue&type=template&id=8c636478&scoped=true& */ 842);
/* harmony import */ var _direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direction-swiper.vue?vue&type=script&lang=js& */ 844);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./direction-swiper.vue?vue&type=style&index=0&id=8c636478&lang=scss&scoped=true& */ 846);
/* harmony import */ var _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8c636478",
  null,
  false,
  _direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/direction-swiper/direction-swiper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 842:
/*!**********************************************************************************************************************************!*\
  !*** E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue?vue&type=template&id=8c636478&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./direction-swiper.vue?vue&type=template&id=8c636478&scoped=true& */ 843);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_template_id_8c636478_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 843:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue?vue&type=template&id=8c636478&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.tabData, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var l0 =
      item.list && item.list.length > 0
        ? _vm.__map(item.list, function(childItem, childIndex) {
            var $orig = _vm.__get_orig(childItem)

            var g0 = Math.abs(
              _vm.swiperData[_vm.swiperIndex].swiperItemIndex - childIndex
            )
            return {
              $orig: $orig,
              g0: g0
            }
          })
        : null

    if (_vm.$scope.data.scopedSlotsCompiler === "augmented") {
      _vm.$setScopedSlotsParams("default", {
        item: $orig,
        childItem: _vm.childItem.$orig,
        index: index,
        childIndex: _vm.childIndex
      })
    }

    return {
      $orig: $orig,
      l0: l0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 844:
/*!****************************************************************************************************************!*\
  !*** E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./direction-swiper.vue?vue&type=script&lang=js& */ 845);
/* harmony import */ var _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 845:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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

var clearTime = null;
var lastTime = 0;var _default2 =




{
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      } },

    current: {
      type: Number,
      default: function _default() {
        return 0;
      } } },


  data: function data() {
    return {
      //开始触摸时间
      startTime: 0,
      //开始触摸距离
      touchStartY: 0,
      touchStartX: 0,
      //上次的位置
      currentY: 0,
      currentX: 0,
      contentTranslateX: 0,
      tabData: [],
      swiperData: [],
      animationTime: 0,
      animationDirection: "Y",
      screenHeight: 0,
      screenWidth: 0,
      // 是否允许滑动
      canSlide: true,
      // 手指数量
      fingersNumber: 0,
      swiperIndex: 0,
      translateX: 0 };

  },
  //第一次加载
  created: function created() {var _this = this;
    var systemInfo = uni.getSystemInfoSync();
    this.screenWidth = systemInfo.screenWidth;
    this.screenHeight = systemInfo.screenHeight;
    this.$nextTick(function () {
      _this.getContainerWidthHeight();
    });
    var swiperData = [];
    if (this.list && this.list.length > 0) {
      this.list.forEach(function (item) {
        if (item.key && item.list) {
          var objectData = Object.assign({
            list: [] },
          item);
          _this.tabData.push(objectData);
          swiperData.push({
            //滑动距离
            translateY: 0,
            swiperItemIndex: 0,
            length: item.list.length || 0,
            key: item.key });

        } else {
          uni.showToast({
            title: "参数没有key或list",
            icon: "none" });

        }
      });
    }
    this.swiperData = swiperData;
  },
  watch: {
    list: function list(val) {var _this2 = this;
      var tabData = [];
      if (val && val.length > 0) {
        val.forEach(function (item, index) {
          if (item.key) {
            tabData.push(item);
            _this2.swiperData[index].length = item.list.length || 0;
          } else {
            uni.showToast({
              title: "【list】参数没有key",
              icon: "none" });

          }
        });
      }
      this.tabData = tabData;
      this.$forceUpdate();
    },
    current: function current(val) {
      this.onType(val);
    } },

  //方法
  methods: {
    // 获取内容的高度
    getContainerWidthHeight: function getContainerWidthHeight() {var _this3 = this;







      uni.createSelectorQuery().in(this).selectAll('.direction_swiper').
      boundingClientRect(function (data) {
        _this3.screenWidth = data[0].width;
        _this3.screenHeight = data[0].height;
      }).exec();

    },
    onType: function onType(index) {
      this.swiperIndex = index;
      this.onChangeY();
      this.contentTranslateX = -(index * this.screenWidth);



















      this.translateX = this.contentTranslateX;
      this.animationTime = 360;

    },
    onChangeY: function onChangeY() {
      this.$emit("changeY", _objectSpread(_objectSpread({},
      this.tabData[this.swiperIndex]),
      this.swiperData[this.swiperIndex]));

    },
    setAnimationY: function setAnimationY(translateY, animationTime, indexChange) {var _this4 = this;
      this.animationTime = animationTime;
      var swiperItem = this.swiperData[this.swiperIndex];
      swiperItem.translateY = translateY;
      if (indexChange) {
        if (indexChange == "less" && swiperItem.swiperItemIndex > 0) {
          swiperItem.swiperItemIndex -= 1;
        } else if (indexChange == "plus" && swiperItem.swiperItemIndex < swiperItem.length - 1) {
          swiperItem.swiperItemIndex += 1;
        }
      }
      this.$set(this.swiperData, this.swiperIndex, swiperItem);

















      setTimeout(function () {
        _this4.canSlide = true;
      }, animationTime);
    },
    setAnimationX: function setAnimationX(translateX, animationTime, indexChange) {var _this5 = this;
      if (indexChange) {
        if (indexChange == "less" && this.swiperIndex > 0) {
          this.swiperIndex -= 1;
          this.contentTranslateX = translateX;
          this.$emit("changeX", _objectSpread({
            swiperIndex: this.swiperIndex },
          this.swiperData[this.swiperIndex]));

          this.onChangeY();
        } else if (indexChange == "plus" && this.swiperIndex < this.swiperData.length - 1) {
          this.swiperIndex += 1;
          this.contentTranslateX = translateX;
          this.$emit("changeX", _objectSpread({
            swiperIndex: this.swiperIndex },
          this.swiperData[this.swiperIndex]));

          this.onChangeY();
        }
      }



















      this.translateX = translateX;
      this.animationTime = animationTime;

      setTimeout(function () {
        _this5.canSlide = true;
      }, animationTime);
    },
    // 手指触摸动作开始
    onSwiperTouchstart: function onSwiperTouchstart(e) {
      this.fingersNumber += 1;
      if (this.canSlide && this.fingersNumber == 1) {
        //储存手指触摸坐标，当前时间戳，当前坐标





        this.touchStartY = e.changedTouches[0].clientY;
        this.touchStartX = e.changedTouches[0].clientX;

        var startTime = new Date().getTime();
        this.startTime = startTime;
        lastTime = startTime;
        if (this.swiperData[this.swiperIndex]) {
          this.currentY = this.swiperData[this.swiperIndex].translateY;
        } else {
          this.currentY = 0;
        }
        this.currentX = this.contentTranslateX;
        this.animationDirection = "";
      }
    },
    // 手指触摸后移动
    onSwiperTouchmove: function onSwiperTouchmove(e) {
      if (this.canSlide && this.fingersNumber == 1) {
        //手指当前坐标





        var clientY = e.changedTouches[0].clientY;
        var clientX = e.changedTouches[0].clientX;

        //计算滑动距离
        var differenceY = this.touchStartY - clientY;
        var differenceX = this.touchStartX - clientX;
        var currentTime = new Date().getTime();
        if (Math.abs(differenceY) > Math.abs(differenceX)) {
          var item = this.swiperData[this.swiperIndex];
          //判断最终滑动方向Y轴
          if (differenceY < 0) {
            if (item.swiperItemIndex > 0) {
              this.animationDirection = "Y";
              this.setAnimationY(this.currentY + Math.abs(differenceY), 0);
            }
          } else {
            if (item.swiperItemIndex < item.length - 1) {
              this.animationDirection = "Y";
              this.setAnimationY(this.currentY - differenceY, 0);
            }
          }
        } else {
          //判断最终滑动方向X轴
          if (differenceX < 0) {
            if (this.swiperIndex > 0) {
              this.animationDirection = "X";
              this.setAnimationX(this.currentX + Math.abs(differenceX), 0);
            }
          } else {
            if (this.swiperIndex < this.swiperData.length - 1) {
              this.animationDirection = "X";
              this.setAnimationX(this.currentX - Math.abs(differenceX), 0);
            }
          }
        }
        lastTime = currentTime;
      }
    },
    // 手指触摸动作被打断，如来电提醒，弹窗
    onSwiperTouchcancel: function onSwiperTouchcancel(e) {




      this.finallySlide(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

      this.fingersNumber = 0;
    },
    // 手指触摸动作结束
    onSwiperTouchend: function onSwiperTouchend(e) {




      this.finallySlide(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

      this.fingersNumber -= 1;
    },
    //最终判断滑动
    finallySlide: function finallySlide(finallyX, finallyY) {
      if (this.canSlide && this.fingersNumber == 1) {
        //手指离开的时间
        var endTime = new Date().getTime();
        //手机滑动屏幕的总花费时间
        var timeDifference = endTime - this.startTime;
        this.canSlide = false;
        //手指触摸总滑动距离
        var distanceDifferenceY = this.touchStartY - finallyY;
        if (this.animationDirection == "X") {
          var distanceDifferenceX = this.touchStartX - finallyX;
          //判断是否滑动到左边  滑动距离超过3分之一 或者 滑动时间在300毫秒并且距离在4分之一
          if (Math.abs(distanceDifferenceX) > this.screenWidth / 3 || timeDifference < 500 && Math.abs(distanceDifferenceX) > this.screenWidth / 5) {
            //判断最终滑动方向
            var animationTime = 360;
            if (timeDifference > 400 && timeDifference > 200) {
              animationTime = timeDifference;
            }
            if (distanceDifferenceX < 0) {
              this.setAnimationX(0, animationTime, "less");
            } else {
              this.setAnimationX(-this.screenWidth, animationTime, "plus");
            }
          } else {
            this.setAnimationX(this.currentX, 360);
          }
        } else if (this.animationDirection == "Y") {
          //判断是否滑动到左边  滑动距离超过3分之一 或者 滑动时间在300毫秒并且距离在4分之一
          if (Math.abs(distanceDifferenceY) > this.screenHeight / 5 || timeDifference < 500 && Math.abs(distanceDifferenceY) > this.screenHeight / 10) {
            //判断最终滑动方向
            var _animationTime = 360;
            if (timeDifference < 500 && timeDifference > 200) {
              _animationTime = timeDifference;
            }
            if (Math.abs(distanceDifferenceY) < this.screenHeight) {
              var remainingRatio = (this.screenHeight - Math.abs(distanceDifferenceY)) / this.screenHeight;
              _animationTime = _animationTime * remainingRatio;
              if (_animationTime < 150) {
                _animationTime = 150;
              }
            }
            if (distanceDifferenceY < 0) {
              this.setAnimationY(this.currentY + this.screenHeight, _animationTime, "less");
            } else {
              this.setAnimationY(this.currentY - this.screenHeight, _animationTime, "plus");
            }
            this.onChangeY();
          } else {
            var _animationTime2 = 360;
            var _remainingRatio = Math.abs(distanceDifferenceY) / this.screenHeight;
            _animationTime2 = _animationTime2 * _remainingRatio;
            if (_animationTime2 < 150) {
              _animationTime2 = 150;
            }
            this.setAnimationY(this.currentY, _animationTime2);
          }
        } else {
          this.canSlide = true;
        }
      }
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 846:
/*!*************************************************************************************************************************************************!*\
  !*** E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue?vue&type=style&index=0&id=8c636478&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./direction-swiper.vue?vue&type=style&index=0&id=8c636478&lang=scss&scoped=true& */ 847);
/* harmony import */ var _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_2_9_20210927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_direction_swiper_vue_vue_type_style_index_0_id_8c636478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 847:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniwords/memorizingwords_wx/components/direction-swiper/direction-swiper.vue?vue&type=style&index=0&id=8c636478&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/direction-swiper/direction-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/direction-swiper/direction-swiper-create-component',
    {
        'components/direction-swiper/direction-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(841))
        })
    },
    [['components/direction-swiper/direction-swiper-create-component']]
]);
