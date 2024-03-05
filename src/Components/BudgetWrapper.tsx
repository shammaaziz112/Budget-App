import { useState } from 'react';
import { BudgetForm } from './BudgetForm';
import { SetTarget } from './SetTarget';

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
  };
  // create  a variable called total income , total expense 


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

      {/* to dispaly income and expense list */}
      <ul>
        {budgets.map((budget) => {
          return (
            <li>
              <p>{`${budget.source}: ${budget.amount}SAR on ${budget.date}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
