const axios = require('axios');

const getClima = async (lat, lng) => {

    let key = 'e1abca7f8ded8d135d36d7e9cb7c52d4';
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ key }`);

    let temp = resp.data.main.temp;
    return temp;
};

module.exports = {
    getClima
};