import axios from "axios";

const BASEURL = "https://api.spoonacular.com/recipes/complexSearch";
const APIKEY = "c59eb3fe359d44128c5026a4d4f4add8";

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