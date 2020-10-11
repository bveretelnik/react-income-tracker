import React, {useReducer} from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'

export default function AlertState({children}) {

const [state, dispatch] = useReducer(alertReducer, {visible:false})

    const show = () => {
        dispatch({type:SHOW_ALERT})
    }
    const hide = () => {
        dispatch({type:HIDE_ALERT})
    }

    return (
     <AlertContext.Provider value={{
         show, hide,
         alert:state
     }}>
         {children}
     </AlertContext.Provider>
    )
}
