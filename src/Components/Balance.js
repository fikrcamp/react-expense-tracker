import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";

function Balance(props) {
  return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div>
        <b>💲{props.total}</b>
      </div>
    </div>
  );
}

export default Balance;
