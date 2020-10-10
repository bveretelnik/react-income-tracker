import React,{useState,useEffect,useContext} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext'

export default function Header() {

    const [totalIncome, setTotalIncome] = useState(0)
    const {incomes} = useContext(FirebaseContext)


    useEffect(() => {
        let temp = 0
        for(let i =0; i<incomes.length;i++){
          temp +=parseInt(incomes[i].price)
        }
        setTotalIncome(temp)
      }, [incomes])
    return (
        <header>
            <h1>Income Tracker</h1>
            <div className='total-income'>{totalIncome}₴</div>
        </header>
    )
}