import {
  Box,
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
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import * as React from 'react';
import { useState } from 'react';

type SavingWrapperProps = {
  savingsTarget: number;
  setSavingsTarget: (key: number) => void;
  currentSaving: number;
};

export function SavingWrapper({
  savingsTarget,
  setSavingsTarget,
  currentSaving,
}: SavingWrapperProps) {
  const [target, setTarget] = useState(0);
  const progress = ((currentSaving / target) * 100) | 0;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setSavingsTarget(valueAsNumber);
  };

  const handleRest = () => {
    setTarget(savingsTarget);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="divSaving">
      <form onReset={handleRest} className="formSaving">
        <div>
          {/* Current Saving */}
          <h3>Current Saving: {currentSaving}</h3>
        </div>

        <div>
          {/* Progress */}
          <CircularProgressWithLabel value={progress} />
        </div>
        <div className="divSetTarget">
          <div className="divTarget">
            {/* Target */}
            <h3>Target: {target}</h3>
          </div>

          <div>
            {/* set Target */}
            <React.Fragment>
              <Button onClick={handleClickOpen}>
                <Fab size="small" color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
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
                      onChange={handleChange}
                    />
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="reset" onClick={handleClose}>
                    Set target
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </div>
        </div>
      </form>
    </div>
  );
}

// Progress
function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size={100}
        color="success"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          fontSize={'25'}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
