import React, { useState, useEffect } from 'react';
import Image from '../Components/Image';
import Container from '../Components/Container';
import Row from '../Components/Row';
import Col from '../Components/Col';
import Alert from '../Components/Alert';
import foodApi from '../utils/foodAPI';
import foodImage from '../utils/foodImage';

function Meal() {
    // State to hold diet and calories
    const [diet, setDiet] = useState('');
    const [calories, setCalories] = useState(0);

    // State to hold the meals
    const [meals, setMeals] = useState({ breakfast: '', lunch: '', dinner: '' });
    const [nutritional, setNutritional] = useState({ calories: '', fat: '', protein: ''});

    // State to hold the images
    const [bImages, setBImages] = useState('');
    const [lImages, setLImages] = useState('');
    const [dImages, setDImages] = useState('');

    // Function to plan the meals
    const planMeals = (e) => {
        e.preventDefault(); 

        // If the user doesn't enter a diet, set it to none
        if (diet === '') {
            setDiet('none');
        }

        // If the user doesn't enter a calorie amount, set it to 2000
        if (calories === 0) {
            setCalories(2000);
        }


        foodApi(calories, diet).then((response) => {
            // Set the meals
            setMeals({ ...meals, breakfast: response.meals[0].title, lunch: response.meals[1].title, dinner: response.meals[2].title });  
            
            // Set the nutritional information
            setNutritional({ ...nutritional, calories: response.nutrients.calories, carbohydrates: response.nutrients.carbohydrates, fat: response.nutrients.fat, protein: response.nutrients.protein});
            
            console.log(response, nutritional, calories, diet);

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
            <form onSubmit={planMeals}>
                <Container className="mt-3 px-5">
                    <Row className="mb-3">
                        <Col size="5">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Try a diet?"
                                name="diet"
                                onChange={(event) => setDiet(event.target.value)}
                                
                                
                            />
                        </Col>
                        <Col size="7">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="How many calories today?"
                                name="calories"
                                onChange={(event) => setCalories(event.target.value)}
                            
                                
                            />
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-success">
                        Plan Yor Meals
                    </button>
                </Container>
            </form>
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
            <Row>
                <Col size="md-12">
                    <h3>Nutritional Information</h3>
                    <p>Calories: {nutritional.calories}</p>
                    <p>Carbohydrates: {nutritional.carbohydrates}</p>
                    <p>Fat: {nutritional.fat}</p>
                    <p>Protein: {nutritional.protein}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Meal;