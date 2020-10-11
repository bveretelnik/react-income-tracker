import React, {useContext} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';


export default function IncomeList() {

const {incomes, removeIncome} = useContext(FirebaseContext)

// const sortByDate = (a, b) => {
//     return a.date - b.date;
//   }
    return (
        <div className='income-list'>
            {
            incomes.map((income,index) =>(
                <div className='income-item' key={index}>
                    <button className="remove-item" onClick={()=>removeIncome(income.id)}>x</button>
                    <div className="desc">{income.desc}</div>
                    <div className="price">{income.price} ₴</div>  
                    <div className="date">{income.date}</div>              
                </div>
            ))
            }
        </div>
    )
}
