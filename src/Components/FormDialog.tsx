import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from '@mui/material';
import { Dayjs } from 'dayjs';
import AddIcon from '@mui/icons-material/Add';

import * as React from 'react';
import { useState } from 'react';
import { Form } from './Form';

type FormDialogProps = {
  label: string;
  budgets: Budget[];
  setBudgets: (key: Budget[]) => void;
};

export type Budget = {
  id: number;
  source: string;
  amount: number;
  date: string;
};
export default function FormDialog({
  label,
  budgets,
  setBudgets,
}: FormDialogProps) {
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <Fab size="medium" color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log('added');

            const newBudget: Budget = {
              id: Number(new Date()),
              source: budget.source,
              amount: Number(budget.amount),
              date: budget.date,
            };

            setBudgets([...budgets, newBudget]);
            console.log('budgets', budgets);

            handleClose();
          },
        }}
      >
        <DialogTitle>Add {label}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add {label}, please enter source, amount and date here.
          </DialogContentText>
          <Form
            handleChange={handleChanges}
            handleChangeDate={handleChangeDate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">ADD</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
