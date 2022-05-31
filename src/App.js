import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App(props) {
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 200, description: "food", category: "expense" },
    { id: 2, amount: 250, description: "rent", category: "income" },
    { id: 3, amount: 50, description: "gym", category: "income" },
    { id: 4, amount: 60, description: "electricity", category: "expense" },
  ]);
  const [inputAmount, setInputAmount] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);

  // Function that addes new expense
  const addExpenses = (amount, description, category) => {
    // this checks if the fields are empty and changes colors
    if (
      amount.trim().length === 0 ||
      description.trim().length === 0
      // expenseCategory.length === 0
    ) {
      setIsInvalid(false);
      return;
    }
    let id = expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1;
    setExpenses([
      ...expenses,
      {
        id: id,
        amount: parseInt(amount),
        description: description,
        category: category,
      },
    ]);
    // setInputAmount("");
    // setInputDesc("");
  };

  // Function that removes the selected expense
  const deleteExpenses = (id) => {
    const filteredExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(filteredExpenses);
  };

  // function that calculates the total amount of income
  const countIncome = expenses.filter((income) => income.category === "income");
  let incomeAmounts = countIncome.map((amt) => amt.amount);
  const incomeTotal = incomeAmounts.reduce((acc, val) => {
    return (acc += val);
  });

  ////////////////////////////////////////////////////////////////

  // function that calculates the total amount of expenses
  const countExpenses = expenses.filter(
    (expense) => expense.category === "expense"
  );
  let expenseAmounts = countExpenses.map((amt) => amt.amount);
  const expenseTotal = expenseAmounts.reduce((acc, val) => {
    return (acc += val);
  });

  // variable that printes the grand total
  const grandTotal = incomeTotal - expenseTotal;

  // const totalExpenses = amounts.reduce((acc, val) => {
  //   return (acc += val);
  // }, 0);

  // console.log(totalExpenses);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance totalExpenses={grandTotal} />
          <Add
            addExpenses={addExpenses}
            setInputAmount={setInputAmount}
            setInputDesc={setInputDesc}
            inputAmount={inputAmount}
            inputDesc={inputDesc}
            inputCategory={inputCategory}
            setinsetInputCategory={setInputCategory}
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
