import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Dayjs } from 'dayjs';

type FormProps = {
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleChangeDate: (value: Dayjs | null) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export function Form({
  label,
  handleChange,
  handleChangeDate,
  handleSubmit,
}: FormProps) {
  return (
    <form className="BudgetForm" onSubmit={handleSubmit}>
      {/* idon't put handleSubmit here becasue i will use formDialog and doesn't accapte form inside form */}
      <h2>{label}</h2>

      <FormControl className="inputSource" fullWidth required>
        <InputLabel htmlFor="source">Source</InputLabel>
        <OutlinedInput
          id="source"
          name="source"
          label="Source"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth required>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <OutlinedInput
          id="amount"
          name="amount"
          endAdornment={<InputAdornment position="end">SAR</InputAdornment>}
          label="Amount"
          type="number"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              className="datePicker"
              label="Basic date picker"
              onChange={handleChangeDate}
              slotProps={{
                textField: {
                  required: true,
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </FormControl>

      <Button variant="contained" type="submit">
        Add
      </Button>
    </form>
  );
}
