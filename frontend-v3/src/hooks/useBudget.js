import { useState, useEffect } from 'react';
import { getBudget, updateBudget } from '../services/budgetService';

export const useBudget = () => {
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBudget();
  }, []);

  const fetchBudget = async () => {
    try {
      setLoading(true);
      const data = await getBudget();
      setBudget(data.budget);
      setError(null);
    } catch (err) {
      setError('Failed to fetch budget');
    } finally {
      setLoading(false);
    }
  };

  const updateBudgetData = async (newBudgetData) => {
    try {
      setLoading(true);
      const updatedBudget = await updateBudget(newBudgetData);
      setBudget(updatedBudget);
      setError(null);
    } catch (err) {
      setError('Failed to update budget');
    } finally {
      setLoading(false);
    }
  };

  return { budget, loading, error, updateBudgetData };
};