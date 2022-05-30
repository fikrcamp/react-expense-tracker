import { FaPlus } from "react-icons/fa";
// context
function Add({
  addExpenses,
  setInputAmount,
  setInputDesc,
  inputAmount,
  inputDesc,
  isInvalid,
  setIsInvalid,
}) {
  if (inputAmount.trim().length > 0 || inputDesc.trim().length > 0) {
    setIsInvalid(true);
  }
  return (
    <div className="add-expense space">
      <input
        className={`expense-amount ${!isInvalid ? "invalid" : ""}`}
        type="number"
        placeholder="$"
        onChange={(e) => setInputAmount(e.target.value)}
        value={inputAmount}
      />
      <input
        className={`expense-input ${!isInvalid ? "invalid" : ""}`}
        type="text"
        placeholder="Add expense description"
        onChange={(e) => setInputDesc(e.target.value)}
        value={inputDesc}
      />
      <button onClick={() => addExpenses()} className="expense-button">
        <FaPlus />
      </button>
    </div>
  );
}

export default Add;
