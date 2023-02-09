"use strict";
(() => {
var exports = {};
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5837:
/***/ ((module) => {

module.exports = import("escape-string-regexp");;

/***/ }),

/***/ 6471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var _db_models_listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3492);
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([escape_string_regexp__WEBPACK_IMPORTED_MODULE_2__]);
escape_string_regexp__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ITEMS_PER_PAGE = 20;
async function handler(req, res) {
    const page = req.query.page || 1;
    const search = req.query.search || "";
    const $regex = (0,escape_string_regexp__WEBPACK_IMPORTED_MODULE_2__["default"])(search.toString());
    // Put all your query params in here
    let query;
    if (search && search.length > 5) {
        query = {
            name: {
                $regex
            }
        };
    } else {
        query = {};
    }
    try {
        await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const skip = (Number(page) - 1) * ITEMS_PER_PAGE; // 1 * 20 = 20
        const countPromise = _db_models_listing__WEBPACK_IMPORTED_MODULE_1__/* ["default"].estimatedDocumentCount */ .Z.estimatedDocumentCount(query);
        const itemsPromise = _db_models_listing__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find(query).limit(ITEMS_PER_PAGE).skip(skip);
        const [count, items] = await Promise.all([
            countPromise,
            itemsPromise
        ]);
        const pageCount = Math.ceil(count / ITEMS_PER_PAGE); // 400 items / 20 = 20
        res.status(200).json({
            pagination: {
                count,
                pageCount
            },
            items
        });
    } catch (e) {
        console.error(e);
        res.status(400).json({
            e
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [401,492], () => (__webpack_exec__(6471)));
module.exports = __webpack_exports__;

})();