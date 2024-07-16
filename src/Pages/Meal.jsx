import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from '../Components/Image';
import Container from '../Components/Container';
import Row from '../Components/Row';
import Col from '../Components/Col';
import Alert from '../Components/Alert';
import foodApi from '../utils/foodAPI';
import foodImage from '../utils/foodImage';
import foodNutritional from '../utils/foodNutiritional';

function Meal() {
    // State to hold diet and calories
    const [diet, setDiet] = useState('');
    const [calories, setCalories] = useState(0);

    //Set visible
    const [visible, setVisible] = useState(false);

    // State to hold the meals
    const [meals, setMeals] = useState({ breakfast: '', lunch: '', dinner: '' });

    // State to hold the nutritional information
    const [nutritional, setNutritional] = useState({ calories: '', carbohydrates: '', fat: '', protein: '' });
    const [nutritionalInfo, setNutritionalInfo] = useState({ breakfast: '', lunch: '', dinner: '' });

    // State to hold the images
    const [bImages, setBImages] = useState('');
    const [lImages, setLImages] = useState('');
    const [dImages, setDImages] = useState('');

    // State to hold Animation
    const [animate, setAnimate] = useState(false);
    const [animateNutr, setAnimateNutr] = useState(false);

    // State to hold window size
    const [size, setSize] = useState({ width: undefined, height: undefined });

    //Window size

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        console.log(size)


        return () => window.removeEventListener("resize", handleResize);
    }, []);





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
            setNutritionalInfo({ ...nutritionalInfo, breakfast: response.meals[0].sourceUrl, lunch: response.meals[1].sourceUrl, dinner: response.meals[2].sourceUrl });
            console.log(nutritionalInfo);

            // Set the nutritional information
            setNutritional({ ...nutritional, calories: response.nutrients.calories, carbohydrates: response.nutrients.carbohydrates, fat: response.nutrients.fat, protein: response.nutrients.protein });

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

    // Function to get the nutritional information
    // const getNutritional = (b, l, d) => {
    //     if (b !== '' && l !== '' && d !== '') {
    //         foodNutritional(mealsId.breakfast).then((response) => {
    //             console.log(response);
    //             // setBNutritional({ ...bNutritional, calories: response.data.calories, fat: response.data.fat, protein: response.data.protein });
    //         }).catch((error) => console.log(error));
    //         foodNutritional(l).then((response) => {
    //             console.log(response);
    //             // setLNutritional({ ...lNutritional, calories: response.data.calories, fat: response.data.fat, protein: response.data.protein });
    //         }).catch((error) => console.log(error));
    //         foodNutritional(d).then((response) => {
    //             console.log(response);
    //             // setDNutritional({ ...dNutritional, calories: response.data.calories, fat: response.data.fat, protein: response.data.protein });
    //         }).catch((error) => console.log(error));
    //     }
    // }

    // UseEffect to get the images and nutritional information
    useEffect(() => {
        getMealImage(meals.breakfast, meals.lunch, meals.dinner);
        // console.log(bNutritional, lNutritional, dNutritional);
        // getNutritional(meals.breakfast, meals.lunch, meals.dinner);

    }, [meals]);


    return (
        <div className='meal-page'>
            <h1 id='meal-title'>Meal Planner</h1>
            <form onSubmit={planMeals}>
                <div className='row forms'>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h4>Pick a Diet</h4>
                        <input
                            className="form-diet"
                            id='diet-input'
                            type="text"
                            placeholder="Try a diet?"
                            name="diet"
                            onChange={(event) => setDiet(event.target.value)}
                        />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h4>Set your Calories</h4>
                        <input
                            className="form-calories"
                            id='cal-input'
                            type="number"
                            placeholder="How many calories today?"
                            name="calories"
                            onChange={(event) => setCalories(event.target.value)}
                        />
                    </div>

                </div>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => {
                        setAnimate(true);
                    }} type="submit" className="btn btn-success d-flex justify-content-center col-md-2">
                        Plan Yor Meals
                    </button>
                </div>
            </form>
            <div>
                {size.width}
            </div>
            <Container>
                <Row>
                    {size.width >= 768 ? (
                        <motion.div animate={{ scale: animate ? 1 : 0 }} className='images d-flex justify-content-around align-items-center'>
                            <Col size="md-4 sm-12">
                                <h3>Breakfast</h3>
                                <Image src={bImages} />
                                <h4>{meals.breakfast}</h4>
                                <h3><a href={nutritionalInfo.breakfast} target="_blank"><button className="btn btn-success">Get Recipe</button></a></h3>
                            </Col>
                            <Col size="md-4">
                                <h3>Lunch</h3>
                                <Image src={lImages} />
                                <h4>{meals.lunch}</h4>
                                <h3><a href={nutritionalInfo.lunch} target="_blank"><button className="btn btn-success">Get Recipe</button></a></h3>
                            </Col>
                            <Col size="md-4">
                                <h3>Dinner</h3>
                                <Image src={dImages} />
                                <h4>{meals.dinner}</h4>
                                <h3><a href={nutritionalInfo.dinner} target="_blank"><button className="btn btn-success">Get Recipe</button></a></h3>
                            </Col>
                        </motion.div>) : (
                        <motion.div
                        style={{padding: "10%x"}}
                            animate={{ scale: animate ? 1 : 0 }}>
                            <Col size="12">
                                <h3>Breakfast</h3>
                                <Image src={bImages} />
                                <h4>{meals.breakfast}</h4>
                                <h3><a href={nutritionalInfo.breakfast} target="_blank"><button className="btn btn-success">Get Recipe</button></a></h3>
                                <h3>Lunch</h3>
                                <Image src={lImages} />
                                <h4>{meals.lunch}</h4>
                                <h3><a href={nutritionalInfo.lunch} target="_blank"><button className="btn btn-success">Get Recipe</button></a></h3>
                                <h3>Dinner</h3>
                                <Image src={dImages} />
                                <h4>{meals.dinner}</h4>
                                <h3><a href={nutritionalInfo.dinner} target="_blank"><button className="btn btn-success">Get Recipe</button></a></h3>
                            </Col>
                        </motion.div>
                    )}
                </Row>
                <Row>
                    <Col size="md-12">
                        <motion.div animate={{ scale: animate ? 1 : 0 }} className='nutritional d-flex justify-content-center'>
                            <button onClick={() => setAnimateNutr(!animateNutr)} className="btn btn-success d-flex justify-content-center col-md-2">Total Nutritional Info</button>
                        </motion.div>

                    </Col>
                </Row>

                <motion.div animate={{ scale: animateNutr ? 1 : 0 }} className='nutr d-flex flex-column justify-content-around'>
                    <Row>
                        <Col size="md-3">
                            <p>
                                <strong>Calories:</strong> {nutritional.calories}
                            </p>
                        </Col>
                        <Col size="md-3">
                            <p>
                                <strong>Carbohydrates:</strong> {nutritional.carbohydrates}
                            </p>
                        </Col>
                        <Col size="md-3">
                            <p>
                                <strong>Fat:</strong> {nutritional.fat}
                            </p>
                        </Col>
                        <Col size="md-3">
                            <p>
                                <strong>Protein:</strong> {nutritional.protein}
                            </p>
                        </Col>
                    </Row>
                </motion.div>
            </Container>

        </div >
    )
}

export default Meal;