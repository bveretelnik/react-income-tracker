import React from 'react';
import AlertState from './components/context/alert/AlertState';
import FirebaseState from './components/context/firebase/FirebaseState';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';

function App() {
 
  return ( 
    <FirebaseState>
      <AlertState>
        <div className="App">
            <Header />
            <IncomeForm/>
        </div>
        </AlertState>
    </FirebaseState>
  );
}

export default App;
