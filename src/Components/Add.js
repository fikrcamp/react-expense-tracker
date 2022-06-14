import { FaPlus } from "react-icons/fa";
import { useState } from "react";
// context
function Add({ addExpenses, inputAmount, inputDesc, isInvalid, setIsInvalid }) {
  if (inputAmount.trim().length > 0 || inputDesc.trim().length > 0) {
    setIsInvalid(true);
  }

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="add-expense space">
      <input
        className={`expense-amount ${!isInvalid ? "invalid" : ""}`}
        type="number"
        placeholder="$"
        onChange={(e) => setAmount(e.target.value)}
        // value={inputAmount}
      />
      <input
        className={`expense-input ${!isInvalid ? "invalid" : ""}`}
        type="text"
        placeholder="Add expense description"
        onChange={(e) => setDescription(e.target.value)}
        // value={inputDesc}
      />

      <select
        name="category"
        className="expense-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button
        onClick={() => addExpenses(amount, description, category)}
        className="expense-button"
      >
        <FaPlus />
        Add Expenses
      </button>
    </div>
  );
}

export default Add;
