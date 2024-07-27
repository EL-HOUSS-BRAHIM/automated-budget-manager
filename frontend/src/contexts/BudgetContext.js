import React, { createContext, useState, useEffect } from 'react';
import { fetchBudget, updateBudget } from '../services/budgetService';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    const data = await fetchBudget();
    setBudget(data);
  };

  const updateBudgetData = async (newBudget) => {
    const updatedBudget = await updateBudget(newBudget);
    setBudget(updatedBudget);
  };

  return (
    <BudgetContext.Provider value={{ budget, updateBudgetData, loadBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};