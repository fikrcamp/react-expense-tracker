 
function Balance(props) {
     
    return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div>
        <b>💲{props.balance}</b>
      </div>
    </div>
  );
}

export default Balance;
