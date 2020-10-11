import React, {useState,useContext, Fragment,useEffect} from 'react'
import { FirebaseContext } from './context/firebase/firebaseContext';
import Loader from './Loader'
import IncomeList from './IncomeList'
import { AlertContext } from './context/alert/alertContext';
import Alert from './Alert'

export default function IncomeForm() {
    
    const {addIncom,incomes,fetchIncomes, loading} = useContext(FirebaseContext)

    const {show,hide,alert} = useContext(AlertContext)

    const [desc,stateDesc] = useState('');
    const [date,stateDate] = useState('');
    const [price,statePrice] = useState('');


    const AddIncome = e => {
        e.preventDefault()
        
        addIncom(desc,price,date)

        console.log(incomes);

        show()

        setTimeout(() => {
            hide()
        }, 1000);

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
                {alert.visible
                ?<Alert/>
                : ''}
            {loading
            ? <Loader/>
            : <IncomeList/>
            }
        </Fragment>
    )
}
