import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from '@mui/material';

type BalanceWrapperProps = {
  balanceValue: number;
};

export function BalanceWrapper({ balanceValue }: BalanceWrapperProps) {
  return (
    <div className="balanceWrapper">
      <FormControl className="balanceInput" fullWidth>
        <InputLabel htmlFor="outlined-adornment-balance">Balance</InputLabel>
        <OutlinedInput
          id="outlined-adornment-balance"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          endAdornment={<InputAdornment position="end">SAR</InputAdornment>}
          label="Balance"
          value={balanceValue}
          readOnly
        />
      </FormControl>

      {/* <Button variant="contained">Transfer</Button> */}
    </div>
  );
}
