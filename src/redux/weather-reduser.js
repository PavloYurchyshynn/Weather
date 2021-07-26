import { weatherAPI } from "../api/api"

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'

let initialState = {
    list: [],
};

const weatherReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA: {
            return { ...state, list: action.list }
        }
        default:
            return state;
    }
}

export const setWeatherData = (list) => ({ type: SET_WEATHER_DATA, list})

export const getWeather = (cityName) => {
    
    return (dispatch) => {
        weatherAPI.getWeather(cityName).then(data => {
            dispatch(setWeatherData(data.list))
        })
    }
}

export default weatherReduser