type InputBudgetProps = {
  type: string;
  id: string;
  labelName: string;
  placeholder: string;
  handlerChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function InputBudget({
  type,
  id,
  labelName,
  placeholder,
  handlerChange,
}: InputBudgetProps) {
  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={handlerChange}
      />
    </div>
  );
}
