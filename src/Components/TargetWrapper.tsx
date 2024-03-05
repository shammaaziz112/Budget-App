import { useState } from 'react';

import { Button } from './Button';
import { InputBudget } from './InputBudget';

export function TargetWrapper() {
  const [target, setTarget] = useState(0);
  const handleChangeTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTarget(value);
  };
  return (
    <div>
      {/* set Target */}
      <InputBudget
        type="text"
        id="target"
        labelName="Set target"
        placeholder="target"
        handlerChange={handleChangeTarget}
      />
      <Button label="Rest" budgetName={''} />
    </div>
  );
}
