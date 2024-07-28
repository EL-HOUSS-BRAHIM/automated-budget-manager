export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  export const calculatePercentage = (part, whole) => {
    return (part / whole) * 100;
  };
  
  export const calculateCompoundInterest = (principal, rate, time, n = 12) => {
    return principal * Math.pow((1 + (rate / n)), (n * time));
  };