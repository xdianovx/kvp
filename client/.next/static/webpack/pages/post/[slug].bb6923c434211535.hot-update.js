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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SinglePost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components */ \"./src/components/index.ts\");\n/* harmony import */ var _src_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/layouts/MainLayout */ \"./src/layouts/MainLayout.tsx\");\n/* harmony import */ var _src_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/ui */ \"./src/ui/index.ts\");\n/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/utils/api */ \"./src/utils/api/index.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/post/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SinglePost() {\n    _s();\n    const tags = [\n        {\n            id: 1,\n            title: \"#Работа\",\n            slug: \"work\"\n        },\n        {\n            id: 2,\n            title: \"#Маркетинг\",\n            slug: \"marketing\"\n        },\n        {\n            id: 3,\n            title: \"#Наука\",\n            slug: \"science\"\n        },\n        {\n            id: 4,\n            title: \"#Анализ\",\n            slug: \"acaliz\"\n        }\n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const { slug  } = router.query;\n            const post = await _src_utils_api__WEBPACK_IMPORTED_MODULE_7__.PostApi.getPost(+slug);\n            console.log(post);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {}, void 0, false, {\n                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-sm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tags),\n                            children: tags.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ui__WEBPACK_IMPORTED_MODULE_6__.Tag, {\n                                    title: item.title,\n                                    slug: item.slug\n                                }, item.id, false, {\n                                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ui__WEBPACK_IMPORTED_MODULE_6__.Title, {\n                            tag: \"h1\",\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().pagetitle),\n                            children: [\n                                \"\\xabЦиан\\xbb провёл первую \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 34\n                                }, this),\n                                \" межконтинентальную сделку онлайн: между\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                \" Канадой и Турцией\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components__WEBPACK_IMPORTED_MODULE_4__.PostInfo, {\n                            avatar: \"asd\",\n                            name: \"Юрий Сапожников\",\n                            date: \"12.12.2022\",\n                            commentsCount: 23,\n                            views: 1233\n                        }, void 0, false, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Моя первая статья вызвала живой отклик в комментариях, и я вам очень за это благодарен. Было много вопросов — конструктивных, скептических, даже язвительных. Это подтвердило мои догадки, что о прачечных есть очень много мифов и стереотипов. Давайте поговорим о них и развеем раз и навсегда!\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dianov/Desktop/Projects/kvp/client/pages/post/[slug].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // export async function getStaticProps() {\n //   const router = useRouter();\n //   const { slug } = router.query;\n //   const post = await PostApi.getPost(slug);\n //   console.log(post);\n //   return {\n //     props: {\n //       post: post,\n //     },\n //   };\n // }\n_s(SinglePost, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SinglePost;\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ1c7QUFDQztBQUVPO0FBQ007QUFDWjtBQUNJO0FBQ1Q7QUFFdEIsU0FBU1UsYUFBMEI7O0lBQ2hELE1BQU1DLE9BQU87UUFDWDtZQUFFQyxJQUFJO1lBQUdDLE9BQU87WUFBV0MsTUFBTTtRQUFPO1FBQ3hDO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFjQyxNQUFNO1FBQVk7UUFDaEQ7WUFBRUYsSUFBSTtZQUFHQyxPQUFPO1lBQVVDLE1BQU07UUFBVTtRQUMxQztZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBV0MsTUFBTTtRQUFTO0tBQzNDO0lBRUQsTUFBTUMsU0FBU2Qsc0RBQVNBO0lBQ3hCRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWEsWUFBWSxVQUFZO1lBQzVCLE1BQU0sRUFBRUYsS0FBSSxFQUFFLEdBQUdDLE9BQU9FLEtBQUs7WUFDN0IsTUFBTUMsT0FBTyxNQUFNViwyREFBZSxDQUFDLENBQUNNO1lBQ3BDTSxRQUFRQyxHQUFHLENBQUNIO1FBQ2Q7UUFFQUY7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBSUE7MEJBQ0gsNEVBQUNhOzs7Ozs7Ozs7OzBCQUdILDhEQUFDUiwrREFBVUE7MEJBQ1QsNEVBQUNpQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFRRCxXQUFXZCxpRUFBTTtzQ0FDdkJFLEtBQUtjLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ3BCLHdDQUFHQTtvQ0FBZU8sT0FBT2EsS0FBS2IsS0FBSztvQ0FBRUMsTUFBTVksS0FBS1osSUFBSTttQ0FBM0NZLEtBQUtkLEVBQUU7Ozs7Ozs7Ozs7c0NBR3JCLDhEQUFDTCwwQ0FBS0E7NEJBQUNvQixLQUFJOzRCQUFLSixXQUFXZCxzRUFBVzs7Z0NBQUU7OENBQ2pCLDhEQUFDb0I7Ozs7O2dDQUFLO2dDQUF5Qzs4Q0FDcEUsOERBQUNBOzs7OztnQ0FBSzs7Ozs7OztzQ0FHUiw4REFBQ3pCLHFEQUFRQTs0QkFDUDBCLFFBQU87NEJBQ1BDLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xDLGVBQWU7NEJBQ2ZDLE9BQU87Ozs7OztzQ0FHVCw4REFBQ0M7O2dDQUFFO2dDQUs2Qjs7Ozs7OztzQ0FFaEMsOERBQUNBOztnQ0FBRTtnQ0FLNkI7Ozs7Ozs7c0NBRWhDLDhEQUFDQTs7Z0NBQUU7Z0NBSzZCOzs7Ozs7O3NDQUVoQyw4REFBQ0E7O2dDQUFFO2dDQUs2Qjs7Ozs7OztzQ0FFaEMsOERBQUNBOztnQ0FBRTtnQ0FLNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDLENBQUMsQ0FFRCwyQ0FBMkM7Q0FDM0MsZ0NBQWdDO0NBQ2hDLG1DQUFtQztDQUNuQyw4Q0FBOEM7Q0FFOUMsdUJBQXVCO0NBRXZCLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsSUFBSTtHQWxHb0J6Qjs7UUFRUFQsa0RBQVNBOzs7S0FSRlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4PzMwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1RlbXBsYXRlTWlkZGxlIH0gZnJvbSBcInR5cGVzY3JpcHRcIjtcbmltcG9ydCB7IFBvc3RJbmZvIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vLi4vc3JjL2xheW91dHMvTWFpbkxheW91dFwiO1xuaW1wb3J0IHsgVGFnLCBUaXRsZSB9IGZyb20gXCIuLi8uLi9zcmMvdWlcIjtcbmltcG9ydCB7IFBvc3RBcGkgfSBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL2FwaVwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVBvc3QoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB0YWdzID0gW1xuICAgIHsgaWQ6IDEsIHRpdGxlOiBcIiPQoNCw0LHQvtGC0LBcIiwgc2x1ZzogXCJ3b3JrXCIgfSxcbiAgICB7IGlkOiAyLCB0aXRsZTogXCIj0JzQsNGA0LrQtdGC0LjQvdCzXCIsIHNsdWc6IFwibWFya2V0aW5nXCIgfSxcbiAgICB7IGlkOiAzLCB0aXRsZTogXCIj0J3QsNGD0LrQsFwiLCBzbHVnOiBcInNjaWVuY2VcIiB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiBcIiPQkNC90LDQu9C40LdcIiwgc2x1ZzogXCJhY2FsaXpcIiB9LFxuICBdO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3RBcGkuZ2V0UG9zdCgrc2x1Zyk7XG4gICAgICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNYWluTGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy50YWdzfT5cbiAgICAgICAgICAgIHt0YWdzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8VGFnIGtleT17aXRlbS5pZH0gdGl0bGU9e2l0ZW0udGl0bGV9IHNsdWc9e2l0ZW0uc2x1Z30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8VGl0bGUgdGFnPVwiaDFcIiBjbGFzc05hbWU9e3MucGFnZXRpdGxlfT5cbiAgICAgICAgICAgIMKr0KbQuNCw0L3CuyDQv9GA0L7QstGR0Lsg0L/QtdGA0LLRg9GOIDxiciAvPiDQvNC10LbQutC+0L3RgtC40L3QtdC90YLQsNC70YzQvdGD0Y4g0YHQtNC10LvQutGDINC+0L3Qu9Cw0LnQvTog0LzQtdC20LTRg3tcIiBcIn1cbiAgICAgICAgICAgIDxiciAvPiDQmtCw0L3QsNC00L7QuSDQuCDQotGD0YDRhtC40LXQuVxuICAgICAgICAgIDwvVGl0bGU+XG5cbiAgICAgICAgICA8UG9zdEluZm9cbiAgICAgICAgICAgIGF2YXRhcj1cImFzZFwiXG4gICAgICAgICAgICBuYW1lPVwi0K7RgNC40Lkg0KHQsNC/0L7QttC90LjQutC+0LJcIlxuICAgICAgICAgICAgZGF0ZT1cIjEyLjEyLjIwMjJcIlxuICAgICAgICAgICAgY29tbWVudHNDb3VudD17MjN9XG4gICAgICAgICAgICB2aWV3cz17MTIzM31cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDQnNC+0Y8g0L/QtdGA0LLQsNGPINGB0YLQsNGC0YzRjyDQstGL0LfQstCw0LvQsCDQttC40LLQvtC5INC+0YLQutC70LjQuiDQsiDQutC+0LzQvNC10L3RgtCw0YDQuNGP0YUsINC4INGPINCy0LDQvCDQvtGH0LXQvdGMXG4gICAgICAgICAgICDQt9CwINGN0YLQviDQsdC70LDQs9C+0LTQsNGA0LXQvS4g0JHRi9C70L4g0LzQvdC+0LPQviDQstC+0L/RgNC+0YHQvtCyIOKAlCDQutC+0L3RgdGC0YDRg9C60YLQuNCy0L3Ri9GFLFxuICAgICAgICAgICAg0YHQutC10L/RgtC40YfQtdGB0LrQuNGFLCDQtNCw0LbQtSDRj9C30LLQuNGC0LXQu9GM0L3Ri9GFLiDQrdGC0L4g0L/QvtC00YLQstC10YDQtNC40LvQviDQvNC+0Lgg0LTQvtCz0LDQtNC60LgsINGH0YLQviDQvlxuICAgICAgICAgICAg0L/RgNCw0YfQtdGH0L3Ri9GFINC10YHRgtGMINC+0YfQtdC90Ywg0LzQvdC+0LPQviDQvNC40YTQvtCyINC4INGB0YLQtdGA0LXQvtGC0LjQv9C+0LIuINCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCDQvlxuICAgICAgICAgICAg0L3QuNGFINC4INGA0LDQt9Cy0LXQtdC8INGA0LDQtyDQuCDQvdCw0LLRgdC10LPQtNCwIXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDQnNC+0Y8g0L/QtdGA0LLQsNGPINGB0YLQsNGC0YzRjyDQstGL0LfQstCw0LvQsCDQttC40LLQvtC5INC+0YLQutC70LjQuiDQsiDQutC+0LzQvNC10L3RgtCw0YDQuNGP0YUsINC4INGPINCy0LDQvCDQvtGH0LXQvdGMXG4gICAgICAgICAgICDQt9CwINGN0YLQviDQsdC70LDQs9C+0LTQsNGA0LXQvS4g0JHRi9C70L4g0LzQvdC+0LPQviDQstC+0L/RgNC+0YHQvtCyIOKAlCDQutC+0L3RgdGC0YDRg9C60YLQuNCy0L3Ri9GFLFxuICAgICAgICAgICAg0YHQutC10L/RgtC40YfQtdGB0LrQuNGFLCDQtNCw0LbQtSDRj9C30LLQuNGC0LXQu9GM0L3Ri9GFLiDQrdGC0L4g0L/QvtC00YLQstC10YDQtNC40LvQviDQvNC+0Lgg0LTQvtCz0LDQtNC60LgsINGH0YLQviDQvlxuICAgICAgICAgICAg0L/RgNCw0YfQtdGH0L3Ri9GFINC10YHRgtGMINC+0YfQtdC90Ywg0LzQvdC+0LPQviDQvNC40YTQvtCyINC4INGB0YLQtdGA0LXQvtGC0LjQv9C+0LIuINCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCDQvlxuICAgICAgICAgICAg0L3QuNGFINC4INGA0LDQt9Cy0LXQtdC8INGA0LDQtyDQuCDQvdCw0LLRgdC10LPQtNCwIXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDQnNC+0Y8g0L/QtdGA0LLQsNGPINGB0YLQsNGC0YzRjyDQstGL0LfQstCw0LvQsCDQttC40LLQvtC5INC+0YLQutC70LjQuiDQsiDQutC+0LzQvNC10L3RgtCw0YDQuNGP0YUsINC4INGPINCy0LDQvCDQvtGH0LXQvdGMXG4gICAgICAgICAgICDQt9CwINGN0YLQviDQsdC70LDQs9C+0LTQsNGA0LXQvS4g0JHRi9C70L4g0LzQvdC+0LPQviDQstC+0L/RgNC+0YHQvtCyIOKAlCDQutC+0L3RgdGC0YDRg9C60YLQuNCy0L3Ri9GFLFxuICAgICAgICAgICAg0YHQutC10L/RgtC40YfQtdGB0LrQuNGFLCDQtNCw0LbQtSDRj9C30LLQuNGC0LXQu9GM0L3Ri9GFLiDQrdGC0L4g0L/QvtC00YLQstC10YDQtNC40LvQviDQvNC+0Lgg0LTQvtCz0LDQtNC60LgsINGH0YLQviDQvlxuICAgICAgICAgICAg0L/RgNCw0YfQtdGH0L3Ri9GFINC10YHRgtGMINC+0YfQtdC90Ywg0LzQvdC+0LPQviDQvNC40YTQvtCyINC4INGB0YLQtdGA0LXQvtGC0LjQv9C+0LIuINCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCDQvlxuICAgICAgICAgICAg0L3QuNGFINC4INGA0LDQt9Cy0LXQtdC8INGA0LDQtyDQuCDQvdCw0LLRgdC10LPQtNCwIXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDQnNC+0Y8g0L/QtdGA0LLQsNGPINGB0YLQsNGC0YzRjyDQstGL0LfQstCw0LvQsCDQttC40LLQvtC5INC+0YLQutC70LjQuiDQsiDQutC+0LzQvNC10L3RgtCw0YDQuNGP0YUsINC4INGPINCy0LDQvCDQvtGH0LXQvdGMXG4gICAgICAgICAgICDQt9CwINGN0YLQviDQsdC70LDQs9C+0LTQsNGA0LXQvS4g0JHRi9C70L4g0LzQvdC+0LPQviDQstC+0L/RgNC+0YHQvtCyIOKAlCDQutC+0L3RgdGC0YDRg9C60YLQuNCy0L3Ri9GFLFxuICAgICAgICAgICAg0YHQutC10L/RgtC40YfQtdGB0LrQuNGFLCDQtNCw0LbQtSDRj9C30LLQuNGC0LXQu9GM0L3Ri9GFLiDQrdGC0L4g0L/QvtC00YLQstC10YDQtNC40LvQviDQvNC+0Lgg0LTQvtCz0LDQtNC60LgsINGH0YLQviDQvlxuICAgICAgICAgICAg0L/RgNCw0YfQtdGH0L3Ri9GFINC10YHRgtGMINC+0YfQtdC90Ywg0LzQvdC+0LPQviDQvNC40YTQvtCyINC4INGB0YLQtdGA0LXQvtGC0LjQv9C+0LIuINCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCDQvlxuICAgICAgICAgICAg0L3QuNGFINC4INGA0LDQt9Cy0LXQtdC8INGA0LDQtyDQuCDQvdCw0LLRgdC10LPQtNCwIXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDQnNC+0Y8g0L/QtdGA0LLQsNGPINGB0YLQsNGC0YzRjyDQstGL0LfQstCw0LvQsCDQttC40LLQvtC5INC+0YLQutC70LjQuiDQsiDQutC+0LzQvNC10L3RgtCw0YDQuNGP0YUsINC4INGPINCy0LDQvCDQvtGH0LXQvdGMXG4gICAgICAgICAgICDQt9CwINGN0YLQviDQsdC70LDQs9C+0LTQsNGA0LXQvS4g0JHRi9C70L4g0LzQvdC+0LPQviDQstC+0L/RgNC+0YHQvtCyIOKAlCDQutC+0L3RgdGC0YDRg9C60YLQuNCy0L3Ri9GFLFxuICAgICAgICAgICAg0YHQutC10L/RgtC40YfQtdGB0LrQuNGFLCDQtNCw0LbQtSDRj9C30LLQuNGC0LXQu9GM0L3Ri9GFLiDQrdGC0L4g0L/QvtC00YLQstC10YDQtNC40LvQviDQvNC+0Lgg0LTQvtCz0LDQtNC60LgsINGH0YLQviDQvlxuICAgICAgICAgICAg0L/RgNCw0YfQtdGH0L3Ri9GFINC10YHRgtGMINC+0YfQtdC90Ywg0LzQvdC+0LPQviDQvNC40YTQvtCyINC4INGB0YLQtdGA0LXQvtGC0LjQv9C+0LIuINCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCDQvlxuICAgICAgICAgICAg0L3QuNGFINC4INGA0LDQt9Cy0LXQtdC8INGA0LDQtyDQuCDQvdCw0LLRgdC10LPQtNCwIXtcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbi8vICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3RBcGkuZ2V0UG9zdChzbHVnKTtcblxuLy8gICBjb25zb2xlLmxvZyhwb3N0KTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBwb3N0OiBwb3N0LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwiUG9zdEluZm8iLCJNYWluTGF5b3V0IiwiVGFnIiwiVGl0bGUiLCJQb3N0QXBpIiwicyIsIlNpbmdsZVBvc3QiLCJ0YWdzIiwiaWQiLCJ0aXRsZSIsInNsdWciLCJyb3V0ZXIiLCJmZXRjaERhdGEiLCJxdWVyeSIsInBvc3QiLCJnZXRQb3N0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJtYXAiLCJpdGVtIiwidGFnIiwicGFnZXRpdGxlIiwiYnIiLCJhdmF0YXIiLCJuYW1lIiwiZGF0ZSIsImNvbW1lbnRzQ291bnQiLCJ2aWV3cyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n"));

/***/ })

});