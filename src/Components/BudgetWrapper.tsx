import Grid from '@mui/material/Grid';

import FormDialog from './FormDialog';
import Table from './Table';

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
  return (
    <div className="budgetWrapperDiv">
      {/* For income and expense form */}
      <Grid
        className="budgetWrapperGrid"
        container
        display={'flex'}
        justify-content={'space-between'}
      >
        <Grid item xs={3}>
          <div>
            <h2>{label}</h2>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="FormDialogDiv">
            <FormDialog
              label={label}
              budgets={budgets}
              setBudgets={setBudgets}
            />
          </div>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          {/* to dispaly income and expense list */}
          <Table items={budgets} setItems={setBudgets} />
        </Grid>
      </Grid>
      
    </div>
  );
}
