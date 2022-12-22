import { FaBackspace } from "react-icons/fa";
import react, { useState } from "react"

function Expenses(props) {
  const [id, setId] = useState(props.data.id)
  const [amount, setAmount] = useState(props.data.amount)

  return (
    <div className="expense">
      <div>💲{props.data.amount}</div>
      <div>{props.data.discription}</div>

      <div>
        <FaBackspace className="remove" size={30} color={"red"} onClick={() => props.handleOnDelete(id, amount)} />
      </div>
    </div>
  );
}

export default Expenses;
