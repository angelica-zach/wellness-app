import axios from "axios";

const BASEURL = "https://api.spoonacular.com/mealplanner/generate";
const APIKEY = "c59eb3fe359d44128c5026a4d4f4add8";

export default function search(timeFrame, targetCalories, diet, exclude, apiKey) {
    // Make a request to the Spoonacular API to get meals for the day
    return axios.get(BASEURL, {
        params: {
            timeFrame: timeFrame,
            targetCalories: targetCalories, 
            diet: diet,
            apiKey: APIKEY, 
        }
    }).then(response => {
        
        return response.data;
    }).catch(error => {
        console.error('Error fetching meals:', error);
        throw error; 
    });
}
