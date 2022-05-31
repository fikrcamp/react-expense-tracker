function Balance({ totalExpenses }) {
  return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div className={totalExpenses < 0 ? "critical" : "revenue"}>
        <b>💲{totalExpenses}</b>
      </div>
    </div>
  );
}

export default Balance;
