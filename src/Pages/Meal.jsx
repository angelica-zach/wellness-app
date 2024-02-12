import React, { useState, useEffect } from 'react';
import Image from '../components/Image/index.jsx';
import Container from '../components/Container/index.jsx';
import Row from '../components/Row/index.jsx';
import Col from '../components/Col/index.jsx';
import foodApi from '../utils/foodAPI';
import foodImage from '../utils/foodimage';


function Meal() {
    // State to hold diet and calories
    const [diet, setDiet] = useState('');
    const [calories, setCalories] = useState(0);

    // State to hold the meals
    const [meals, setMeals] = useState({ breakfast: '', lunch: '', dinner: '' });

    // State to hold the images
    const [bImages, setBImages] = useState('');
    const [lImages, setLImages] = useState('');
    const [dImages, setDImages] = useState('');

    // Function to plan the meals
    const planMeals = (e) => {
        e.preventDefault(); 


        foodApi(calories, diet).then((response) => {
            // Set the meals
            setMeals({ ...meals, breakfast: response.meals[0].title, lunch: response.meals[1].title, dinner: response.meals[2].title });  
            
            console.log(response, calories, diet);

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
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Would you like to try a diet"
                                name="diet"
                                onChange={(event) => setDiet(event.target.value)}
                                
                                
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="how many calories would you like to consume today?"
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
        </div>
    )
}

export default Meal;