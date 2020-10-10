import React from 'react';
import FirebaseState from './components/context/firebase/FirebaseState';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';

function App() {
 
  return ( 
    <FirebaseState>
      <div className="App">
          <Header />
          <IncomeForm/>
      </div>
    </FirebaseState>
  );
}

export default App;
