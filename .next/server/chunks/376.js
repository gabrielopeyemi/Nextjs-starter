exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 376:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(861);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(788);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_interceptor__WEBPACK_IMPORTED_MODULE_2__]);
_services_interceptor__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_services_interceptor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
      client: queryClient
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__.ReactQueryDevtools, {
      initialIsOpen: false
    }))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @typescript-eslint/no-explicit-any */

var instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: '',
  timeout: 36000
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_instance__WEBPACK_IMPORTED_MODULE_1__]);
_instance__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-constant-condition */

/* eslint-disable no-alert */

/* eslint-disable no-underscore-dangle */



var Interceptor = function Interceptor(_ref) {
  var component = _ref.component;
  var userToken = '';
  var isLoggedIn = true;
  _instance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.interceptors.request.use(function (config) {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();

    if (isLoggedIn) {
      Object.assign(config.headers, {
        Authorization: "".concat(userToken)
      });
    }

    return config;
  });
  _instance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.interceptors.response.use(function (response) {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    return response;
  }, function (error) {
    var _error$response, _error$response2, _error$response3;

    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

    if ((error === null || error === void 0 ? void 0 : error.code) === 'ECONNABORTED') {
      alert('Error');
      return error;
    }

    if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) === 'User not authorized for this') {
      // clear local storage;
      window.location.href = '/home';
    } // eslint-disable-next-line no-underscore-dangle


    if ((error === null || error === void 0 || (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 401 && error.config) {
      if (true) {
        alert('error'); // clear local storage

        window.location.href = '/home';
      }
    }

    if ((error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) === 500) {
      error.response.data.message = 'Something went wrong, Please try again!';
      alert('error');
    }

    return Promise.reject(error);
  });
  return component;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interceptor);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 764:
/***/ (() => {



/***/ })

};
;