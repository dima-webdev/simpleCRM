import { GET_USER, FILTER_USER } from '../actions/actionsTypes'

/* Our initial state with 3 default staff users */

const initialState = {
    staff: [],
    isLoading: false,
    error: null
}

/* Reducer function */

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            let newState = {...state}
            let staff = [...newState.staff, action.newUser]
            return {...newState, staff}
        case FILTER_USER:
            return {
                ...state,
                filter: action.filter
            }
            default:
                return state
    }
}

export default rootReducer