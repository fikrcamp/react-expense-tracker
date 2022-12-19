import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import {useState} from 'react';

function App() {
 let ID;
   const [expenses,setExpenses] = useState([])
  const [balance,setBalance] = useState(0)
  

 function handleClick(am,descrip){

  if(expenses.length > 0){
  ID = expenses[expenses.length - 1].id + 1}
    else{
      ID = 1;
  }
  const newE = expenses.concat({id:ID,amount:am,description:descrip})
  setExpenses(newE)
  setBalance(balance + Number(am))
  

}

function RemoveEx(id,amount){
  const newL = expenses.filter((ex)=> ex.id !== id ) 
  setExpenses(newL)
   expenses.map((ex)=> ex.amount === Number(amount) )
    setBalance(balance - amount)

  

  }
   
   
   
   







 
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total = {balance}/>
          <Add addNew={handleClick}/>
          {expenses.map((expense)=> <Expenses  data={expense}  remove={RemoveEx}/>)}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
