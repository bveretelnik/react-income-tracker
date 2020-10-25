import Axios from 'axios'
import React, {useReducer} from 'react'
import { ADD_INCOME, FETCH_INCOME, REMOVE_INCOME, SHOW_LOADER } from '../types'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'

const url = 'https://react-income-tracker.firebaseio.com'


export default function FirebaseState({children}) {

const initialState = {
    incomes: [],
    loading:false
}

const [state, dispatch] = useReducer(firebaseReducer, initialState)

const showLoader = () => dispatch({type:SHOW_LOADER})

const fetchIncomes = async () => {
    showLoader()
    const res = await Axios.get(`${url}/incomes.json`)
    const payload = Object.keys(res.data).map(key =>{
        return {
            ...res.data[key],
            id:key
        }
    })

    let incomes = Object.values(payload);

    incomes = incomes.sort((prev, current) => {
        if(prev.date < current.date) {
            return -1;
        } else if (prev.date > current.date) {
            return 1;

        } else {
            return 0;

        }
    })

    dispatch({
        type:FETCH_INCOME,
        payload: incomes
    })
}

const addIncom = async (desc,price,date) => {

    const income = {
        desc,
        price,
        date

    }
    try {
        const res = await Axios.post(`${url}/incomes.json`, income)
        const payload = {
            ...income,
            id:res.data.name
        }
        console.log('addIncome',res.data);
        dispatch({
            type:ADD_INCOME,
            payload
        })
    } catch (error) {
        console.log(error);
    }
}

const removeIncome = async id => {
    await Axios.delete(`${url}/incomes/${id}.json`)
    dispatch({
        type:REMOVE_INCOME,
        payload:id
    })
}

    return (
        <FirebaseContext.Provider value = {{
            showLoader, fetchIncomes, addIncom, removeIncome,
            loading:state.loading,
            incomes: state.incomes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
