import { useState } from "react";
import { FaPlus } from "react-icons/fa";
// context
function Add(props) {
  const [amount,setAmount]= useState(0)
  const [des,setDes]= useState('')


  return (
    <div className="add-expense space">
      <input className="expense-amount" type="number" placeholder="$" onChange={(e)=> setAmount(e.target.value)} />
      <input onChange={(e)=> setDes(e.target.value)} 
        className="expense-input"
        type="text"
        placeholder="Add expense description"
      />
      <button className="expense-button" onClick={()=>props.addNew(amount,des)}>
        <FaPlus />
      </button>
    </div>
  );
}

export default Add;
