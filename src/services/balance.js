export function getTotal(transactions) {
  if (!transactions) {
    return 0;
  }

  return transactions.reduce((acc, curr) => {
    const value = curr.type === 'debit' ? -curr.value : curr.value;

    return acc + value;
  }, 0);
}
