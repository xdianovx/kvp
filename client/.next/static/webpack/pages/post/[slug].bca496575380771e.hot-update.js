"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SinglePost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components */ \"./src/components/index.ts\");\n/* harmony import */ var _src_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/layouts/MainLayout */ \"./src/layouts/MainLayout.tsx\");\n/* harmony import */ var _src_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/ui */ \"./src/ui/index.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/post/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SinglePost() {\n    _s();\n    const tags = [\n        {\n            id: 1,\n            title: \"#Работа\",\n            slug: \"work\"\n        },\n        {\n            id: 2,\n            title: \"#Маркетинг\",\n            slug: \"marketing\"\n        },\n        {\n            id: 3,\n            title: \"#Наука\",\n            slug: \"science\"\n        },\n        {\n            id: 4,\n            title: \"#Анализ\",\n            slug: \"acaliz\"\n        }\n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug  } = router.query;\n    console.log();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {}, void 0, false, {\n                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tags),\n                            children: tags.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ui__WEBPACK_IMPORTED_MODULE_6__.Tag, {\n                                    title: item.title,\n                                    slug: item.slug\n                                }, item.id, false, {\n                                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ui__WEBPACK_IMPORTED_MODULE_6__.Title, {\n                            tag: \"h1\",\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pagetitle),\n                            children: [\n                                \"\\xabЦиан\\xbb провёл первую \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 34\n                                }, this),\n                                \" межконтинентальную сделку онлайн: между\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                \" Канадой и Турцией\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components__WEBPACK_IMPORTED_MODULE_4__.PostInfo, {\n                            avatar: \"asd\",\n                            name: \"Юрий Сапожников\",\n                            date: \"12.12.2022\",\n                            commentsCount: 23,\n                            views: 1233\n                        }, void 0, false, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SinglePost, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SinglePost;\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDVztBQUNkO0FBRXNCO0FBQ007QUFDWjtBQUNMO0FBRXRCLFNBQVNRLGFBQTBCOztJQUNoRCxNQUFNQyxPQUFPO1FBQ1g7WUFBRUMsSUFBSTtZQUFHQyxPQUFPO1lBQVdDLE1BQU07UUFBTztRQUN4QztZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBY0MsTUFBTTtRQUFZO1FBQ2hEO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFVQyxNQUFNO1FBQVU7UUFDMUM7WUFBRUYsSUFBSTtZQUFHQyxPQUFPO1lBQVdDLE1BQU07UUFBUztLQUMzQztJQUVELE1BQU1DLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHQyxPQUFPQyxLQUFLO0lBQzdCQyxRQUFRQyxHQUFHO0lBRVgscUJBQ0U7OzBCQUNFLDhEQUFDaEIsa0RBQUlBOzBCQUNILDRFQUFDVzs7Ozs7Ozs7OzswQkFHSCw4REFBQ1AsK0RBQVVBOzBCQUNULDRFQUFDYTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFRRCxXQUFXWCxpRUFBTTtzQ0FDdkJFLEtBQUtXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ2hCLHdDQUFHQTtvQ0FBZU0sT0FBT1UsS0FBS1YsS0FBSztvQ0FBRUMsTUFBTVMsS0FBS1QsSUFBSTttQ0FBM0NTLEtBQUtYLEVBQUU7Ozs7Ozs7Ozs7c0NBR3JCLDhEQUFDSiwwQ0FBS0E7NEJBQUNnQixLQUFJOzRCQUFLSixXQUFXWCxzRUFBVzs7Z0NBQUU7OENBQ2pCLDhEQUFDaUI7Ozs7O2dDQUFLO2dDQUF5Qzs4Q0FDcEUsOERBQUNBOzs7OztnQ0FBSzs7Ozs7OztzQ0FHUiw4REFBQ3JCLHFEQUFRQTs0QkFDUHNCLFFBQU87NEJBQ1BDLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xDLGVBQWU7NEJBQ2ZDLE9BQU87Ozs7OztzQ0FHVCw4REFBQ0M7O2dDQUFFO2dDQUs2Qjs7Ozs7OztzQ0FFaEMsOERBQUNBOztnQ0FBRTtnQ0FLNkI7Ozs7Ozs7c0NBRWhDLDhEQUFDQTs7Z0NBQUU7Z0NBSzZCOzs7Ozs7O3NDQUVoQyw4REFBQ0E7O2dDQUFFO2dDQUs2Qjs7Ozs7OztzQ0FFaEMsOERBQUNBOztnQ0FBRTtnQ0FLNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDLENBQUM7R0E3RXVCdEI7O1FBUVBQLGtEQUFTQTs7O0tBUkZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZU1pZGRsZSB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XG5pbXBvcnQgeyBQb3N0SW5mbyB9IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50c1wiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXRcIjtcbmltcG9ydCB7IFRhZywgVGl0bGUgfSBmcm9tIFwiLi4vLi4vc3JjL3VpXCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUG9zdCgpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHRhZ3MgPSBbXG4gICAgeyBpZDogMSwgdGl0bGU6IFwiI9Cg0LDQsdC+0YLQsFwiLCBzbHVnOiBcIndvcmtcIiB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiBcIiPQnNCw0YDQutC10YLQuNC90LNcIiwgc2x1ZzogXCJtYXJrZXRpbmdcIiB9LFxuICAgIHsgaWQ6IDMsIHRpdGxlOiBcIiPQndCw0YPQutCwXCIsIHNsdWc6IFwic2NpZW5jZVwiIH0sXG4gICAgeyBpZDogNCwgdGl0bGU6IFwiI9CQ0L3QsNC70LjQt1wiLCBzbHVnOiBcImFjYWxpelwiIH0sXG4gIF07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zb2xlLmxvZygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE1haW5MYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLnRhZ3N9PlxuICAgICAgICAgICAge3RhZ3MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWcga2V5PXtpdGVtLmlkfSB0aXRsZT17aXRlbS50aXRsZX0gc2x1Zz17aXRlbS5zbHVnfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMVwiIGNsYXNzTmFtZT17cy5wYWdldGl0bGV9PlxuICAgICAgICAgICAgwqvQptC40LDQvcK7INC/0YDQvtCy0ZHQuyDQv9C10YDQstGD0Y4gPGJyIC8+INC80LXQttC60L7QvdGC0LjQvdC10L3RgtCw0LvRjNC90YPRjiDRgdC00LXQu9C60YMg0L7QvdC70LDQudC9OiDQvNC10LbQtNGDe1wiIFwifVxuICAgICAgICAgICAgPGJyIC8+INCa0LDQvdCw0LTQvtC5INC4INCi0YPRgNGG0LjQtdC5XG4gICAgICAgICAgPC9UaXRsZT5cblxuICAgICAgICAgIDxQb3N0SW5mb1xuICAgICAgICAgICAgYXZhdGFyPVwiYXNkXCJcbiAgICAgICAgICAgIG5hbWU9XCLQrtGA0LjQuSDQodCw0L/QvtC20L3QuNC60L7QslwiXG4gICAgICAgICAgICBkYXRlPVwiMTIuMTIuMjAyMlwiXG4gICAgICAgICAgICBjb21tZW50c0NvdW50PXsyM31cbiAgICAgICAgICAgIHZpZXdzPXsxMjMzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINCc0L7RjyDQv9C10YDQstCw0Y8g0YHRgtCw0YLRjNGPINCy0YvQt9Cy0LDQu9CwINC20LjQstC+0Lkg0L7RgtC60LvQuNC6INCyINC60L7QvNC80LXQvdGC0LDRgNC40Y/RhSwg0Lgg0Y8g0LLQsNC8INC+0YfQtdC90YxcbiAgICAgICAgICAgINC30LAg0Y3RgtC+INCx0LvQsNCz0L7QtNCw0YDQtdC9LiDQkdGL0LvQviDQvNC90L7Qs9C+INCy0L7Qv9GA0L7RgdC+0LIg4oCUINC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdGL0YUsXG4gICAgICAgICAgICDRgdC60LXQv9GC0LjRh9C10YHQutC40YUsINC00LDQttC1INGP0LfQstC40YLQtdC70YzQvdGL0YUuINCt0YLQviDQv9C+0LTRgtCy0LXRgNC00LjQu9C+INC80L7QuCDQtNC+0LPQsNC00LrQuCwg0YfRgtC+INC+XG4gICAgICAgICAgICDQv9GA0LDRh9C10YfQvdGL0YUg0LXRgdGC0Ywg0L7Rh9C10L3RjCDQvNC90L7Qs9C+INC80LjRhNC+0LIg0Lgg0YHRgtC10YDQtdC+0YLQuNC/0L7Qsi4g0JTQsNCy0LDQudGC0LUg0L/QvtCz0L7QstC+0YDQuNC8INC+XG4gICAgICAgICAgICDQvdC40YUg0Lgg0YDQsNC30LLQtdC10Lwg0YDQsNC3INC4INC90LDQstGB0LXQs9C00LAhe1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINCc0L7RjyDQv9C10YDQstCw0Y8g0YHRgtCw0YLRjNGPINCy0YvQt9Cy0LDQu9CwINC20LjQstC+0Lkg0L7RgtC60LvQuNC6INCyINC60L7QvNC80LXQvdGC0LDRgNC40Y/RhSwg0Lgg0Y8g0LLQsNC8INC+0YfQtdC90YxcbiAgICAgICAgICAgINC30LAg0Y3RgtC+INCx0LvQsNCz0L7QtNCw0YDQtdC9LiDQkdGL0LvQviDQvNC90L7Qs9C+INCy0L7Qv9GA0L7RgdC+0LIg4oCUINC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdGL0YUsXG4gICAgICAgICAgICDRgdC60LXQv9GC0LjRh9C10YHQutC40YUsINC00LDQttC1INGP0LfQstC40YLQtdC70YzQvdGL0YUuINCt0YLQviDQv9C+0LTRgtCy0LXRgNC00LjQu9C+INC80L7QuCDQtNC+0LPQsNC00LrQuCwg0YfRgtC+INC+XG4gICAgICAgICAgICDQv9GA0LDRh9C10YfQvdGL0YUg0LXRgdGC0Ywg0L7Rh9C10L3RjCDQvNC90L7Qs9C+INC80LjRhNC+0LIg0Lgg0YHRgtC10YDQtdC+0YLQuNC/0L7Qsi4g0JTQsNCy0LDQudGC0LUg0L/QvtCz0L7QstC+0YDQuNC8INC+XG4gICAgICAgICAgICDQvdC40YUg0Lgg0YDQsNC30LLQtdC10Lwg0YDQsNC3INC4INC90LDQstGB0LXQs9C00LAhe1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINCc0L7RjyDQv9C10YDQstCw0Y8g0YHRgtCw0YLRjNGPINCy0YvQt9Cy0LDQu9CwINC20LjQstC+0Lkg0L7RgtC60LvQuNC6INCyINC60L7QvNC80LXQvdGC0LDRgNC40Y/RhSwg0Lgg0Y8g0LLQsNC8INC+0YfQtdC90YxcbiAgICAgICAgICAgINC30LAg0Y3RgtC+INCx0LvQsNCz0L7QtNCw0YDQtdC9LiDQkdGL0LvQviDQvNC90L7Qs9C+INCy0L7Qv9GA0L7RgdC+0LIg4oCUINC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdGL0YUsXG4gICAgICAgICAgICDRgdC60LXQv9GC0LjRh9C10YHQutC40YUsINC00LDQttC1INGP0LfQstC40YLQtdC70YzQvdGL0YUuINCt0YLQviDQv9C+0LTRgtCy0LXRgNC00LjQu9C+INC80L7QuCDQtNC+0LPQsNC00LrQuCwg0YfRgtC+INC+XG4gICAgICAgICAgICDQv9GA0LDRh9C10YfQvdGL0YUg0LXRgdGC0Ywg0L7Rh9C10L3RjCDQvNC90L7Qs9C+INC80LjRhNC+0LIg0Lgg0YHRgtC10YDQtdC+0YLQuNC/0L7Qsi4g0JTQsNCy0LDQudGC0LUg0L/QvtCz0L7QstC+0YDQuNC8INC+XG4gICAgICAgICAgICDQvdC40YUg0Lgg0YDQsNC30LLQtdC10Lwg0YDQsNC3INC4INC90LDQstGB0LXQs9C00LAhe1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINCc0L7RjyDQv9C10YDQstCw0Y8g0YHRgtCw0YLRjNGPINCy0YvQt9Cy0LDQu9CwINC20LjQstC+0Lkg0L7RgtC60LvQuNC6INCyINC60L7QvNC80LXQvdGC0LDRgNC40Y/RhSwg0Lgg0Y8g0LLQsNC8INC+0YfQtdC90YxcbiAgICAgICAgICAgINC30LAg0Y3RgtC+INCx0LvQsNCz0L7QtNCw0YDQtdC9LiDQkdGL0LvQviDQvNC90L7Qs9C+INCy0L7Qv9GA0L7RgdC+0LIg4oCUINC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdGL0YUsXG4gICAgICAgICAgICDRgdC60LXQv9GC0LjRh9C10YHQutC40YUsINC00LDQttC1INGP0LfQstC40YLQtdC70YzQvdGL0YUuINCt0YLQviDQv9C+0LTRgtCy0LXRgNC00LjQu9C+INC80L7QuCDQtNC+0LPQsNC00LrQuCwg0YfRgtC+INC+XG4gICAgICAgICAgICDQv9GA0LDRh9C10YfQvdGL0YUg0LXRgdGC0Ywg0L7Rh9C10L3RjCDQvNC90L7Qs9C+INC80LjRhNC+0LIg0Lgg0YHRgtC10YDQtdC+0YLQuNC/0L7Qsi4g0JTQsNCy0LDQudGC0LUg0L/QvtCz0L7QstC+0YDQuNC8INC+XG4gICAgICAgICAgICDQvdC40YUg0Lgg0YDQsNC30LLQtdC10Lwg0YDQsNC3INC4INC90LDQstGB0LXQs9C00LAhe1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINCc0L7RjyDQv9C10YDQstCw0Y8g0YHRgtCw0YLRjNGPINCy0YvQt9Cy0LDQu9CwINC20LjQstC+0Lkg0L7RgtC60LvQuNC6INCyINC60L7QvNC80LXQvdGC0LDRgNC40Y/RhSwg0Lgg0Y8g0LLQsNC8INC+0YfQtdC90YxcbiAgICAgICAgICAgINC30LAg0Y3RgtC+INCx0LvQsNCz0L7QtNCw0YDQtdC9LiDQkdGL0LvQviDQvNC90L7Qs9C+INCy0L7Qv9GA0L7RgdC+0LIg4oCUINC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdGL0YUsXG4gICAgICAgICAgICDRgdC60LXQv9GC0LjRh9C10YHQutC40YUsINC00LDQttC1INGP0LfQstC40YLQtdC70YzQvdGL0YUuINCt0YLQviDQv9C+0LTRgtCy0LXRgNC00LjQu9C+INC80L7QuCDQtNC+0LPQsNC00LrQuCwg0YfRgtC+INC+XG4gICAgICAgICAgICDQv9GA0LDRh9C10YfQvdGL0YUg0LXRgdGC0Ywg0L7Rh9C10L3RjCDQvNC90L7Qs9C+INC80LjRhNC+0LIg0Lgg0YHRgtC10YDQtdC+0YLQuNC/0L7Qsi4g0JTQsNCy0LDQudGC0LUg0L/QvtCz0L7QstC+0YDQuNC8INC+XG4gICAgICAgICAgICDQvdC40YUg0Lgg0YDQsNC30LLQtdC10Lwg0YDQsNC3INC4INC90LDQstGB0LXQs9C00LAhe1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIlJlYWN0IiwiUG9zdEluZm8iLCJNYWluTGF5b3V0IiwiVGFnIiwiVGl0bGUiLCJzIiwiU2luZ2xlUG9zdCIsInRhZ3MiLCJpZCIsInRpdGxlIiwic2x1ZyIsInJvdXRlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJtYXAiLCJpdGVtIiwidGFnIiwicGFnZXRpdGxlIiwiYnIiLCJhdmF0YXIiLCJuYW1lIiwiZGF0ZSIsImNvbW1lbnRzQ291bnQiLCJ2aWV3cyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n"));

/***/ })

});