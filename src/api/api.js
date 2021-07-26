import * as axios from "axios"

export const weatherAPI = {
    getWeather(cityName) {
        return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=793d0db5ad5ccd58ba8cfe9a64bb4fce`)
            .then(response => {
                return response.data
            })
    }
}