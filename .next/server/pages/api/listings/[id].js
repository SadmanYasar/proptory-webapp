"use strict";
(() => {
var exports = {};
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var _db_models_listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3492);


async function handler(req, res) {
    const { query: { id  } , method  } = req;
    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "GET" /* Get a model by its ID */ :
            try {
                const listing = await _db_models_listing__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id).populate("agent", {
                    phone: 1
                });
                if (!listing) {
                    return res.status(404).json({
                        error: "Listing does not exist"
                    });
                }
                res.status(200).json({
                    data: listing
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        default:
            res.status(400).json({
                success: false
            });
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [401,492], () => (__webpack_exec__(663)));
module.exports = __webpack_exports__;

})();