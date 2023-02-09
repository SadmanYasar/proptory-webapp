"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 8794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X9": () => (/* reexport */ StateProvider),
  "x4": () => (/* reexport */ login),
  "kS": () => (/* reexport */ logout),
  "I6": () => (/* reexport */ reducer),
  "FV": () => (/* reexport */ removeNotification),
  "sc": () => (/* reexport */ setNotification),
  "qP": () => (/* reexport */ setSearch),
  "K1": () => (/* reexport */ useStateValue)
});

// UNUSED EXPORTS: StateContext

// EXTERNAL MODULE: ./utils/storage.ts
var storage = __webpack_require__(5838);
;// CONCATENATED MODULE: ./state/reducer.ts

const reducer = (state, action)=>{
    switch(action.type){
        case "SET_NOTIFICATION":
            return {
                ...state,
                notification: {
                    ...action.payload
                }
            };
        case "REMOVE_NOTIFICATION":
            return {
                ...state,
                notification: {
                    message: "",
                    type: "success"
                }
            };
        case "SET_SEARCH":
            return {
                ...state,
                searchVal: action.payload
            };
        case "LOGIN":
            return {
                ...state,
                loggedIn: true
            };
        case "LOGOUT":
            return {
                ...state,
                loggedIn: false
            };
        // case 'SET_TOKEN':
        //     return {
        //         ...state,
        //         token: action.payload
        //     }
        // case 'REMOVE_TOKEN':
        //     return {
        //         ...state,
        //         token: null
        //     }
        default:
            return state;
    }
};
const setNotification = (data)=>{
    return {
        type: "SET_NOTIFICATION",
        payload: data
    };
};
const removeNotification = ()=>{
    return {
        type: "REMOVE_NOTIFICATION"
    };
};
const setSearch = (data)=>{
    return {
        type: "SET_SEARCH",
        payload: data
    };
};
const login = ()=>{
    return {
        type: "LOGIN"
    };
};
const logout = ()=>{
    (0,storage/* removeFromStorage */.KR)("proptory-token");
    (0,storage/* removeFromStorage */.KR)("proptory-user");
    return {
        type: "LOGOUT"
    };
};

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./state/state.tsx


const initialState = {
    notification: {
        message: "",
        type: "success"
    },
    searchVal: "",
    loggedIn: false
};
const StateContext = /*#__PURE__*/ (0,external_react_.createContext)([
    initialState,
    ()=>initialState
]);
const StateProvider = ({ reducer , children  })=>{
    const [state, dispatch] = (0,external_react_.useReducer)(reducer, initialState);
    // Important(!): memoize array value. Else all context consumers update on *every* render
    // const store = React.useMemo(() => [state, dispatch], [state]);
    return /*#__PURE__*/ jsx_runtime_.jsx(StateContext.Provider, {
        value: [
            state,
            dispatch
        ],
        children: children
    });
};
const useStateValue = ()=>(0,external_react_.useContext)(StateContext);

;// CONCATENATED MODULE: ./state/index.ts




/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KR": () => (/* binding */ removeFromStorage),
/* harmony export */   "L2": () => (/* binding */ getFromStorage),
/* harmony export */   "po": () => (/* binding */ setStorage)
/* harmony export */ });
const getFromStorage = (key)=>{
    if (false) {}
};
const setStorage = (key, value)=>{
    if (false) {}
};
const removeFromStorage = (key)=>{
    if (false) {}
};


/***/ })

};
;