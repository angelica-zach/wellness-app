import React, { useState, useEffect } from 'react';
import Image from '../Components/Image';
import Row from '../Components/Row';
import Col from '../Components/Col';
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
        foodApi(2000, 'vegeterian').then((response) => {
            console.log(response.meals);

            // Set the meals
            setMeals({ ...meals, breakfast: response.meals[0].title, lunch: response.meals[1].title, dinner: response.meals[2].title });   

            console.log(meals);
        }).catch((error) => console.log(error));
    }
    
    // Function to get the meal image
    const getMealImage = (b, l, d) => { 
        if (b !== '' && l !== '' && d !== '') {
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
    }

    // UseEffect to get the images
    useEffect(() => {
        getMealImage(meals.breakfast, meals.lunch, meals.dinner);
    }, [meals]);
        

    return (
        <div>
            <h1>Meal Planner</h1>
            <button onClick={planMeals}>Plan Meals</button>
            <select name="diet" id="diet">
                <option value="vegeterian">Vegeterian</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="paleo">Paleo</option>
                <option value="vegan">Vegan</option>
                <option value="glutenFree">Gluten Free</option>
            </select>
            <Row>
                <Col size="md-4">
                    <h3>Breakfast</h3>
                    <Image src={bImages} />
                    <h4>{meals.breakfast}</h4>
                </Col>
                <Col size="md-4">
                    <h3>Lunch</h3>
                    <Image src={lImages} />
                    <h4>{meals.lunch}</h4>
                </Col>
                <Col size="md-4">
                    <h3>Dinner</h3>
                    <Image src={dImages} />
                    <h4>{meals.dinner}</h4>
                </Col>
            </Row>
        </div>
    )
}

export default Meal;