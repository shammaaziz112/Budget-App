import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Budget } from './FormDialog';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type BasicTableProps = {
  items: Budget[];
  setItems: (key: Budget[]) => void;
};

export default function BasicTable({ items, setItems }: BasicTableProps) {
  // Delete item in income/expense
  const handleDelete = (id: number) => {
    // Get ID

    // Filter the array
    const updateIncome = items.filter((item) => {
      return item.id !== id;
    });

    //Update the state -> update the income/expense array
    setItems(updateIncome);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Source</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.source}
              </TableCell>
              <TableCell align="center">{item.amount}SAR</TableCell>
              <TableCell align="center">{item.date}</TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="delete"
                  size="small"
                  color="error"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
