import { State } from "./state"

type Notification = Pick<State, "message" | "type">
type Search = Pick<State, "searchVal">

export type Action =
    | {
        type: "SET_NOTIFICATION";
        payload: Notification;
    }
    | {
        type: "REMOVE_NOTIFICATION";
    }
    | {
        type: "SET_SEARCH";
        payload: Search;
    }

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_NOTIFICATION":
            return {
                ...state,
                ...action.payload
            }

        case "REMOVE_NOTIFICATION":
            return {
                ...state,
                message: '',
                type: 'success',
            }

        case "SET_SEARCH":
            return {
                ...state,
                searchVal: action.payload.searchVal
            }

        default:
            return state
    }
}

export const setNotification = (data: Notification): Action => {
    return {
        type: "SET_NOTIFICATION",
        payload: data,
    }
}

export const removeNotification = (): Action => {
    return {
        type: "REMOVE_NOTIFICATION",
    }
}

export const setSearch = (data: Search): Action => {
    return {
        type: "SET_SEARCH",
        payload: data,
    }
}