import { useState } from "react";
import { FaPlus } from "react-icons/fa";
// context
function Add(props) {
  const [Amount,setAmount]= useState("")
  const [Description,setDescription] = useState("")

  return (
    <div className="add-expense space">
      <input className="expense-amount" type="number" placeholder="$" onChange={(e)=> setAmount(e.target.value)}/>
      <input
         onChange={(e)=> setDescription(e.target.value)}
        className="expense-input"
        type="text"
        placeholder="Add expense description"
      />
      <button className="expense-button" onClick={()=>props.handleOnClick(Amount,Description)}>
        <FaPlus />
      </button>
    </div>
  );
}

export default Add;
