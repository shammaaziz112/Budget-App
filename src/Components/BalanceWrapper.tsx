type BalanceWrapperProps = {
  balanceValue: number;
};

export function BalanceWrapper({ balanceValue }: BalanceWrapperProps) {
  return (
    <div className="balanceWrapper">
      <h2>Balance:</h2>
      <h3>{balanceValue} SAR</h3>
    </div>
  );
}
