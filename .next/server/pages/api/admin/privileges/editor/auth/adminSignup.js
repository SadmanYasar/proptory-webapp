"use strict";
(() => {
var exports = {};
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4652:
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
    role: {
        type: String,
        required: true,
        default: "ADMIN"
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
const Admin = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Admin || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Admin", schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);


/***/ }),

/***/ 1782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4652);
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);



async function handler(req, res) {
    const { username , password  } = req.body;
    const { method  } = req;
    const saltRounds = 10;
    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    switch(method){
        case "POST":
            try {
                const admin = await _db_models_admin__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({});
                if (admin.length === 0) {
                    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, saltRounds);
                    const newAdmin = new _db_models_admin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                        username,
                        password: passwordHash,
                        role: "ADMIN"
                    });
                    await newAdmin.save();
                    return res.status(200).send({
                        message: "Created"
                    });
                } else {
                    throw new Error("Unauthorized");
                }
            } catch (error) {
                res.status(401).json({
                    message: "Unauthorized"
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
var __webpack_require__ = require("../../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [401], () => (__webpack_exec__(1782)));
module.exports = __webpack_exports__;

})();