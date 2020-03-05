import { GET_USER, FILTER_USER } from '../actions/actionsTypes'

/* Our initial state with 3 default staff users */

const initialState = {
    staff: [
        {
            name: 'Steve Jobs',
            email: 'stevejobs@apple.com',
            picUrl: './images/pic-jobs.jpg',
            location: 'US'
        },
        {
            name: 'Pavel Durov',
            email: 'paveldurov@telegram.com',
            picUrl: './images/pic-durov.png',
            location: 'RU'        
        },
        {
            name: 'Oleg Tinkoff',
            email: 'olegtinkof@tinkoff.ru',
            picUrl: './images/pic-tinkov.jpg',
            location: 'RU'
        }
    ],
    isLoading: false,
    error: null
}

/* Reducer function */

export const rootReducer = (state = initialState, action) => {
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