import React, { useState, useEffect } from 'react';
import axios from "axios";

const BASEURL = "https://api.spoonacular.com/mealplanner/generate";
const APIKEY = "c59eb3fe359d44128c5026a4d4f4add8";

const fetchMeals = async (timeFrame, targetCarlories, diet, exclude) => {
    try {
        // Make a request to the Spoonacular API to get meals for the day
        return response = await axios.get(BASEURL, {
            params: {
                timeFrame: timeFrame,
                targetCarlories: targetCarlories,
                diet: diet,
                exclude: exclude,
                apiKey: APIKEY,
            }
        });
        // Update state with the generated meals
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
};

export default fetchMeals;