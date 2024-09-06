// components/SavedMeals.jsx
'use client';

import React, { useEffect, useState } from 'react';
import {db} from '@/firebase'
import { collection, getDocs } from "firebase/firestore"; // Adjust the path if necessary

const SavedMeals = () => {
  const [savedMeals, setSavedMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedMealPlanId, setExpandedMealPlanId] = useState(null);

  useEffect(() => {
    const fetchSavedMeals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'mealPlans'));
        const meals = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSavedMeals(meals);
      } catch (err) {
        setError('Failed to load saved meals.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedMeals();
  }, []);

  const handleToggleExpand = (mealPlanId) => {
    setExpandedMealPlanId(expandedMealPlanId === mealPlanId ? null : mealPlanId);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Saved Meals</h2>
      {savedMeals.length === 0 ? (
        <p>No saved meals found.</p>
      ) : (
        <div className="space-y-4">
          {savedMeals.map(mealPlan => (
            <div key={mealPlan.id} className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
              <h3 className="font-bold text-lg flex justify-between items-center cursor-pointer" onClick={() => handleToggleExpand(mealPlan.id)}>
                {mealPlan.date}
                <span>{expandedMealPlanId === mealPlan.id ? '−' : '+'}</span>
              </h3>
              {expandedMealPlanId === mealPlan.id && (
                <div className="mt-4">
                  <p>Total Calories: {mealPlan.total_calories}</p>
                  <div className="mt-4">
                    <h4 className="text-md font-semibold">Meals:</h4>
                    {Object.entries(mealPlan.meals).map(([mealType, mealDetails]) => (
                      <div key={mealType} className="mt-4">
                        <h5 className="font-medium capitalize">{mealType}</h5>
                        {mealDetails.main_dish && (
                          <div>
                            <h6 className="font-semibold">Main Dish:</h6>
                            <p>{mealDetails.main_dish.name}</p>
                            <p>{mealDetails.main_dish.description}</p>
                            <p>Calories: {mealDetails.main_dish.calories}</p>
                          </div>
                        )}
                        {mealDetails.side_dish && (
                          <div>
                            <h6 className="font-semibold">Side Dish:</h6>
                            <p>{mealDetails.side_dish.name}</p>
                            <p>{mealDetails.side_dish.description}</p>
                            <p>Calories: {mealDetails.side_dish.calories}</p>
                          </div>
                        )}
                        {mealDetails.beverage && (
                          <div>
                            <h6 className="font-semibold">Beverage:</h6>
                            <p>{mealDetails.beverage.name}</p>
                            <p>{mealDetails.beverage.description}</p>
                            <p>Calories: {mealDetails.beverage.calories}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedMeals;