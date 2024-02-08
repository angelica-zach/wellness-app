import React, { useState, useEffect } from 'react';
import Image from '../Components/Image';
import foodApi from '../utils/foodAPI';
import foodImage from '../utils/foodImage';

function Meal() {
    // State to hold the meals
    const [meals, setMeals] = useState({ breakfast: '', lunch: '', dinner: '' });

    // State to hold the images
    const [bImage, setBImage] = useState('');
    const [lImage, setLImage] = useState('');
    const [dImage, setDImage] = useState('');

    // Function to plan the meals
    const planMeals = () => {
        foodApi(1000, 'vegeterian').then((response) => {
            console.log(response.meals);

            // Set the meals
            setMeals({ ...meals, breakfast: response.meals[0].title, lunch: response.meals[1].title, dinner: response.meals[2].title });

            // Set the images
            setBImage(getMealImage(meals.breakfast));
            console.log(bImage);
            setLImage(getMealImage(meals.lunch));
            setDImage(getMealImage(meals.dinner));

            console.log(meals);
        }).catch((error) => console.log(error));
    }
    
    // Function to get the meal image
    const getMealImage = (meal) => { 
        foodImage(meal).then((response) => {
            console.log(response.data.results[0].image);
            return response.data.results[0].image;
        }).catch((error) => console.log(error));
    }

    return (
        <div>
            
            <button onClick={planMeals}>CLICK</button>
            <div>
                <h1>Breakfast: {meals.breakfast}</h1>
                <h1>Lunch: {meals.lunch}</h1>
                <h1>Dinner: {meals.dinner}</h1>
            </div>
            <div>
                <Image src={bImage} />
                <Image src={lImage} />
                <Image src={dImage} />
            </div>
            
        </div>
    )
}

export default Meal;