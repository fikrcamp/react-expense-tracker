import { FaBackspace } from "react-icons/fa";

function Expenses({ items, deleteExpenses }) {
  return (
    <div className="expense">
      <div>💲{items.amount}</div>
      <div>{items.description}</div>
      <div>
        <FaBackspace
          className="remove"
          size={30}
          color={"red"}
          onClick={() => deleteExpenses(items.id)}
        />
      </div>
    </div>
  );
}

export default Expenses;
