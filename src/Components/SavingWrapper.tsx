import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Typography,
} from '@mui/material';
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setSavingsTarget(valueAsNumber);
  };

  const handleRest = () => {
    setTarget(savingsTarget);
  };

  return (
    <div>
      <form onReset={handleRest}>
        {/* set Target */}
        <FormControl fullWidth>
          <InputLabel htmlFor="saving">Set Target</InputLabel>
          <OutlinedInput
            id="saving"
            name="saving"
            endAdornment={<InputAdornment position="end">SAR</InputAdornment>}
            label="Set Target"
            type="number"
            onChange={handleChange}
          />
        </FormControl>
        <Button variant="contained" type="reset">
          Set target
        </Button>
        <Typography>Current Saving: {currentSaving}</Typography>
        <Typography>Target: {target}</Typography>
        <Typography>Progress: {(currentSaving / target) * 100}%</Typography>
      </form>
    </div>
  );
}
