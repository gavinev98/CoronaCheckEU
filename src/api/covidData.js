import axios from 'axios';

//export global data via axios call
export const covidInfections = () => axios.get('https://api.covid19api.com/summary');
//export call for list of countries supported by api.
export const covidCountries = () => axios.get('https://api.covid19api.com/countries');
//api call to retrieve country selected  data.
export const covidCountry  = (country, date) => axios.get(`https://api.covid19api.com/total/country/${country}status/confirmed/date/${date}`);