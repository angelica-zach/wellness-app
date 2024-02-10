import axios from "axios";

const BASEURL = "https://api.spoonacular.com/recipes/complexSearch";
const APIKEY = "";

export default function search(query) {
    return axios.get(BASEURL, {
        params: {
            number: 1,
            query: query,
            apiKey: APIKEY
        }
    }).then(response => {
        return response;
    }).catch(error => {
        console.error('Error fetching meals:', error);
        throw error;
    });

}