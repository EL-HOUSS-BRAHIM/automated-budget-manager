export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const calculatePercentage = (part, total) => {
  return ((part / total) * 100).toFixed(2);
};

export const calculateRemainingBudget = (budget, expenses) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return budget - totalExpenses;
};

export const calculateNetWorth = (assets, liabilities) => {
  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);
  return totalAssets - totalLiabilities;
};