"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_hp_OneDrive_Desktop_QualityBuddy_my_editorjs_app_app_api_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/register/route.ts */ \"(rsc)/./app/api/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\Desktop\\\\QualityBuddy\\\\my-editorjs-app\\\\app\\\\api\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_hp_OneDrive_Desktop_QualityBuddy_my_editorjs_app_app_api_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNocCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1F1YWxpdHlCdWRkeSU1Q215LWVkaXRvcmpzLWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDaHAlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNRdWFsaXR5QnVkZHklNUNteS1lZGl0b3Jqcy1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkM7QUFDMUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1lZGl0b3Jqcy1hcHAvPzgyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcaHBcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxRdWFsaXR5QnVkZHlcXFxcbXktZWRpdG9yanMtYXBwXFxcXGFwcFxcXFxhcGlcXFxccmVnaXN0ZXJcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVnaXN0ZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlZ2lzdGVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcaHBcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxRdWFsaXR5QnVkZHlcXFxcbXktZWRpdG9yanMtYXBwXFxcXGFwcFxcXFxhcGlcXFxccmVnaXN0ZXJcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcmVnaXN0ZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/register/route.ts":
/*!***********************************!*\
  !*** ./app/api/register/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./utils/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nconst POST = async (request)=>{\n    const { email, password } = await request.json();\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n        email\n    });\n    if (existingUser) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(\"Email is already in use\", {\n            status: 400\n        });\n    }\n    const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 5);\n    const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        email,\n        password: hashedPassword\n    });\n    try {\n        await newUser.save();\n        return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(\"user is registered\", {\n            status: 200\n        });\n    } catch (err) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(err, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNBO0FBQ0g7QUFDYTtBQUVwQyxNQUFNSSxPQUFPLE9BQU9DO0lBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO0lBRTlDLE1BQU1QLHFEQUFPQTtJQUViLE1BQU1RLGVBQWUsTUFBTVQsb0RBQUlBLENBQUNVLE9BQU8sQ0FBQztRQUFFSjtJQUFNO0lBRWhELElBQUlHLGNBQWM7UUFDaEIsT0FBTyxJQUFJTixxREFBWUEsQ0FBQywyQkFBMkI7WUFBRVEsUUFBUTtRQUFJO0lBQ25FO0lBRUEsTUFBTUMsaUJBQWlCLE1BQU1WLG9EQUFXLENBQUNLLFVBQVU7SUFDbkQsTUFBTU8sVUFBVSxJQUFJZCxvREFBSUEsQ0FBQztRQUN2Qk07UUFDQUMsVUFBVUs7SUFDWjtJQUVBLElBQUk7UUFDRixNQUFNRSxRQUFRQyxJQUFJO1FBQ2xCLE9BQU8sSUFBSVoscURBQVlBLENBQUMsc0JBQXNCO1lBQUVRLFFBQVE7UUFBSTtJQUM5RCxFQUFFLE9BQU9LLEtBQVU7UUFDakIsT0FBTyxJQUFJYixxREFBWUEsQ0FBQ2EsS0FBSztZQUMzQkwsUUFBUTtRQUNWO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZWRpdG9yanMtYXBwLy4vYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS50cz9mNTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC91dGlscy9kYlwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXF1ZXN0OiBhbnkpID0+IHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gIGF3YWl0IGNvbm5lY3QoKTtcblxuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcblxuICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJFbWFpbCBpcyBhbHJlYWR5IGluIHVzZVwiLCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgNSk7XG4gIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7XG4gICAgZW1haWwsXG4gICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICB9KTtcblxuICB0cnkge1xuICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwidXNlciBpcyByZWdpc3RlcmVkXCIsIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoZXJyLCB7XG4gICAgICBzdGF0dXM6IDUwMCxcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJVc2VyIiwiY29ubmVjdCIsImJjcnlwdCIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsInNhdmUiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    password: {\n        type: String,\n        required: false\n    },\n    username: String,\n    profilePicture: String,\n    signature: String,\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    adminRequests: [\n        {\n            artifactId: {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Artifact\"\n            },\n            status: {\n                type: String,\n                enum: [\n                    \"pending\",\n                    \"accepted\",\n                    \"rejected\"\n                ],\n                default: \"pending\"\n            }\n        }\n    ]\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBQzNCLE1BQU1FLGFBQWEsSUFBSUQsT0FDckI7SUFDRUUsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxRQUFRO1FBQ1JDLFVBQVU7SUFDWjtJQUNBQyxVQUFVO1FBQ1JKLE1BQU1DO1FBQ05FLFVBQVU7SUFDWjtJQUNBRSxVQUFVSjtJQUNWSyxnQkFBZ0JMO0lBQ2hCTSxXQUFXTjtJQUNYTyxNQUFNO1FBQUVSLE1BQU1DO1FBQVFRLFNBQVM7SUFBTztJQUN0Q0MsZUFBZTtRQUNiO1lBQ0VDLFlBQVk7Z0JBQUVYLE1BQU1KLHdEQUFlLENBQUNnQixLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBVztZQUNwRUMsUUFBUTtnQkFDTmYsTUFBTUM7Z0JBQ05lLE1BQU07b0JBQUM7b0JBQVc7b0JBQVk7aUJBQVc7Z0JBQ3pDUCxTQUFTO1lBQ1g7UUFDRjtLQUNEO0FBQ0gsR0FDQTtJQUFFUSxZQUFZO0FBQUs7QUFHckIsaUVBQWVyQix3REFBZSxDQUFDdUIsSUFBSSxJQUFJdkIscURBQWMsQ0FBQyxRQUFRRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZWRpdG9yanMtYXBwLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB1c2VybmFtZTogU3RyaW5nLFxuICAgIHByb2ZpbGVQaWN0dXJlOiBTdHJpbmcsXG4gICAgc2lnbmF0dXJlOiBTdHJpbmcsXG4gICAgcm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd1c2VyJyB9LFxuICAgIGFkbWluUmVxdWVzdHM6IFtcbiAgICAgIHtcbiAgICAgICAgYXJ0aWZhY3RJZDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ0FydGlmYWN0JyB9LFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZW51bTogWydwZW5kaW5nJywgJ2FjY2VwdGVkJywgJ3JlamVjdGVkJ10sXG4gICAgICAgICAgZGVmYXVsdDogJ3BlbmRpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwidXNlcm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInNpZ25hdHVyZSIsInJvbGUiLCJkZWZhdWx0IiwiYWRtaW5SZXF1ZXN0cyIsImFydGlmYWN0SWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwic3RhdHVzIiwiZW51bSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) return;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Mongo Connection successfully established.\");\n    } catch (error) {\n        throw new Error(\"Error connecting to Mongoose\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVTtJQUNkLElBQUlELDZEQUFvQixDQUFDLEVBQUUsQ0FBQ0csVUFBVSxFQUFFO0lBRXhDLElBQUk7UUFDRixNQUFNSCx1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7WUFDNUNDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGO0FBRUEsaUVBQWVYLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1lZGl0b3Jqcy1hcHAvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHJldHVybjtcblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMLCB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJNb25nbyBDb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZC5cIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb29zZVwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Chp%5COneDrive%5CDesktop%5CQualityBuddy%5Cmy-editorjs-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();