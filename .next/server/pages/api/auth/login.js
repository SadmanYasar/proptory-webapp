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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connectDb.js":
/*!*************************!*\
  !*** ./db/connectDb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGO_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDb() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0RGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztBQUV6QyxJQUFJLENBQUNILGFBQWE7SUFDZCxNQUFNLElBQUlJLE1BQ04sd0VBQ0g7QUFDTCxDQUFDO0FBRUQ7Ozs7Q0FJQyxHQUNELElBQUlDLFNBQVNDLE9BQU9QLFFBQVE7QUFFNUIsSUFBSSxDQUFDTSxRQUFRO0lBQ1RBLFNBQVNDLE9BQU9QLFFBQVEsR0FBRztRQUFFUSxNQUFNLElBQUk7UUFBRUMsU0FBUyxJQUFJO0lBQUM7QUFDM0QsQ0FBQztBQUVELGVBQWVDLFlBQVk7SUFDdkIsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2IsT0FBT0YsT0FBT0UsSUFBSTtJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDakIsTUFBTUUsT0FBTztZQUNUQyxnQkFBZ0IsS0FBSztRQUN6QjtRQUVBTixPQUFPRyxPQUFPLEdBQUdULHVEQUFnQixDQUFDQyxhQUFhVSxNQUFNRyxJQUFJLENBQUMsQ0FBQ2QsV0FBYTtZQUNwRSxPQUFPQTtRQUNYO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDQU0sT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDdEMsRUFBRSxPQUFPTSxHQUFHO1FBQ1JULE9BQU9HLE9BQU8sR0FBRyxJQUFJO1FBQ3JCLE1BQU1NLEVBQUM7SUFDWDtJQUVBLE9BQU9ULE9BQU9FLElBQUk7QUFDdEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3B0b3J5LXdlYmFwcC8uL2RiL2Nvbm5lY3REYi5qcz81ZjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gICAgKVxufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxuXG5pZiAoIWNhY2hlZCkge1xuICAgIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYigpIHtcbiAgICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZC5jb25uXG4gICAgfVxuXG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgICAgICB9XG5cbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBudWxsXG4gICAgICAgIHRocm93IGVcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REYiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/connectDb.js\n");

/***/ }),

/***/ "(api)/./db/models/agent.ts":
/*!****************************!*\
  !*** ./db/models/agent.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n        minlength: 3\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: 5\n    },\n    fullname: {\n        type: String,\n        required: true,\n        minlength: 3\n    },\n    phone: {\n        type: String,\n        required: true,\n        unique: true,\n        length: 13\n    },\n    role: {\n        type: String,\n        required: true,\n        default: \"USER\"\n    }\n});\nschema.set(\"toJSON\", {\n    transform: (document, returnedObject)=>{\n        returnedObject.id = returnedObject._id.toString();\n        delete returnedObject._id;\n        delete returnedObject.__v;\n        delete returnedObject.password;\n        delete returnedObject.role;\n    }\n});\nconst Agent = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Agent || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Agent\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvYWdlbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLFNBQVMsSUFBSUQsNENBQU1BLENBQUM7SUFDdEJFLFVBQVU7UUFDTkMsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFFBQVEsSUFBSTtRQUNaQyxXQUFXO0lBQ2Y7SUFDQUMsVUFBVTtRQUNOTCxNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEUsV0FBVztJQUNmO0lBQ0FFLFVBQVU7UUFDTk4sTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RFLFdBQVc7SUFDZjtJQUNBRyxPQUFPO1FBQ0hQLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxRQUFRLElBQUk7UUFDWkssUUFBUTtJQUNaO0lBQ0FDLE1BQU07UUFDRlQsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RRLFNBQVM7SUFDYjtBQU9KO0FBRUFaLE9BQU9hLEdBQUcsQ0FBQyxVQUFVO0lBQ2pCQyxXQUFXLENBQUNDLFVBQVVDLGlCQUFtQjtRQUNyQ0EsZUFBZUMsRUFBRSxHQUFHRCxlQUFlRSxHQUFHLENBQUNDLFFBQVE7UUFDL0MsT0FBT0gsZUFBZUUsR0FBRztRQUN6QixPQUFPRixlQUFlSSxHQUFHO1FBQ3pCLE9BQU9KLGVBQWVULFFBQVE7UUFDOUIsT0FBT1MsZUFBZUwsSUFBSTtJQUM5QjtBQUNKO0FBRUEsTUFBTVUsUUFBUXZCLGtEQUFZLElBQUlELCtDQUFLQSxDQUFDLFNBQVNHO0FBRTdDLGlFQUFlcUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3B0b3J5LXdlYmFwcC8uL2RiL21vZGVscy9hZ2VudC50cz80ZDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsLCBtb2RlbHMsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIG1pbmxlbmd0aDogM1xuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgbWlubGVuZ3RoOiA1XG4gICAgfSxcbiAgICBmdWxsbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBtaW5sZW5ndGg6IDNcbiAgICB9LFxuICAgIHBob25lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgbGVuZ3RoOiAxM1xuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnVVNFUidcbiAgICB9LFxuICAgIC8vIGxpc3RpbmdzOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAvLyAgICAgICAgIHJlZjogJ0xpc3RpbmcnXG4gICAgLy8gICAgIH1cbiAgICAvLyBdXG59KTtcblxuc2NoZW1hLnNldCgndG9KU09OJywge1xuICAgIHRyYW5zZm9ybTogKGRvY3VtZW50LCByZXR1cm5lZE9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm5lZE9iamVjdC5pZCA9IHJldHVybmVkT2JqZWN0Ll9pZC50b1N0cmluZygpO1xuICAgICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QuX2lkO1xuICAgICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QuX192O1xuICAgICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QucGFzc3dvcmQ7XG4gICAgICAgIGRlbGV0ZSByZXR1cm5lZE9iamVjdC5yb2xlO1xuICAgIH0sXG59KTtcblxuY29uc3QgQWdlbnQgPSBtb2RlbHMuQWdlbnQgfHwgbW9kZWwoJ0FnZW50Jywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgQWdlbnQ7Il0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwic2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJtaW5sZW5ndGgiLCJwYXNzd29yZCIsImZ1bGxuYW1lIiwicGhvbmUiLCJsZW5ndGgiLCJyb2xlIiwiZGVmYXVsdCIsInNldCIsInRyYW5zZm9ybSIsImRvY3VtZW50IiwicmV0dXJuZWRPYmplY3QiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiX192IiwiQWdlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/agent.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/connectDb */ \"(api)/./db/connectDb.js\");\n/* harmony import */ var _db_models_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/agent */ \"(api)/./db/models/agent.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function handler(req, res) {\n    const { username , password  } = req.body;\n    const { method  } = req;\n    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const foundAgent = await _db_models_agent__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        username\n    });\n    const passwordMatch = foundAgent === null ? false : await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, foundAgent.password);\n    if (!foundAgent || !passwordMatch) {\n        return res.status(400).json({\n            error: \"Wrong credentials\"\n        });\n    }\n    const agentForToken = {\n        username: foundAgent.username,\n        id: foundAgent._id\n    };\n    res.status(200).json({\n        id: foundAgent._id,\n        value: jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(agentForToken, process.env.JWT_SECRET, {\n            expiresIn: \"7d\"\n        })\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ0Q7QUFFVjtBQUNHO0FBRWhCLGVBQWVJLFFBQzFCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDdEI7SUFDRSxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdILElBQUlJLElBQUk7SUFDdkMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0w7SUFDbkIsTUFBTUwseURBQVNBO0lBRWYsTUFBTVcsYUFBYSxNQUFNVixnRUFBYSxDQUFDO1FBQUVNO0lBQVM7SUFFbEQsTUFBTU0sZ0JBQWdCRixlQUFlLElBQUksR0FDbkMsS0FBSyxHQUNMLE1BQU1ULHFEQUFjLENBQUNNLFVBQVVHLFdBQVdILFFBQVEsQ0FBQztJQUV6RCxJQUFJLENBQUNHLGNBQWMsQ0FBQ0UsZUFBZTtRQUMvQixPQUFPUCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBb0I7SUFDN0QsQ0FBQztJQUVELE1BQU1DLGdCQUFnQjtRQUNsQlgsVUFBVUksV0FBV0osUUFBUTtRQUM3QlksSUFBSVIsV0FBV1MsR0FBRztJQUN0QjtJQUVBZCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVHLElBQUlSLFdBQVdTLEdBQUc7UUFBRUMsT0FBT2xCLHdEQUFRLENBQUNlLGVBQWVLLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFHO1lBQUVDLFdBQVc7UUFBSztJQUFHO0FBQzVILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9wdG9yeS13ZWJhcHAvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cz83NDRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0RGIgZnJvbSAnQC9kYi9jb25uZWN0RGInO1xuaW1wb3J0IEFnZW50IGZyb20gJ0AvZGIvbW9kZWxzL2FnZW50JztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICAgIGF3YWl0IGNvbm5lY3REYigpO1xuXG4gICAgY29uc3QgZm91bmRBZ2VudCA9IGF3YWl0IEFnZW50LmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcblxuICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBmb3VuZEFnZW50ID09PSBudWxsXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgZm91bmRBZ2VudC5wYXNzd29yZCk7XG5cbiAgICBpZiAoIWZvdW5kQWdlbnQgfHwgIXBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdXcm9uZyBjcmVkZW50aWFscycgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWdlbnRGb3JUb2tlbiA9IHtcbiAgICAgICAgdXNlcm5hbWU6IGZvdW5kQWdlbnQudXNlcm5hbWUsXG4gICAgICAgIGlkOiBmb3VuZEFnZW50Ll9pZCxcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkOiBmb3VuZEFnZW50Ll9pZCwgdmFsdWU6IGp3dC5zaWduKGFnZW50Rm9yVG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhLCB7IGV4cGlyZXNJbjogXCI3ZFwiIH0pIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3REYiIsIkFnZW50IiwiYmNyeXB0Iiwiand0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwibWV0aG9kIiwiZm91bmRBZ2VudCIsImZpbmRPbmUiLCJwYXNzd29yZE1hdGNoIiwiY29tcGFyZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImFnZW50Rm9yVG9rZW4iLCJpZCIsIl9pZCIsInZhbHVlIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.ts"));
module.exports = __webpack_exports__;

})();