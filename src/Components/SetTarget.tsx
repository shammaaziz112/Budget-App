import { InputBudget } from './InputBudget';

type SetTargetProps = {
  handleChangeTarget: React.ChangeEventHandler<HTMLInputElement>;
};

export function SetTarget({ handleChangeTarget }: SetTargetProps) {
  return (
    <div>
      <InputBudget
        type="text"
        id="target"
        labelName="Set target"
        placeholder="target"
        handlerChange={handleChangeTarget}
      />
    </div>
  );
}
