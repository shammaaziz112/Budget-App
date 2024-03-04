import { useState } from 'react';
import { IncomeForm } from './IncomeForm';

type Budget = {
  source: string;
  amount: number;
  date: string;
};

export function BudgetWrapper({ label }) {
  const [Budgets, setBudgets] = useState<Budget[]>([]);

  const [source, SetSource] = useState('');
  const [amount, SetAmount] = useState(0);
  const [date, SetDate] = useState(null);

  const handleChangeSource = (e) => {
    const value = e.target.value;
    SetSource(value);
  };
  const handleChangeAmount = (e) => {
    const value = e.target.value;
    SetAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBudget = {
      source: source,
      amount: amount,
      date: new Date().toLocaleDateString(),
    };

    setBudgets([...Budgets, newBudget]);
  };

  return (
    <div>
      <IncomeForm
        label={label}
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleSubmit={handleSubmit}
      />

      <ul>
        {Budgets.map((Budget) => {
          return (
            <li>
              <p>{`${Budget.source}: ${Budget.amount} on ${Budget.date}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
