import { Button } from './Button';

export function IncomeForm({
  label,
  handleChangeSource,
  handleChangeAmount,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="source">{label} Source</label>
        <input
          type="text"
          name="source"
          id="source"
          placeholder="Salary"
          onChange={handleChangeSource}
        />
      </div>

      <div>
        <label htmlFor="amount">Amount of {label.toLowerCase()}</label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Amount"
          onChange={handleChangeAmount}
        />
      </div>

      <div>
        <label htmlFor="date">Date of {label.toLowerCase()}</label>
        <input type="date" name="date" id="date" placeholder="Date" />
      </div>
      <Button label="Add" budgetName={label.toLowerCase()}/>
    </form>
  );
}
