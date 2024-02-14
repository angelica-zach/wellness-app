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


// {
//     "meals": [
//         {
//             "id": 632577,
//             "imageType": "jpg",
//             "title": "Apple Pie Pancakes",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "https://spoonacular.com/apple-pie-pancakes-632577"
//         },
//         {
//             "id": 645315,
//             "imageType": "jpg",
//             "title": "Greek Inspired Spring Omelet",
//             "readyInMinutes": 20,
//             "servings": 1,
//             "sourceUrl": "https://spoonacular.com/greek-inspired-spring-omelet-645315"
//         },
//         {
//             "id": 652433,
//             "imageType": "jpg",
//             "title": "Moroccan Lemon Shish Kebabs",
//             "readyInMinutes": 45,
//             "servings": 8,
//             "sourceUrl": "https://spoonacular.com/moroccan-lemon-shish-kebabs-652433"
//         }
//     ],
//         "nutrients": {
//         "calories": 290.81,
//             "protein": 26.53,
//                 "fat": 10.17,
//                     "carbohydrates": 25.69
//     }
// }