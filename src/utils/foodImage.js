import axios from "axios";

const BASEURL = "https://api.spoonacular.com/recipes/complexSearch";
const APIKEY = "8054ad524f804f2ab3c5f2ab5af70590";

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