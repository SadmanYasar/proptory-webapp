import { removeFromStorage } from '@/utils/storage';
import { State, Notification } from './state'

// type Notification = Pick<State, 'message' | 'type'>
// type Search = Pick<State, 'searchVal'>

export type Action =
    | {
        type: 'SET_NOTIFICATION';
        payload: Notification;
    }
    | {
        type: 'REMOVE_NOTIFICATION';
    }
    | {
        type: 'SET_SEARCH';
        payload: string;
    }
    | {
        type: 'LOGIN';
    }
    | {
        type: 'LOGOUT';
    }

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {
                ...state,
                notification: { ...action.payload }
            }

        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                notification: { message: '', type: 'success' }
            }

        case 'SET_SEARCH':
            return {
                ...state,
                searchVal: action.payload
            }

        case 'LOGIN':
            return {
                ...state,
                loggedIn: true
            }

        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false
            }

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
            return state
    }
}

export const setNotification = (data: Notification): Action => {
    return {
        type: 'SET_NOTIFICATION',
        payload: data,
    }
}

export const removeNotification = (): Action => {
    return {
        type: 'REMOVE_NOTIFICATION',
    }
}

export const setSearch = (data: string): Action => {
    return {
        type: 'SET_SEARCH',
        payload: data,
    }
}

export const login = (): Action => {
    return {
        type: 'LOGIN',
    }
}

export const logout = (): Action => {
    removeFromStorage('proptory-token');
    removeFromStorage('proptory-user');
    return {
        type: 'LOGOUT',
    }
}