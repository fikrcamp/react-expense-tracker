import { FaBackspace } from "react-icons/fa";
function Expenses(props) {
 let id = props.data.id;
 let amount= props.data.amount;
  
  return (
    <div className="expense">
      <div>💲{props.data.amount}</div>
      <div>{props.data.description}</div>
      <div>
        <FaBackspace className="remove" size={30} color={"red"} onClick={()=>props.remove(id,amount)} />
      </div>
    </div>
  );
}

export default Expenses;
