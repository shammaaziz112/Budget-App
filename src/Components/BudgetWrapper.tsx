import { useState } from 'react';
import { Form } from './Form';
import { ListItem } from './ListItems';
import { Dayjs } from 'dayjs';

export type Budget = {
  id: number;
  source: string;
  amount: number;
  date: string;
};
type BudgetWrapperProps = {
  label: string;
  budgets: Budget[];
  setBudgets: (key: Budget[]) => void;
};

export function BudgetWrapper({
  label,
  budgets,
  setBudgets,
}: BudgetWrapperProps) {
  const [budget, setBudget] = useState<Budget>({
    id: Number(new Date()),
    source: '',
    amount: 0,
    date: new Date().toDateString(),
  });

  // create  a variable called total income , total expense

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setBudget({
      ...budget,
      [name]: value,
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setBudget({
        ...budget,
        date: new Date(value.toDate()).toDateString(),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBudget: Budget = {
      id: Number(new Date()),
      source: budget.source,
      amount: Number(budget.amount),
      date: budget.date,
    };

    setBudgets([...budgets, newBudget]);
  };

  return (
    <div>
      {/* For income and expense form */}
      <Form
        label={label}
        handleChange={handleChanges}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />

      {/* <FormDialog/> */}

      {/* to dispaly income and expense list */}
      <ListItem items={budgets} />
    </div>
  );
}
