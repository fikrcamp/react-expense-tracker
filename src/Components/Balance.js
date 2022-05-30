function Balance({ totalExpenses }) {
  return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div>
        <b>💲{totalExpenses}</b>
      </div>
    </div>
  );
}

export default Balance;
