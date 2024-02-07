import React, { useState } from 'react';
import foodApi from '../utils/foodAPI';

function Meal() {
    const [meals, setMeals] = useState([]);
    
    const planMeals = () => {
        foodApi().then((response) => {
            console.log(response);
            setMeals(response);
            console.log(...meals);
        }).catch((error) => console.log(error));
     }

    return (
        <div>
            <button onClick={planMeals}>CLICK</button>
        </div>
    )
}

export default Meal;