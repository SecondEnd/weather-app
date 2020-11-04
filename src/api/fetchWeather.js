import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '5d72e79dc093c287d0b1ca048dac9ebc'

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    });

    return data;
}