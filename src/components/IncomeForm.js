import React, {useState,useContext, Fragment,useEffect} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';
import Loader from './Loader'
import IncomeList from './IncomeList'

export default function IncomeForm() {
    
    const {addIncom,incomes,fetchIncomes, loading} = useContext(FirebaseContext)

    const [desc,stateDesc] = useState('');
    const [date,stateDate] = useState('');
    const [price,statePrice] = useState('');


    const AddIncome = e => {
        e.preventDefault()

        // let d = date.current.value.split('-')
        // let newD = new Date(d[0],d[1]-1,d[2])
        
        addIncom(desc,price,date)

        console.log(incomes);
        stateDesc('')
        stateDate('')
        statePrice('') 
    }
    useEffect(() => {
        fetchIncomes()
        // eslint-disable-next-line
      }, [])
      

    return (
        <Fragment>
        <form className='income-form' onSubmit={AddIncome}>
            <div className='form-inner'>
                <input type="text" name="desc" id="desc" placeholder="Income Description..." value={desc} onChange={e=>stateDesc(e.target.value)}/> 
                <input type="number" name="price" id="price" placeholder="Price..." value={price} onChange={e=>statePrice(e.target.value)}/>
                <input type="date" name="date" id="date" placeholder="Income date..." value={date} onChange={e=>stateDate(e.target.value)}/>
                <input type="submit" value="Add Income" />
            </div>
        </form>
            {loading
            ? <Loader/>
            : <IncomeList/>
            }
        </Fragment>
    )
}
