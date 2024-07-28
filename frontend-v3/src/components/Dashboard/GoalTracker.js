import React, { useState, useEffect } from 'react';
import { getGoals } from '../../services/goalService';

function GoalTracker() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const data = await getGoals();
      setGoals(data.goals);
    } catch (error) {
      console.error('Failed to fetch goals:', error);
    }
  };

  return (
    <div className="goal-tracker">
      <h2>Financial Goals</h2>
      {goals.map((goal) => (
        <div key={goal.id} className="goal-item">
          <h3>{goal.name}</h3>
          <p>Target: ${goal.target}</p>
          <p>Progress: ${goal.progress}</p>
          <div className="goal-progress">
            <div 
              className="goal-bar" 
              style={{width: `${(goal.progress / goal.target) * 100}%`}}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalTracker;