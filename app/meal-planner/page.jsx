'use client'
import React, { useState } from 'react';

const MealPlanGenerator = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [healthGoal, setHealthGoal] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateMealPlan = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/meal-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dietaryPreferences, healthGoal })
      });

      if (!response.ok) {
        throw new Error('Failed to generate meal plan');
      }

      const data = await response.json();
      setMealPlan(data);
    } catch (err) {
      setError('An error occurred while generating the meal plan.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Plan Generator</h1>
      
      <form onSubmit={generateMealPlan} className="mb-8">
        <div className="mb-4">
          <label htmlFor="dietaryPreferences" className="block mb-2">Dietary Preferences:</label>
          <input
            type="text"
            id="dietaryPreferences"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., vegetarian, low-carb"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="healthGoal" className="block mb-2">Health Goal:</label>
          <input
            type="text"
            id="healthGoal"
            value={healthGoal}
            onChange={(e) => setHealthGoal(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., weight loss, muscle gain"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Meal Plan'}
        </button>
      </form>

      
          
          
        
      
    </div>
  );
};

export default MealPlanGenerator;