import { BudgetWrapper } from './Components/BudgetWrapper';
import './App.css';
import { useState } from 'react';

type Income = {
  source: string;
  amount: number;
  date: string;
};

function App() {
  // declare 2 useState : total income and expense

  return (
    <div>
      <h1>Budget app</h1>
      <BudgetWrapper label="Income" />
      <BudgetWrapper label="Expense" />
      {/* <TargetWrapper/> */}
    </div>
  );
}

export default App;
