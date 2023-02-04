import React, { createContext, useContext, useReducer } from 'react'

import { Action } from './reducer'

export type NotificationType = 'warning' | 'error' | 'success' | 'info'
export type Notification = {
    message: string | null,
    type: NotificationType
}

// export type User = {
//     userName: String;
//     name: String;
//     token: String;
// }

export type State = {
    notification: Notification
    searchVal: string;
    loggedIn: boolean;
}

const initialState: State = {
    notification: {
        message: '',
        type: 'success',
    },
    searchVal: '',
    loggedIn: false,
}

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
    initialState,
    () => initialState
])

type StateProviderProps = {
    reducer: React.Reducer<State, Action>;
    children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
    reducer,
    children
}: StateProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Important(!): memoize array value. Else all context consumers update on *every* render
    // const store = React.useMemo(() => [state, dispatch], [state]);
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext);