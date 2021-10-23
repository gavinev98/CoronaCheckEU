import axios from 'axios';

export const covidInfections = () => axios.get('https://api.covid19api.com/summary');

