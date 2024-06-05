import { BASE_URL, urlPostfix } from "./constants";
import axios from 'axios';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export const stringToUrl = (inputString) => {
    return inputString.toLowerCase().replace(/ /g, '-');
};

export const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};


// API Functions
export const getPosts = () =>{
    return axios.get(`${BASE_URL}/post${urlPostfix}`)
    .then(response => {
        if(response.data.length > 0){
            const sortedData = response.data.sort((a,b) => new Date(b.date) - new Date(a.date));
            return sortedData;
        }
    })
    .catch((error) =>{
        console.log(error);
    })
}

export const getImageUrl = (imagePath) => {
    return `${BASE_URL}${imagePath}${urlPostfix}`;
}