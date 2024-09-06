'use client';

import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { db, collection, addDoc } from '../../firebase'; // Adjust the path if necessary

const MealPlanGenerator = () => {
  const { userId } = useAuth(); // Get the current user's ID
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
      console.error('Meal Plan Generation Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const saveMealPlanToFirebase = async () => {
    if (!mealPlan || !userId) {
      setError('No meal plan or user ID available.');
      console.error('Meal Plan or User ID is missing');
      return;
    }

    try {
      const mealPlansRef = collection(db, 'users', userId, 'mealPlans');
      await addDoc(mealPlansRef, mealPlan);
      alert('Your Meal Plan has been saved!');
    } catch (err) {
      setError('An error occurred while saving the meal plan.');
      console.error('Save Meal Plan Error:', err);
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
          <label htmlFor="healthGoal" className="block mb-2">Health Goal </label>
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

      {/* Render meal plan details */}
      {mealPlan && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Generated Meal Plan for {mealPlan.date}</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-bold">Total Calories: {mealPlan.total_calories}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Meals:</h3>
              {Object.entries(mealPlan.meals).map(([mealType, mealDetails]) => (
                <div key={mealType} className="mt-4">
                  <h4 className="font-medium">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h4>
                  {mealDetails.main_dish && (
                    <div>
                      <h5 className="font-semibold">Main Dish:</h5>
                      <p>{mealDetails.main_dish.name}</p>
                      <p>{mealDetails.main_dish.description}</p>
                      <p>Calories: {mealDetails.main_dish.calories}</p>
                    </div>
                  )}
                  {mealDetails.side_dish && (
                    <div>
                      <h5 className="font-semibold">Side Dish:</h5>
                      <p>{mealDetails.side_dish.name}</p>
                      <p>{mealDetails.side_dish.description}</p>
                      <p>Calories: {mealDetails.side_dish.calories}</p>
                    </div>
                  )}
                  {mealDetails.beverage && (
                    <div>
                      <h5 className="font-semibold">Beverage:</h5>
                      <p>{mealDetails.beverage.name}</p>
                      <p>{mealDetails.beverage.description}</p>
                      <p>Calories: {mealDetails.beverage.calories}</p>
                    </div>
                  )}
                  {mealDetails.name && !mealDetails.main_dish && !mealDetails.side_dish && !mealDetails.beverage && (
                    <div>
                      <h5 className="font-semibold">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}:</h5>
                      <p>{mealDetails.name}</p>
                      <p>{mealDetails.description}</p>
                      <p>Calories: {mealDetails.calories}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button 
              onClick={saveMealPlanToFirebase} 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Your Meal Plan
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-8 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default MealPlanGenerator;