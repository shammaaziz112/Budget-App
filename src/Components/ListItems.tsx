import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Budget } from './BudgetWrapper';

type ListItemProps = {
  items: Budget[];
  setItems: (key: Budget[]) => void;
};

export function ListItem({ items, setItems }: ListItemProps) {
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
    <ol>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{`${item.source}: ${item.amount}SAR on ${item.date}`}</p>
            <IconButton
              aria-label="delete"
              size="small"
              color="error"
              onClick={() => handleDelete(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        );
      })}
    </ol>
  );
}
