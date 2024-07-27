import React, { useState, useEffect } from 'react';
import { fetchGoals, addGoal } from '../../services/goalService';

function GoalTracker() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ description: '', targetAmount: '', deadline: '' });

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    const data = await fetchGoals();
    setGoals(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addGoal(newGoal);
    setNewGoal({ description: '', targetAmount: '', deadline: '' });
    loadGoals();
  };

  return (
    <div className="goal-tracker">
      <h2>Goal Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Description"
          value={newGoal.description}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={newGoal.targetAmount}
          onChange={(e) => setNewGoal({ ...newGoal, targetAmount: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Deadline"
          value={newGoal.deadline}
          onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
          required
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.description}: ${goal.targetAmount} by {goal.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalTracker;