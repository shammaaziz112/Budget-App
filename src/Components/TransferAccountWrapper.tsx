import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from '@mui/material';
import { FormEvent } from 'react';

type TransferAccountProps = {
  transferAmount:number
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* set Target */}
        <FormControl fullWidth>
          <InputLabel htmlFor="saving">Set Target</InputLabel>
          <OutlinedInput
            id="saving"
            name="saving"
            endAdornment={<InputAdornment position="end">SAR</InputAdornment>}
            label="Set Target"
            type="number"
            value={transferAmount}
            onChange={handleChange}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Transfer
        </Button>
      </form>
    </div>
  );
}
