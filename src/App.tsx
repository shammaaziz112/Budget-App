import { BudgetWrapper } from './Components/BudgetWrapper';
import './App.css';
import { useState } from 'react';

type Income = {
  source: string;
  amount: number;
  date: string;
};

function App() {
  return (
    <div>
      <h1>Budget app</h1>
      <BudgetWrapper label="Income" />
      <BudgetWrapper label="Expense" />
    </div>
  );
}

export default App;
