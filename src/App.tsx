import { Budget, BudgetWrapper } from './Components/BudgetWrapper';
import { TargetWrapper } from './Components/TargetWrapper';
import { BalanceWrapper } from './Components/BalanceWrapper';

import Grid from '@mui/material/Grid';

import './App.css';
import { useState } from 'react';

function App() {
  // declare 2 useState: income and expense
  const [incomes, setIncomes] = useState<Budget[]>([]);
  const [expenses, setExpenses] = useState<Budget[]>([]);

  // declare 2 varble: total income and expense
  const totalIncome = incomes.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  console.log('totalIncome', totalIncome);

  const totalExpense = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  console.log('totalExpense', totalExpense);

  // declare balance
  const balance = totalIncome - totalExpense;

  return (
    <div className="App">
      <h1>Budget app</h1>

      <Grid
        className="Grid"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid className="itemGrid" item xs={3}>
          <BalanceWrapper balanceValue={balance} />
        </Grid>

        <Grid className="itemGrid" item xs={8}>
          <TargetWrapper />
        </Grid>

        <Grid className="itemGrid budgetForm" item xs={5.5}>
          <BudgetWrapper
            label="Income"
            budgets={incomes}
            setBudgets={setIncomes}
          />
        </Grid>

        <Grid className="itemGrid budgetForm" item xs={5.5}>
          <BudgetWrapper
            label="Expense"
            budgets={expenses}
            setBudgets={setExpenses}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
