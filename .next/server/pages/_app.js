(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8794);


function Notification() {
    const [{ notification  }, dispatch] = (0,_state__WEBPACK_IMPORTED_MODULE_1__/* .useStateValue */ .K1)();
    const clearNotification = ()=>{
        dispatch((0,_state__WEBPACK_IMPORTED_MODULE_1__/* .removeNotification */ .FV)());
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: notification.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: clearNotification,
            className: `w-full py-4 px-4 text-xl text-center break-words ${notification.type === "success" ? "bg-green-400" : "bg-red-400"}`,
            children: notification.message
        })
    });
}


/***/ }),

/***/ 1767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/logo_proptory/icon_only/color_with_background.jpg
/* harmony default export */ const color_with_background = ({"src":"/_next/static/media/color_with_background.142c709f.jpg","height":2400,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAwf/2gAMAwEAAhADEAAAAKEpX//EAB0QAAECBwAAAAAAAAAAAAAAABEAEgMTFBUlQpH/2gAIAQEAAT8AxlvLoM+nA2c09K//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAGxEAAQQDAAAAAAAAAAAAAAAAAgABBBIRIkH/2gAIAQMBAT8AjjW+xPkur//Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./state/index.ts + 2 modules
var state = __webpack_require__(8794);
// EXTERNAL MODULE: ./components/notification.tsx
var notification = __webpack_require__(925);
// EXTERNAL MODULE: ./utils/storage.ts
var storage = __webpack_require__(5838);
;// CONCATENATED MODULE: ./components/searchBar.tsx




function SearchBar() {
    const [{ searchVal  }, dispatch] = (0,state/* useStateValue */.K1)();
    const [search, setSearchVal] = (0,external_react_.useState)(searchVal);
    const router = (0,router_.useRouter)();
    const onChange = (e)=>{
        const value = e.target.value;
        setSearchVal(value);
    };
    const handleClick = ()=>{
        if (router.pathname !== "/listings") {
            router.push("/listings");
        }
        if (search.length < 5) {
            return dispatch((0,state/* setSearch */.qP)(""));
        }
        dispatch((0,state/* setSearch */.qP)(search.trim()));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row justify-around max-md:py-4 max-md:w-full md:w-6/12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-400 focus:ring-1 sm:text-sm text-slate-800",
                placeholder: "Search for listings",
                type: "text",
                name: "search",
                value: search,
                onChange: onChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleClick,
                className: "py-2 px-2 text-white bg-black rounded-r-xl",
                children: "Search"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/nav.tsx
/* eslint-disable @next/next/no-img-element */ 








const routesToFilter = [
    "/"
];
function Nav() {
    // const [user, loading, error] = useAuthState(auth);
    const [toggled, setToggled] = (0,external_react_.useState)(false);
    const [{ loggedIn  }, dispatch] = (0,state/* useStateValue */.K1)();
    (0,external_react_.useEffect)(()=>{
        if ((0,storage/* getFromStorage */.L2)("proptory-token") && (0,storage/* getFromStorage */.L2)("proptory-user")) {
            dispatch((0,state/* login */.x4)());
        } else {
            dispatch((0,state/* logout */.kS)());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const router = (0,router_.useRouter)();
    // hide nav on login screen
    if (routesToFilter.includes(router.asPath)) {
        return null;
    }
    const handleClick = ()=>{
        dispatch((0,state/* logout */.kS)());
        router.push("/");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-pink-650 w-full sticky top-0 z-40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "py-5 mx-14 text-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full max-md:hidden flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                referrerPolicy: "no-referrer",
                                className: "w-12 h-12",
                                src: color_with_background.src,
                                alt: "avatar",
                                onClick: ()=>{
                                    dispatch((0,state/* setSearch */.qP)(""));
                                    router.push("/listings");
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: handleClick,
                                className: !loggedIn ? "" : "hidden",
                                children: "Login as agent"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: loggedIn ? "flex flex-row space-x-4" : "hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>router.push(`/agents/${(0,storage/* getFromStorage */.L2)("proptory-user")}`),
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: handleClick,
                                        children: "Logout"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full md:hidden flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                referrerPolicy: "no-referrer",
                                className: "w-12 h-12",
                                src: color_with_background.src,
                                alt: "avatar",
                                onClick: ()=>router.push("/listings?page=1")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiMenuAlt3, {
                                className: "fill-white w-12 h-12",
                                onClick: ()=>setToggled(!toggled)
                            })
                        ]
                    }),
                    toggled && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full md:hidden flex flex-col justify-between space-y-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>router.push(`/agents/${(0,storage/* getFromStorage */.L2)("proptory-user")}`),
                                className: loggedIn ? "" : "hidden",
                                children: "Profile"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: handleClick,
                                className: !loggedIn ? "" : "hidden",
                                children: "Login as agent"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: handleClick,
                                className: loggedIn ? "" : "hidden",
                                children: "Logout"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(notification/* default */.Z, {})
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout.tsx


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col w-full h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "w-full h-screen",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(state/* StateProvider */.X9, {
        reducer: state/* reducer */.I6,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [794], () => (__webpack_exec__(1767)));
module.exports = __webpack_exports__;

})();