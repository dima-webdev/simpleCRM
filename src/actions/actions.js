import { GET_USER, FILTER_USER } from './actions/actionsTypes'

/* Action function to get users from API function */
export function getUser(newUser) {
    return {
        type: 'GET_USER',
        newUser
    }
}

/**
 * Action function to filter data
 */

export function filterUser(text) {
    return {
        type: 'FILTER_USER',
        text
    }
}
