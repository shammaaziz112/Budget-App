import { useState } from 'react';
import { SetTarget } from './SetTarget';

export function TargetWrapper() {
  const [target, setTarget] = useState(0);
  const handleChangeTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTarget(value);
  };
  return (
    <div>
      {/* set Target */}
      <SetTarget handleChangeTarget={handleChangeTarget} />
    </div>
  );
}
