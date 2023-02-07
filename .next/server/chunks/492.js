"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 3492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    agent: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "Agent"
    },
    matterportId: {
        type: String,
        required: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    address: {
        type: String,
        required: true,
        minlength: 10
    },
    bathrooms: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
schema.set("toJSON", {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Listing = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Listing || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Listing", schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listing);


/***/ })

};
;