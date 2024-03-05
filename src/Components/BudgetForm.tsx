import { Button } from './Button';
import { InputBudget } from './InputBudget';

type IncomeFormProps = {
  label: string;
  handleChangeSource: React.ChangeEventHandler<HTMLInputElement>;
  handleChangeAmount: React.ChangeEventHandler<HTMLInputElement>;
  handleChangeDate: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export function BudgetForm({
  label,
  handleChangeSource,
  handleChangeAmount,
  handleChangeDate,
  handleSubmit,
}: IncomeFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{label}</h2>

      <InputBudget
        type="text"
        id="source"
        labelName="Source"
        placeholder="Salary"
        handlerChange={handleChangeSource}
      />

      <InputBudget
        type="text"
        id="amount"
        labelName="Amount"
        placeholder="amount"
        handlerChange={handleChangeAmount}
      />

      <InputBudget
        type="date"
        id="date"
        labelName="Date"
        placeholder="date"
        handlerChange={handleChangeDate}
      />

      <Button label="Add" budgetName={label.toLowerCase()} />
    </form>
  );
}
