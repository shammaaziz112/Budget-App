import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import * as React from 'react';
import { FormEvent } from 'react';

type TransferAccountProps = {
  transferAmount: number;
  setTransferAmount: (key: number) => void;
  handleSubmit: (key: FormEvent) => void;
};

export function TransferAccountWrapper({
  transferAmount,
  setTransferAmount,
  handleSubmit,
}: TransferAccountProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setTransferAmount(valueAsNumber);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='divTransferAccount'>
      <div>
        <h4>Transfer to Saving Account</h4>
      </div>
      <div>
        <React.Fragment>
          <Button onClick={handleClickOpen}>
            <Fab size="small" color="secondary" aria-label="edit">
              <CompareArrowsIcon />
            </Fab>
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                handleSubmit(event);
                handleClose();
              },
            }}
          >
            <DialogTitle>Transfer to Saving Account</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the amount to transfer to Saving Account.
              </DialogContentText>
              <FormControl fullWidth>
                <InputLabel htmlFor="saving">Transfer</InputLabel>
                <OutlinedInput
                  id="saving"
                  name="saving"
                  endAdornment={
                    <InputAdornment position="end">SAR</InputAdornment>
                  }
                  label="Transfer"
                  type="number"
                  value={transferAmount}
                  onChange={handleChange}
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Transfer</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
    </div>
  );
}
