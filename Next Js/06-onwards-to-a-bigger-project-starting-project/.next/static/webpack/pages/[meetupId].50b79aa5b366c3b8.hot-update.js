"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStatticPath: function() { return /* binding */ getStatticPath; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\n\nfunction MeetupDetail() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        image: \"https://plus.unsplash.com/premium_photo-1661338864650-d44b165f8056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80\",\n        title: \"First Meetup\",\n        address: \"Some Street 5 , Some City\",\n        description: \"This is first Meet up\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Nikunj\\\\React training\\\\typescript-app\\\\Next Js\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n}\n_c = MeetupDetail;\nasync function getStatticPath() {\n    const client = await MongoClient.connect(\"mongodb+srv://nikunjpatel:nikunj7452@cluster0.skpu7ya.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollections = db.collection(\"meetups\");\n    const meetups = await meetupsCollections.find({}, {\n        _id: 1\n    }).toArray();\n    client.close();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtFO0FBQ2xFLFNBQVNDO0lBQ0wscUJBQ0ksOERBQUNELHlFQUFhQTtRQUFDRSxPQUFNO1FBQ2pCQyxPQUFNO1FBQ05DLFNBQVE7UUFDUkMsYUFBWTs7Ozs7O0FBRXhCO0tBUFNKO0FBU0YsZUFBZUs7SUFHbEIsTUFBTUMsU0FBUyxNQUFNQyxZQUFZQyxPQUFPLENBQUM7SUFDekMsTUFBTUMsS0FBS0gsT0FBT0csRUFBRTtJQUVwQixNQUFNQyxxQkFBcUJELEdBQUdFLFVBQVUsQ0FBQztJQUV6QyxNQUFNQyxVQUFVLE1BQU1GLG1CQUFtQkcsSUFBSSxDQUFDLENBQUMsR0FBRztRQUFFQyxLQUFLO0lBQUUsR0FBR0MsT0FBTztJQUVyRVQsT0FBT1UsS0FBSztBQUVoQjtBQUVBLCtEQUFlaEIsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzhmZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCJcclxuZnVuY3Rpb24gTWVldHVwRGV0YWlsKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVldHVwRGV0YWlscyBpbWFnZT1cImh0dHBzOi8vcGx1cy51bnNwbGFzaC5jb20vcHJlbWl1bV9waG90by0xNjYxMzM4ODY0NjUwLWQ0NGIxNjVmODA1Nj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTMyJnE9ODBcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkZpcnN0IE1lZXR1cFwiXHJcbiAgICAgICAgICAgIGFkZHJlc3M9XCJTb21lIFN0cmVldCA1ICwgU29tZSBDaXR5XCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGlzIGlzIGZpcnN0IE1lZXQgdXBcIiAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdHRpY1BhdGgoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL25pa3VuanBhdGVsOm5pa3Vuajc0NTJAY2x1c3RlcjAuc2twdTd5YS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbnMuZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWwiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsIk1lZXR1cERldGFpbCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJnZXRTdGF0dGljUGF0aCIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb25zIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});