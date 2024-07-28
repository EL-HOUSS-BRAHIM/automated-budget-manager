import React, { createContext, useState, useEffect } from 'react';
import { getBudget } from '../services/budgetService';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const budgetData = await getBudget();
        setBudget(budgetData);
      } catch (error) {
        console.error('Failed to fetch budget:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBudget();
  }, []);

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <BudgetContext.Provider value={{ budget, updateBudget, loading }}>
      {children}
    </BudgetContext.Provider>
  );
};