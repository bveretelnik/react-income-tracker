import React, {useContext} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';

export default function IncomeItem({income}) {
const {removeIncome} = useContext(FirebaseContext)



    return (
        <div className='income-item'>
            <button className="remove-item" onClick={()=>removeIncome(income.id)}>x</button>
            <div className="desc">{income.desc}</div>
            <div className="price">{income.price}₴</div>  
            <div className="date">{income.date}</div>              
        </div>
    )
}
