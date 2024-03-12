import { Budget, BudgetWrapper } from './Components/BudgetWrapper';
import { SavingWrapper } from './Components/SavingWrapper';
import { BalanceWrapper } from './Components/BalanceWrapper';
import Grid from '@mui/material/Grid';
import { FormEvent, useState } from 'react';
import { TransferAccountWrapper } from './Components/TransferAccountWrapper';
import './App.css';

function App() {
  // declare 2 useState: income and expense
  const [incomes, setIncomes] = useState<Budget[]>([]);
  const [expenses, setExpenses] = useState<Budget[]>([]);
  const [savingsTarget, setSavingsTarget] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);

  // declare 2 varble: total income and expense
  const totalIncome = incomes.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalExpense = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // declare balance
  const balance = totalIncome - totalExpense - currentSaving;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (transferAmount <= balance) {
      setCurrentSaving((prevState) => prevState + transferAmount);
    } else {
      alert('No Money');
    }

    setTransferAmount(0);
  };

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
          <div className="divBalanceTran">
            <BalanceWrapper balanceValue={balance} />
            <TransferAccountWrapper
              setTransferAmount={setTransferAmount}
              handleSubmit={handleSubmit}
              transferAmount={transferAmount}
            />
          </div>
        </Grid>

        <Grid className="itemGrid" item xs={8}>
          <SavingWrapper
          savingsTarget={savingsTarget}
            setSavingsTarget={setSavingsTarget}
            currentSaving={currentSaving}
          />
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
