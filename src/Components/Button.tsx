type ButtonProps = {
  label: string
  budgetName: string
}
export function Button({ label, budgetName }: ButtonProps) {
  return <button>{`${label} ${budgetName}`}</button>;
}
