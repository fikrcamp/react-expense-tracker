import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App(props) {
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 200, description: "food" },
    { id: 2, amount: 250, description: "rent" },
    { id: 3, amount: 50, description: "gym" },
    { id: 4, amount: 60, description: "electricity" },
  ]);
  const [inputAmount, setInputAmount] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);

  // Function that addes new expense
  const addExpenses = () => {
    // this checks if the fields are empty and changes colors
    if (inputAmount.trim().length === 0 || inputDesc.trim().length === 0) {
      setIsInvalid(false);
      return;
    }
    let id = expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1;
    setExpenses([
      ...expenses,
      { id: id, amount: parseInt(inputAmount), description: inputDesc },
    ]);
    setInputAmount("");
    setInputDesc("");
  };

  // Function that removes the selected expense
  const deleteExpenses = (id) => {
    const filteredExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(filteredExpenses);
  };

  // function that calculates the total amount of expenses
  let amounts = expenses.map((amt) => amt.amount);
  const totalExpenses = amounts.reduce((acc, val) => {
    return (acc += val);
  }, 0);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance totalExpenses={totalExpenses} />
          <Add
            addExpenses={addExpenses}
            setInputAmount={setInputAmount}
            setInputDesc={setInputDesc}
            inputAmount={inputAmount}
            inputDesc={inputDesc}
            isInvalid={isInvalid}
            setIsInvalid={setIsInvalid}
          />
          {expenses.map((expense) => (
            <Expenses
              items={expense}
              key={expense.id}
              deleteExpenses={deleteExpenses}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
