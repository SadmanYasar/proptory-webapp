import { State, User, Notification } from './state'

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
        type: 'SET_USER';
        payload: User;
    }
    | {
        type: 'REMOVE_USER';
    }

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {
                ...state,
                ...action.payload
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

        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'REMOVE_USER':
            return {
                ...state,
                user: null
            }

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

export const setUser = (data: User): Action => {
    return {
        type: 'SET_USER',
        payload: data,
    }
}

export const removeUser = (): Action => {
    return {
        type: 'REMOVE_USER',
    }
}