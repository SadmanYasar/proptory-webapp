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

/***/ 2333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    fullname: {
        type: String,
        required: true,
        minlength: 3
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        length: 13
    },
    role: {
        type: String,
        required: true,
        default: "USER"
    }
});
schema.set("toJSON", {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
        delete returnedObject.role;
    }
});
const Agent = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Agent || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Agent", schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agent);


/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var _db_models_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2333);
/* harmony import */ var _db_models_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3492);



async function handler(req, res) {
    const { query: { id  } , method  } = req;
    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "GET" /* Get a model by its ID */ :
            try {
                // const listing = await Listing.findById(id).populate('agent', { phone: 1 });
                const listing = await _db_models_listing__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(id);
                console.log(listing);
                const agent = await _db_models_agent__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
                    phone: listing.agentContact
                });
                console.log(agent);
                if (!listing) {
                    return res.status(404).json({
                        error: "Listing does not exist"
                    });
                }
                if (!agent) {
                    // return res.status(404).json({ error: 'Agent does not exist' });
                    return res.status(200).json({
                        data: {
                            listing
                        }
                    });
                }
                res.status(200).json({
                    data: {
                        listing,
                        agent: agent.id
                    }
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