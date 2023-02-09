"use strict";
(() => {
var exports = {};
exports.id = 49;
exports.ids = [49];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var _db_models_listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3492);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    const { method , headers: { authorization  }  } = req;
    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "POST" /* Post a listing */ :
            let token;
            if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
                token = authorization.substring(7);
            }
            if (!token) {
                return res.status(401).json({
                    error: "token missing"
                });
            }
            try {
                const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET_ADMIN);
                if (!decodedToken.id) {
                    return res.status(401).json({
                        error: "token invalid"
                    });
                }
                // const agent = await Agent.findById(id);
                // if (!agent) {
                //     return res.status(400).json({ success: false });
                // }
                const listing = new _db_models_listing__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                    ...req.body
                });
                await listing.save();
                // agent.listings = [...agent.listings, listing._id];
                // await agent.save();
                res.status(200).json({
                    success: true,
                    data: listing
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        // case 'DELETE' /* Delete a model by its ID */:
        //     try {
        //         const deletedPet = await Pet.deleteOne({ _id: id })
        //         if (!deletedPet) {
        //             return res.status(400).json({ success: false })
        //         }
        //         res.status(200).json({ success: true, data: {} })
        //     } catch (error) {
        //         res.status(400).json({ success: false })
        //     }
        //     break
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
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [401,492], () => (__webpack_exec__(6690)));
module.exports = __webpack_exports__;

})();