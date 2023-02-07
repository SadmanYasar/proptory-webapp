"use strict";
(() => {
var exports = {};
exports.id = 429;
exports.ids = [429];
exports.modules = {

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

/***/ 6110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var _db_models_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2333);
/* harmony import */ var _db_models_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3492);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    const { query: { id  } , method , headers: { authorization  }  } = req;
    await (0,_db_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "GET" /* Get agent by its ID */ :
            try {
                const agent = await _db_models_agent__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id).populate("listings", {
                    name: 1,
                    description: 1,
                    address: 1,
                    bathrooms: 1,
                    bedrooms: 1,
                    price: 1
                });
                if (!agent) {
                    return res.status(400).json({
                        success: false
                    });
                }
                res.status(200).json({
                    success: true,
                    data: agent
                });
            } catch (error) {
                res.status(400).json({
                    error
                });
            }
            break;
        case "POST" /* Post a model by its ID */ :
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
                const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(token, process.env.JWT_SECRET);
                if (!decodedToken.id) {
                    return res.status(401).json({
                        error: "token invalid"
                    });
                }
                const agent = await _db_models_agent__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
                if (!agent) {
                    return res.status(400).json({
                        success: false
                    });
                }
                const listing = new _db_models_listing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
                    ...req.body,
                    agent: id
                });
                await listing.save();
                agent.listings = [
                    ...agent.listings,
                    listing._id
                ];
                await agent.save();
                res.status(200).json({
                    success: true,
                    data: listing
                });
            } catch (error) {
                if (error?.message === "jwt expired") {
                    return res.status(400).json({
                        error: "token expired"
                    });
                }
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [401,492], () => (__webpack_exec__(6110)));
module.exports = __webpack_exports__;

})();