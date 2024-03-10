import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from '@mui/material';
import { useState } from 'react';

export function TargetWrapper() {
  const [target, setTarget] = useState(0);
  const handleChangeTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTarget(value);
  };
  return (
    <div>
      {/* set Target */}
      <FormControl fullWidth>
        <InputLabel htmlFor="target">Target</InputLabel>
        <OutlinedInput
          id="target"
          name="target"
          endAdornment={<InputAdornment position="end">SAR</InputAdornment>}
          label="Target"
        />
      </FormControl>

      <Button variant="contained" type="submit">
        Set target
      </Button>
    </div>
  );
}
