import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App(props) {
  const [balance,setBalance] = useState(67)
  const [expenses,setExpenses] = useState([
    {id:1 ,amount:76 ,description:"food"},
    {id:2 ,amount:45,description:" internet bill"}
  ])


  function newExpenses(Amount,Description){
    let newId
    if(expenses.length > 0){
      newId = expenses[expenses.length - 1].id + 1
    }else {
      newId = 1
    }
  const updatedExpenses = expenses.concat({id:newId,amount:Amount ,description:Description})
    setExpenses(updatedExpenses)
    setBalance(parseInt(balance)+parseInt(Amount))
 
  }
 

  function removeHandle(id,amount){

    const newExpensesList = expenses.filter((rmExpenses)=> rmExpenses.id !== id ) 
    setExpenses(newExpensesList)
     expenses.map((rmExpenses)=> rmExpenses.amount === parseInt(amount) )
      setBalance(balance - amount)

    }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance balance={balance}/>
          <Add handleOnClick={newExpenses} />
         {expenses.map((expenses)=>  <Expenses data={expenses}  remove={removeHandle}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
