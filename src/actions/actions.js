// export const ADD_COMMENT = 'ADD_COMMENT'
// export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const GET_USER = 'GET_USER'
export const FILTER_USER = 'FILTER_USER'

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
