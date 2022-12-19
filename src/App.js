import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [balance,setBalance] = useState(0)
  const [expenses, setExpenses] = useState([
    // {amount:30, description:"food"},
    // {amount:30, description:"food"}
  ])
  function addNewExpenses(amount,description){
    let newId
    if(expenses.length > 0){
      newId = expenses[expenses.length - 1].id + 1
    }else {
      newId = 1
    }
    
    const updatedExpenses = expenses.concat({amount:amount,description:description})
    setExpenses(updatedExpenses)
    setBalance(balance + Number(amount))

  }
  function deleteExpenses(id, amount){
    const updatedExpenses = expenses.filter((expense) => expense.id !==id)
    setExpenses(updatedExpenses)
    setBalance(balance - Number(amount))
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={balance}/>
          <Add handleonclick={addNewExpenses}/>
          {expenses.map((expense)=> <Expenses  data={expense} handleDelete={() => deleteExpenses(expense.id, expense.amount)} />)}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
