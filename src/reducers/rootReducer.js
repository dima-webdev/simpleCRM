import { GET_USER, FILTER_USER } from '../actions/actionsTypes'

/* Our initial state with 3 default staff users */

const initialState = {
    staff: [
        {
            name: 'Steve Jobs',
            email: 'stevejobs@apple.com',
            picUrl: 'https://cms.qz.com/wp-content/uploads/2019/03/AP_070109057953.jpg?quality=75&strip=all&w=1400',
            location: 'US'
        },
        {
            name: 'Pavel Durov',
            email: 'paveldurov@telegram.com',
            picUrl: 'https://cdn5.vedomosti.ru/crop/image/2018/9/1elir3/original-1tkp.jpg?height=609&width=1082',
            location: 'RU'        
        },
        {
            name: 'Oleg Tinkoff',
            email: 'olegtinkof@tinkoff.ru',
            picUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Oleg_Tinkov_%28office%29.jpeg',
            location: 'RU'
        }
    ],
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