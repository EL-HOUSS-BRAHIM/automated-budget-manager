export const calculateNetWorth = (assets, liabilities) => {
    const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);
    return totalAssets - totalLiabilities;
  };
  
  export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  export const calculateMonthlyBudget = (income, expenses) => {
    return income - expenses;
  };
  
  export const calculateSavingsRate = (income, savings) => {
    return (savings / income) * 100;
  };
  export const calculateSavingsGoal = (goalAmount, timeframeMonths) => {
    return goalAmount / timeframeMonths;
  };
  
  export const calculateCompoundInterest = (principal, rate, time, n = 12) => {
    return principal * Math.pow((1 + (rate / 100) / n), n * time);
  };
  
  export const calculateLoanPayment = (principal, rate, time) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = time * 12;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  };