import React, {useContext} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';
import IncomeItem from './IncomeItem';


export default function IncomeList() {

const {incomes} = useContext(FirebaseContext)

const sortByDate = (a,b) => {
    return a.date - b.date
}

    return (
        <div className='income-list'>
            {
                incomes.sort(sortByDate).map((income,index) =>(
                    <IncomeItem
                    key = {index}
                    income={income}
                    />
                ))
            }
        </div>
    )
}
