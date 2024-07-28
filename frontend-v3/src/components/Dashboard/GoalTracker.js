import React, { useEffect, useState } from 'react';
import { getGoals } from '../../services/goalService';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await getGoals();
        setGoals(data.goals);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div className="goal-tracker">
      <h2>Goal Tracker</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.name}: ${goal.progress} / ${goal.target}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalTracker;