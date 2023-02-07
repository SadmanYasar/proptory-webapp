"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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
    listings: [
        {
            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
            ref: "Listing"
        }
    ]
});
schema.set("toJSON", {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    }
});
const Agent = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Agent || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Agent", schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agent);


/***/ }),

/***/ 4398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var _db_models_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2333);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    const { username , password  } = req.body;
    const { method  } = req;
    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const foundAgent = await _db_models_agent__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
        username
    });
    const passwordMatch = foundAgent === null ? false : await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, foundAgent.password);
    if (!foundAgent || !passwordMatch) {
        return res.status(400).json({
            error: "Wrong credentials"
        });
    }
    const agentForToken = {
        username: foundAgent.username,
        id: foundAgent._id
    };
    res.status(200).json({
        id: foundAgent._id,
        value: jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(agentForToken, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [401], () => (__webpack_exec__(4398)));
module.exports = __webpack_exports__;

})();