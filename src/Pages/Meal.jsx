import React, { useState } from 'react';
import Image from '../Components/Image';
import foodApi from '../utils/foodAPI';
import foodImage from '../utils/foodImage';

function Meal() {
    const [meals, setMeals] = useState();
    const [mealImage, setMealImage] = useState();
    
    const planMeals = () => {
        foodApi('day', 1000, 'vegeterian').then((response) => {
            console.log(response);
            setMeals(response);
            console.log(meals);
        }).catch((error) => console.log(error));
    }
    
    const getMealImage = () => { 
        foodImage('pasta').then((response) => {
            console.log(response);
            setMealImage(response.data.results[0].image);
        }).catch((error) => console.log(error));
    }

    return (
        <div>
            <button onClick={planMeals}>CLICK</button>
            <button onClick={getMealImage}>Image</button>
            <Image src={mealImage} />
        </div>
    )
}

export default Meal;