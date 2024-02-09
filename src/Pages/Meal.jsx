import React, { useState, useEffect } from 'react';
import Image from '../Components/Image';
import foodApi from '../utils/foodAPI';
import foodImage from '../utils/foodImage';

function Meal() {
    // State to hold the meals
    const [meals, setMeals] = useState({ breakfast: '', lunch: '', dinner: '' });

    // State to hold the images
    const [bImages, setBImages] = useState('');
    const [lImages, setLImages] = useState('');
    const [dImages, setDImages] = useState('');

    // Function to plan the meals
    const planMeals = () => {
        foodApi(1000, 'vegeterian').then((response) => {
            console.log(response.meals);

            // Set the meals
            setMeals({ ...meals, breakfast: response.meals[0].title, lunch: response.meals[1].title, dinner: response.meals[2].title });   

            console.log(meals);
        }).catch((error) => console.log(error));
    }
    
    // Function to get the meal image
    const getMealImage = (b, l, d) => { 
        foodImage(b).then((response) => {
            console.log(response);
            setBImages(response.data.results[0].image);
        }).catch((error) => console.log(error));
        foodImage(l).then((response) => {
            console.log(response);
            setLImages(response.data.results[0].image);
        }).catch((error) => console.log(error));
        foodImage(d).then((response) => {
            console.log(response);
            setDImages(response.data.results[0].image);
        }).catch((error) => console.log(error));
    }

    // UseEffect to get the images
    useEffect(() => {
        getMealImage(meals.breakfast, meals.lunch, meals.dinner);
    }, [meals]);
        

    return (
        <div>
            
            <button onClick={planMeals}>CLICK</button>
            <button >CLICK</button>
            <div>
                <h1>Breakfast: {meals.breakfast}</h1>
                <h1>Lunch: {meals.lunch}</h1>
                <h1>Dinner: {meals.dinner}</h1>
            </div>
            <div>
                <Image src={bImages} />
                <Image src={lImages} />
                <Image src={dImages} />
            </div>
        
        </div>
    )
}

export default Meal;