"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"First Meetup\",\n        image: \"https://plus.unsplash.com/premium_photo-1661338864650-d44b165f8056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80\",\n        address: \"Some address 5 , 12345 Some city\",\n        description: \"This is first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"Second Meetup\",\n        image: \"https://plus.unsplash.com/premium_photo-1661338864650-d44b165f8056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80\",\n        address: \"Some address 5 , 12345 Some city\",\n        description: \"This is Second meetup\"\n    }\n];\nasync function HomePage() {\n    const client = await MongoClient.connect(\"mongodb+srv://nikunjpatel:nikunj7452@cluster0.skpu7ya.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollections = db.collection(\"meetups\");\n    const meetups = await meetupsCollections.find().toArray();\n    client.close();\n    const meetupData = meetups.map((meetup)=>({\n            title: meetup.title,\n            address: meetup.address,\n            image: meetup.image,\n            id: meetup._id.toString()\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: meetupData\n    }, void 0, false, {\n        fileName: \"C:\\\\Nikunj\\\\React training\\\\typescript-app\\\\Next Js\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\index.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUc1RCxNQUFNQyxnQkFBZ0I7SUFDbEI7UUFDSUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxhQUFhO0lBRWpCO0lBQ0E7UUFDSUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxhQUFhO0lBRWpCO0NBQ0g7QUFDRCxlQUFlQztJQUdYLE1BQU1DLFNBQVMsTUFBTUMsWUFBWUMsT0FBTyxDQUFDO0lBQ3pDLE1BQU1DLEtBQUtILE9BQU9HLEVBQUU7SUFFcEIsTUFBTUMscUJBQXFCRCxHQUFHRSxVQUFVLENBQUM7SUFFekMsTUFBTUMsVUFBVSxNQUFNRixtQkFBbUJHLElBQUksR0FBR0MsT0FBTztJQUN2RFIsT0FBT1MsS0FBSztJQUVaLE1BQU1DLGFBQWFKLFFBQVFLLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVztZQUN0Q2pCLE9BQU9pQixPQUFPakIsS0FBSztZQUNuQkUsU0FBU2UsT0FBT2YsT0FBTztZQUN2QkQsT0FBT2dCLE9BQU9oQixLQUFLO1lBQ25CRixJQUFJa0IsT0FBT0MsR0FBRyxDQUFDQyxRQUFRO1FBRTNCO0lBRUEscUJBRUksOERBQUN0QixzRUFBVUE7UUFBQ2MsU0FBU0k7Ozs7OztBQUc3QjtLQXhCZVg7QUEwQmYsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIHRpdGxlOiAnRmlyc3QgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vcGx1cy51bnNwbGFzaC5jb20vcHJlbWl1bV9waG90by0xNjYxMzM4ODY0NjUwLWQ0NGIxNjVmODA1Nj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTMyJnE9ODAnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSAsIDEyMzQ1IFNvbWUgY2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGZpcnN0IG1lZXR1cCdcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIHRpdGxlOiAnU2Vjb25kIE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY2MTMzODg2NDY1MC1kNDRiMTY1ZjgwNTY/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkzMiZxPTgwJyxcclxuICAgICAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUgLCAxMjM0NSBTb21lIGNpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBTZWNvbmQgbWVldHVwJ1xyXG5cclxuICAgIH1cclxuXVxyXG5hc3luYyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vbmlrdW5qcGF0ZWw6bmlrdW5qNzQ1MkBjbHVzdGVyMC5za3B1N3lhLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbnMgPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9ucy5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgY2xpZW50LmNsb3NlKClcclxuXHJcbiAgICBjb25zdCBtZWV0dXBEYXRhID0gbWVldHVwcy5tYXAobWVldHVwID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcclxuXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXttZWV0dXBEYXRhfSAvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb25zIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwibWVldHVwRGF0YSIsIm1hcCIsIm1lZXR1cCIsIl9pZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});