import { Budget } from './BudgetWrapper';

type ListItemProps = {
  items: Budget[];
};

export function ListItem({ items }: ListItemProps) {
  return (
    <ol>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{`${item.source}: ${item.amount}SAR on ${item.date}`}</p>
          </li>
        );
      })}
    </ol>
  );
}
