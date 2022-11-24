"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Editor_Editor_tsx",{

/***/ "./src/components/Editor/Editor.tsx":
/*!******************************************!*\
  !*** ./src/components/Editor/Editor.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": function() { return /* binding */ Editor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/editorjs */ \"./node_modules/@editorjs/editorjs/dist/editor.js\");\n/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/list */ \"./node_modules/@editorjs/list/dist/bundle.js\");\n/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/quote */ \"./node_modules/@editorjs/quote/dist/bundle.js\");\n/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _editorjs_text_variant_tune__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/text-variant-tune */ \"./node_modules/@editorjs/text-variant-tune/dist/text-variant-tune.js\");\n/* harmony import */ var _editorjs_text_variant_tune__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_text_variant_tune__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _editorjs_attaches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/attaches */ \"./node_modules/@editorjs/attaches/dist/bundle.js\");\n/* harmony import */ var _editorjs_attaches__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_attaches__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/image */ \"./node_modules/@editorjs/image/dist/bundle.js\");\n/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/header */ \"./node_modules/@editorjs/header/dist/bundle.js\");\n/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Editor = (param)=>{\n    let { onChange  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const editor = new (_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2___default())({\n            holder: \"editor\",\n            placeholder: \"Статья начинается тут\",\n            async onChange () {\n                const { blocks  } = await editor.save();\n                onChange(blocks);\n            },\n            tools: {\n                quote: (_editorjs_quote__WEBPACK_IMPORTED_MODULE_4___default()),\n                list: {\n                    class: (_editorjs_list__WEBPACK_IMPORTED_MODULE_3___default()),\n                    inlineToolbar: true,\n                    config: {\n                        defaultStyle: \"unordered\"\n                    }\n                },\n                attaches: {\n                    class: (_editorjs_attaches__WEBPACK_IMPORTED_MODULE_6___default()),\n                    config: {\n                        endpoint: \"http://localhost:8000/api/v1/upload\"\n                    }\n                },\n                header: {\n                    class: (_editorjs_header__WEBPACK_IMPORTED_MODULE_8___default()),\n                    shortcut: \"CMD+SHIFT+H\"\n                },\n                textVariant: (_editorjs_text_variant_tune__WEBPACK_IMPORTED_MODULE_5___default()),\n                image: {\n                    class: (_editorjs_image__WEBPACK_IMPORTED_MODULE_7___default()),\n                    config: {\n                        endpoints: {\n                            byFile: \"http://localhost:8000/api/v1/upload\"\n                        }\n                    }\n                }\n            },\n            tunes: [\n                \"textVariant\"\n            ]\n        });\n        return ()=>{\n            editor.isReady.then(()=>{\n                editor.destroy();\n            }).catch((e)=>console.log(\"ERROR editor cleanup\", e));\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"editor\"\n    }, void 0, false, {\n        fileName: \"/Users/dianov/Desktop/Projects/kvp/client/src/components/Editor/Editor.tsx\",\n        lineNumber: 65,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Editor, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ2lCO0FBQ3hCO0FBQ0U7QUFDc0I7QUFDWjtBQUNOO0FBQ0Y7QUFNL0IsTUFBTVMsU0FBZ0MsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUN4RFQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1VLFNBQVMsSUFBSVQsMkRBQVFBLENBQUM7WUFDMUJVLFFBQVE7WUFDUkMsYUFBYTtZQUNiLE1BQU1ILFlBQVc7Z0JBQ2YsTUFBTSxFQUFFSSxPQUFNLEVBQUUsR0FBRyxNQUFNSCxPQUFPSSxJQUFJO2dCQUNwQ0wsU0FBU0k7WUFDWDtZQUNBRSxPQUFPO2dCQUNMQyxPQUFPYix3REFBS0E7Z0JBQ1pjLE1BQU07b0JBQ0pDLE9BQU9oQix1REFBSUE7b0JBQ1hpQixlQUFlLElBQUk7b0JBQ25CQyxRQUFRO3dCQUNOQyxjQUFjO29CQUNoQjtnQkFDRjtnQkFDQUMsVUFBVTtvQkFDUkosT0FBT2IsMkRBQVlBO29CQUNuQmUsUUFBUTt3QkFDTkcsVUFBVTtvQkFDWjtnQkFDRjtnQkFDQUMsUUFBUTtvQkFDTk4sT0FBT1gseURBQU1BO29CQUNia0IsVUFBVTtnQkFDWjtnQkFDQUMsYUFBYXRCLG9FQUFlQTtnQkFDNUJ1QixPQUFPO29CQUNMVCxPQUFPWix3REFBU0E7b0JBRWhCYyxRQUFRO3dCQUNOUSxXQUFXOzRCQUNUQyxRQUFTO3dCQUNYO29CQUNGO2dCQUNGO1lBQ0Y7WUFFQUMsT0FBTztnQkFBQzthQUFjO1FBQ3hCO1FBRUEsT0FBTyxJQUFNO1lBQ1hwQixPQUFPcUIsT0FBTyxDQUNYQyxJQUFJLENBQUMsSUFBTTtnQkFDVnRCLE9BQU91QixPQUFPO1lBQ2hCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxJQUFNQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtRQUN0RDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDRztRQUFJQyxJQUFHOzs7Ozs7QUFDakIsRUFBRTtHQXBEVy9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9FZGl0b3IudHN4P2FjYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEVkaXRvckpTLCB7IE91dHB1dERhdGEgfSBmcm9tIFwiQGVkaXRvcmpzL2VkaXRvcmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQGVkaXRvcmpzL2xpc3RcIjtcbmltcG9ydCBRdW90ZSBmcm9tIFwiQGVkaXRvcmpzL3F1b3RlXCI7XG5pbXBvcnQgVGV4dFZhcmlhbnRUdW5lIGZyb20gXCJAZWRpdG9yanMvdGV4dC12YXJpYW50LXR1bmVcIjtcbmltcG9ydCBBdHRhY2hlc1Rvb2wgZnJvbSBcIkBlZGl0b3Jqcy9hdHRhY2hlc1wiO1xuaW1wb3J0IEltYWdlVG9vbCBmcm9tIFwiQGVkaXRvcmpzL2ltYWdlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAZWRpdG9yanMvaGVhZGVyXCI7XG5cbmludGVyZmFjZSBFZGl0b3JQcm9wcyB7XG4gIG9uQ2hhbmdlOiAoYmxvY2tzOiBPdXRwdXREYXRhKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yOiBSZWFjdC5GQzxFZGl0b3JQcm9wcz4gPSAoeyBvbkNoYW5nZSB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWRpdG9yID0gbmV3IEVkaXRvckpTKHtcbiAgICAgIGhvbGRlcjogXCJlZGl0b3JcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcItCh0YLQsNGC0YzRjyDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgtGD0YJcIixcbiAgICAgIGFzeW5jIG9uQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCB7IGJsb2NrcyB9ID0gYXdhaXQgZWRpdG9yLnNhdmUoKTtcbiAgICAgICAgb25DaGFuZ2UoYmxvY2tzKTtcbiAgICAgIH0sXG4gICAgICB0b29sczoge1xuICAgICAgICBxdW90ZTogUXVvdGUsXG4gICAgICAgIGxpc3Q6IHtcbiAgICAgICAgICBjbGFzczogTGlzdCxcbiAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgZGVmYXVsdFN0eWxlOiBcInVub3JkZXJlZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFjaGVzOiB7XG4gICAgICAgICAgY2xhc3M6IEF0dGFjaGVzVG9vbCxcbiAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvdXBsb2FkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgY2xhc3M6IEhlYWRlcixcbiAgICAgICAgICBzaG9ydGN1dDogXCJDTUQrU0hJRlQrSFwiLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0VmFyaWFudDogVGV4dFZhcmlhbnRUdW5lLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGNsYXNzOiBJbWFnZVRvb2wsXG5cbiAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGVuZHBvaW50czoge1xuICAgICAgICAgICAgICBieUZpbGU6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL3VwbG9hZGAsIC8vIFlvdXIgYmFja2VuZCBmaWxlIHVwbG9hZGVyIGVuZHBvaW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICB0dW5lczogW1widGV4dFZhcmlhbnRcIl0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWRpdG9yLmlzUmVhZHlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGVkaXRvci5kZXN0cm95KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJFUlJPUiBlZGl0b3IgY2xlYW51cFwiLCBlKSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGRpdiBpZD1cImVkaXRvclwiIC8+O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkVkaXRvckpTIiwiTGlzdCIsIlF1b3RlIiwiVGV4dFZhcmlhbnRUdW5lIiwiQXR0YWNoZXNUb29sIiwiSW1hZ2VUb29sIiwiSGVhZGVyIiwiRWRpdG9yIiwib25DaGFuZ2UiLCJlZGl0b3IiLCJob2xkZXIiLCJwbGFjZWhvbGRlciIsImJsb2NrcyIsInNhdmUiLCJ0b29scyIsInF1b3RlIiwibGlzdCIsImNsYXNzIiwiaW5saW5lVG9vbGJhciIsImNvbmZpZyIsImRlZmF1bHRTdHlsZSIsImF0dGFjaGVzIiwiZW5kcG9pbnQiLCJoZWFkZXIiLCJzaG9ydGN1dCIsInRleHRWYXJpYW50IiwiaW1hZ2UiLCJlbmRwb2ludHMiLCJieUZpbGUiLCJ0dW5lcyIsImlzUmVhZHkiLCJ0aGVuIiwiZGVzdHJveSIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Editor/Editor.tsx\n"));

/***/ })

});