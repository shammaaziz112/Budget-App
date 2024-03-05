import { useState } from 'react';
import { BudgetForm } from './BudgetForm';

type Budget = {
  source: string;
  amount: number;
  date: string;
};
type BudgetWrapperProps = {
  label: string;
};

export function BudgetWrapper({ label }: BudgetWrapperProps) {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  // create  a variable called total income , total expense
  const [totalBudget, setTotalIncome] = useState(0);
  // const [totalExpense, setTotalExpense] = useState(0);

  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setAmount(value);
  };
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBudget = {
      source: source,
      amount: amount,
      date: date,
    };

    setBudgets([...budgets, newBudget]);
    setTotalIncome(totalBudget + newBudget.amount);
  };

  return (
    <div>
      {/* For income and expense form */}
      <BudgetForm
        label={label}
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />
      <p>
        Total {label}: {totalBudget}
      </p>

      {/* to dispaly income and expense list */}
      <ol>
        {budgets.map((budget) => {
          return (
            <li>
              <p>{`${budget.source}: ${budget.amount}SAR on ${budget.date}`}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
