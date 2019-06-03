(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Charts/LineChart */ "./resources/js/dashboard/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Charts/BarChart */ "./resources/js/dashboard/components/Charts/BarChart.js");
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Charts/config */ "./resources/js/dashboard/components/Charts/config.js");
/* harmony import */ var _Dashboard_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/TaskList */ "./resources/js/dashboard/pages/Dashboard/TaskList.vue");
/* harmony import */ var _Dashboard_UserTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard/UserTable */ "./resources/js/dashboard/pages/Dashboard/UserTable.vue");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./resources/js/dashboard/config.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    TaskList: _Dashboard_TaskList__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserTable: _Dashboard_UserTable__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100], [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120], [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]],
        activeIndex: 0,
        chartData: null,
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["purpleChartOptions"],
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },
      purpleLineChart: {
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["purpleChartOptions"],
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            label: "Data",
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 100, 70, 80, 120, 80]
          }]
        },
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      },
      greenLineChart: {
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["greenChartOptions"],
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
          datasets: [{
            label: "My First dataset",
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [90, 27, 60, 12, 80]
          }]
        },
        gradientColors: ['rgba(66,134,121,0.15)', 'rgba(66,134,121,0.0)', 'rgba(66,134,121,0)'],
        gradientStops: [1, 0.4, 0]
      },
      blueBarChart: {
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartOptions"],
        chartData: {
          labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
          datasets: [{
            label: "Countries",
            fill: true,
            borderColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [53, 20, 10, 80, 100, 45]
          }]
        },
        gradientColors: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      }
    };
  },
  computed: {
    enableRTL: function enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL: function isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories: function bigLineChartCategories() {
      return this.$t('dashboard.chartCategories');
    }
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          fill: true,
          borderColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].colors.primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.bigLineChart.allData[index]
        }],
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.i18n = this.$i18n;

    if (this.enableRTL) {
      this.i18n.locale = 'ar';
      this.$rtl.enableRTL();
    }

    this.initBigChart(0);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = 'en';
      this.$rtl.disableRTL();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ "./resources/js/dashboard/components/index.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BaseTable: _components__WEBPACK_IMPORTED_MODULE_0__["BaseTable"]
  },
  computed: {
    tableData: function tableData() {
      return this.$t('dashboard.taskList');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ "./resources/js/dashboard/components/index.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BaseTable: _components__WEBPACK_IMPORTED_MODULE_0__["BaseTable"]
  },
  computed: {
    table: function table() {
      return this.$t('dashboard.usersTable');
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard.vue?vue&type=template&id=3054b640&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/pages/Dashboard.vue?vue&type=template&id=3054b640& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-sm-6",
                      class: _vm.isRTL ? "text-right" : "text-left"
                    },
                    [
                      _c("h5", { staticClass: "card-category" }, [
                        _vm._v(_vm._s(_vm.$t("dashboard.totalShipments")))
                      ]),
                      _vm._v(" "),
                      _c("h2", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.$t("dashboard.performance")))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group btn-group-toggle",
                        class: _vm.isRTL ? "float-left" : "float-right",
                        attrs: { "data-toggle": "buttons" }
                      },
                      _vm._l(_vm.bigLineChartCategories, function(
                        option,
                        index
                      ) {
                        return _c(
                          "label",
                          {
                            key: option,
                            staticClass: "btn btn-sm btn-primary btn-simple",
                            class: {
                              active: _vm.bigLineChart.activeIndex === index
                            },
                            attrs: { id: index }
                          },
                          [
                            _c("input", {
                              attrs: {
                                type: "radio",
                                name: "options",
                                autocomplete: "off"
                              },
                              domProps: {
                                checked: _vm.bigLineChart.activeIndex === index
                              },
                              on: {
                                click: function($event) {
                                  return _vm.initBigChart(index)
                                }
                              }
                            }),
                            _vm._v(
                              "\n                  " +
                                _vm._s(option) +
                                "\n                "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    ref: "bigChart",
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-id": "big-line-chart",
                      "chart-data": _vm.bigLineChart.chartData,
                      "gradient-colors": _vm.bigLineChart.gradientColors,
                      "gradient-stops": _vm.bigLineChart.gradientStops,
                      "extra-options": _vm.bigLineChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-4", class: { "text-right": _vm.isRTL } },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v(_vm._s(_vm.$t("dashboard.totalShipments")))
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-bell-55 text-primary "
                  }),
                  _vm._v(" 763,215")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-id": "purple-line-chart",
                      "chart-data": _vm.purpleLineChart.chartData,
                      "gradient-colors": _vm.purpleLineChart.gradientColors,
                      "gradient-stops": _vm.purpleLineChart.gradientStops,
                      "extra-options": _vm.purpleLineChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4", class: { "text-right": _vm.isRTL } },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v(_vm._s(_vm.$t("dashboard.dailySales")))
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", {
                    staticClass: "tim-icons icon-delivery-fast text-info "
                  }),
                  _vm._v(" 3,500€")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("bar-chart", {
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-id": "blue-bar-chart",
                      "chart-data": _vm.blueBarChart.chartData,
                      "gradient-stops": _vm.blueBarChart.gradientStops,
                      "extra-options": _vm.blueBarChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4", class: { "text-right": _vm.isRTL } },
        [
          _c(
            "card",
            { attrs: { type: "chart" } },
            [
              _c("template", { slot: "header" }, [
                _c("h5", { staticClass: "card-category" }, [
                  _vm._v(_vm._s(_vm.$t("dashboard.completedTasks")))
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "card-title" }, [
                  _c("i", { staticClass: "tim-icons icon-send text-success " }),
                  _vm._v(" 12,100K")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("line-chart", {
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-id": "green-line-chart",
                      "chart-data": _vm.greenLineChart.chartData,
                      "gradient-stops": _vm.greenLineChart.gradientStops,
                      "extra-options": _vm.greenLineChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6 col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                type: "tasks",
                "header-classes": { "text-right": _vm.isRTL }
              }
            },
            [
              _c(
                "template",
                { slot: "header" },
                [
                  _c("h6", { staticClass: "title d-inline" }, [
                    _vm._v(_vm._s(_vm.$t("dashboard.tasks", { count: 5 })))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-category d-inline" }, [
                    _vm._v(_vm._s(_vm.$t("dashboard.today")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "base-dropdown",
                    {
                      class: { "float-left": _vm.isRTL },
                      attrs: {
                        "menu-on-right": "",
                        tag: "div",
                        "title-classes": "btn btn-link btn-icon",
                        "aria-label": "Settings menu"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "tim-icons icon-settings-gear-63",
                        attrs: { slot: "title" },
                        slot: "title"
                      }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#pablo" }
                        },
                        [_vm._v(_vm._s(_vm.$t("dashboard.dropdown.action")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#pablo" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("dashboard.dropdown.anotherAction"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#pablo" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("dashboard.dropdown.somethingElse"))
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-full-width table-responsive" },
                [_c("task-list")],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6 col-md-12" },
        [
          _c(
            "card",
            {
              staticClass: "card",
              attrs: { "header-classes": { "text-right": _vm.isRTL } }
            },
            [
              _c(
                "h4",
                {
                  staticClass: "card-title",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [_vm._v(_vm._s(_vm.$t("dashboard.simpleTable")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [_c("user-table")],
                1
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=template&id=57a0653c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=template&id=57a0653c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("base-table", {
    attrs: { data: _vm.tableData, "thead-classes": "text-primary" },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var row = ref.row
          return [
            _c(
              "td",
              [
                _c("base-checkbox", {
                  model: {
                    value: row.done,
                    callback: function($$v) {
                      _vm.$set(row, "done", $$v)
                    },
                    expression: "row.done"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c("p", { staticClass: "title" }, [_vm._v(_vm._s(row.title))]),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted" }, [
                _vm._v(_vm._s(row.description))
              ])
            ]),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "td-actions text-right" },
              [
                _c(
                  "base-button",
                  { attrs: { type: "link", "aria-label": "edit button" } },
                  [_c("i", { staticClass: "tim-icons icon-pencil" })]
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=template&id=ed4ae798&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=template&id=ed4ae798& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("base-table", {
    attrs: {
      data: _vm.table.data,
      columns: _vm.table.columns,
      "thead-classes": "text-primary"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/components/Charts/BarChart.js":
/*!**************************************************************!*\
  !*** ./resources/js/dashboard/components/Charts/BarChart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bar-chart',
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
    extraOptions: Object,
    gradientColors: {
      type: Array,
      default: function _default() {
        return ['rgba(72,72,176,0.2)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'];
      },
      validator: function validator(val) {
        return val.length > 2;
      }
    },
    gradientStops: {
      type: Array,
      default: function _default() {
        return [1, 0.4, 0];
      },
      validator: function validator(val) {
        return val.length > 2;
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  methods: {
    updateGradients: function updateGradients(chartData) {
      if (!chartData) return;
      var ctx = this.ctx || document.getElementById(this.chartId).getContext('2d');
      var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(this.gradientStops[0], this.gradientColors[0]);
      gradientStroke.addColorStop(this.gradientStops[1], this.gradientColors[1]);
      gradientStroke.addColorStop(this.gradientStops[2], this.gradientColors[2]);
      chartData.datasets.forEach(function (set) {
        set.backgroundColor = gradientStroke;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      _this.updateGradients(newVal);

      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/dashboard/components/Charts/LineChart.js":
/*!***************************************************************!*\
  !*** ./resources/js/dashboard/components/Charts/LineChart.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'line-chart',
  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
    extraOptions: Object,
    gradientColors: {
      type: Array,
      default: function _default() {
        return ['rgba(72,72,176,0.2)', 'rgba(72,72,176,0.0)', 'rgba(119,52,169,0)'];
      },
      validator: function validator(val) {
        return val.length > 2;
      }
    },
    gradientStops: {
      type: Array,
      default: function _default() {
        return [1, 0.4, 0];
      },
      validator: function validator(val) {
        return val.length > 2;
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  methods: {
    updateGradients: function updateGradients(chartData) {
      if (!chartData) return;
      var ctx = this.ctx || document.getElementById(this.chartId).getContext('2d');
      var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(this.gradientStops[0], this.gradientColors[0]);
      gradientStroke.addColorStop(this.gradientStops[1], this.gradientColors[1]);
      gradientStroke.addColorStop(this.gradientStops[2], this.gradientColors[2]);
      chartData.datasets.forEach(function (set) {
        set.backgroundColor = gradientStroke;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      _this.updateGradients(_this.chartData);

      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/dashboard/components/Charts/config.js":
/*!************************************************************!*\
  !*** ./resources/js/dashboard/components/Charts/config.js ***!
  \************************************************************/
/*! exports provided: basicOptions, blueChartOptions, purpleChartOptions, orangeChartOptions, greenChartOptions, barChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicOptions", function() { return basicOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueChartOptions", function() { return blueChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purpleChartOptions", function() { return purpleChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orangeChartOptions", function() { return orangeChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenChartOptions", function() { return greenChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptions", function() { return barChartOptions; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
var blueChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent"
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#2380f7"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent"
      },
      ticks: {
        padding: 20,
        fontColor: "#2380f7"
      }
    }]
  }
});
var purpleChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent"
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: "transparent"
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }]
  }
});
var orangeChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent"
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 110,
        padding: 20,
        fontColor: "#ff8a76"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.1)',
        zeroLineColor: "transparent"
      },
      ticks: {
        padding: 20,
        fontColor: "#ff8a76"
      }
    }]
  }
});
var greenChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent"
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(0,242,195,0.1)',
        zeroLineColor: "transparent"
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }]
  }
});
var barChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent"
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 120,
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }],
    xAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent"
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }]
  }
});

/***/ }),

/***/ "./resources/js/dashboard/config.js":
/*!******************************************!*\
  !*** ./resources/js/dashboard/config.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    default: "#344675",
    primary: "#42b883",
    info: "#1d8cf8",
    danger: "#fd5d93",
    teal: "#00d6b4",
    primaryGradient: ['rgba(76, 211, 150, 0.1)', 'rgba(53, 183, 125, 0)', 'rgba(119,52,169,0)']
  }
});

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_3054b640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=3054b640& */ "./resources/js/dashboard/pages/Dashboard.vue?vue&type=template&id=3054b640&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_3054b640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_3054b640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard.vue?vue&type=template&id=3054b640&":
/*!***********************************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard.vue?vue&type=template&id=3054b640& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_3054b640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=3054b640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard.vue?vue&type=template&id=3054b640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_3054b640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_3054b640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard/TaskList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard/TaskList.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_vue_vue_type_template_id_57a0653c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=57a0653c& */ "./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=template&id=57a0653c&");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskList_vue_vue_type_template_id_57a0653c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskList_vue_vue_type_template_id_57a0653c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/pages/Dashboard/TaskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=template&id=57a0653c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=template&id=57a0653c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_57a0653c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=57a0653c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/TaskList.vue?vue&type=template&id=57a0653c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_57a0653c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_57a0653c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard/UserTable.vue":
/*!**************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard/UserTable.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserTable_vue_vue_type_template_id_ed4ae798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTable.vue?vue&type=template&id=ed4ae798& */ "./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=template&id=ed4ae798&");
/* harmony import */ var _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTable.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTable_vue_vue_type_template_id_ed4ae798___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserTable_vue_vue_type_template_id_ed4ae798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/pages/Dashboard/UserTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=template&id=ed4ae798&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=template&id=ed4ae798& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_ed4ae798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTable.vue?vue&type=template&id=ed4ae798& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/pages/Dashboard/UserTable.vue?vue&type=template&id=ed4ae798&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_ed4ae798___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_ed4ae798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);