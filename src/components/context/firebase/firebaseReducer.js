import {SHOW_LOADER,ADD_INCOME,FETCH_INCOME,REMOVE_INCOME} from '../types'

const handlers = {
    [SHOW_LOADER]: state => ({...state,loading:true}),
    [ADD_INCOME]: (state,{payload}) => ({
        ...state,
        incomes:[...state.incomes,payload]
    }),
    [FETCH_INCOME]: (state,{payload})=> ({...state, incomes:payload,loading:false}),
    [REMOVE_INCOME]: (state,{payload}) => ({
        ...state,
        incomes: state.incomes.filter(income => income.id !== payload)
    }),
    DEFAULT: state => state
}

export const firebaseReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}