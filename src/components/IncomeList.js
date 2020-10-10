import React, {useContext} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';
import IncomeItem from './IncomeItem';


export default function IncomeList() {

const {incomes} = useContext(FirebaseContext)

    return (
        <div className='income-list'>
            {
                incomes.map((income,index) =>(
                    <IncomeItem
                    key = {index}
                    income={income}
                    />
                ))
            }
        </div>
    )
}
