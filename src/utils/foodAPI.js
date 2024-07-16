import axios from "axios";

const BASEURL = "https://api.spoonacular.com/mealplanner/generate";
const APIKEY = "8054ad524f804f2ab3c5f2ab5af70590";

export default function search(targetCalories, diet) {
    // Make a request to the Spoonacular API to get meals for the day
    return axios.get(BASEURL, {
        params: {
            timeFrame: 'day',
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
