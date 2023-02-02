import { State } from "../state"

export type Notification = Pick<State, "message" | "type">
export type NotificationAction =
    | {
        type: "SET_NOTIFICATION";
        payload: Notification;
    }
    | {
        type: "REMOVE_NOTIFICATION";
    }

export const NotificationReducer = (state: Notification, action: NotificationAction): Notification => {
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

        default:
            return state
    }
}

export const setNotification = (data: Notification): NotificationAction => {
    return {
        type: "SET_NOTIFICATION",
        payload: data,
    }
}

export const removeNotification = (): NotificationAction => {
    return {
        type: "REMOVE_NOTIFICATION",
    }
}