import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import react, { useState } from "react"

function App() {
  const [balance, setBalance] = useState()
  let [expenses, setExpenses] = useState([


  ]);

  //adding expenses function
  function addNewExpenses(amountHolder, descriptionHolder) {
    const newId = expenses.length < 1 ? 1 : expenses[expenses.length - 1].id + 1
    const updatedExpenses = expenses.concat({ id: newId, amount: amountHolder, discription: descriptionHolder })
    setExpenses(updatedExpenses)
    console.log(updatedExpenses)
    setBalance(balance == null ? parseInt(amountHolder) : balance + parseInt(amountHolder))

  }

  //removing function 
  function removeExpenses(idHolder, amountHolder) {

    const newUpdate = expenses.filter((e) => e.id !== idHolder)
    setExpenses(newUpdate)
    expenses.map((a) => a.amount === amountHolder)
    setBalance(balance - amountHolder)

  }


  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={balance} />

          <Add test={addNewExpenses} />

          {expenses.map((expenses) =>
            <Expenses data={expenses}
              handleOnDelete={removeExpenses}
            />)}

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
