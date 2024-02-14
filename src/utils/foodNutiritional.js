import axios from "axios";

const BASEURL = 'https://api.spoonacular.com/recipes/${id}/nutritionWidget.json'
const APIKEY = "2eb1697fecda4993acc67dd97f37b05b";

export default function search(id) {
    return axios.get(BASEURL, {
        params: {
            id: id,
            apiKey: APIKEY
        }
    }).then(response => {
        console.log(response);
        return response;
    }).catch(error => {
        console.error('Error fetching meals:', error);
        throw error;
    })
}