import React from "react"
import { connect } from "react-redux"
import { getWeather } from "../redux/weather-reduser"
import WeatherHeader from "./weatherHeader/WeatherHeader"
import WeatherTabs from "./weatherTabs/WeatherTabs"

class WeatherPageContainer extends React.Component {

    componentDidMount() {
        this.props.getWeather(this.state.city)
    }

    constructor(props) {
        super(props);
        this.state = {
            city: 'London',
        }
        this.submitCity = this.submitCity.bind(this)
        this.changeCity = this.changeCity.bind(this)
    }

    submitCity = (e) => {
        this.props.getWeather(this.state.city)
        e.preventDefault()
    }

    changeCity = (e) => {
        this.setState({
            city: e.target.value,
        })
    }

    render() {
        return (
            <div>
                < WeatherHeader submitCity={this.submitCity} state={this.state} changeCity={this.changeCity} />
                < WeatherTabs weatherData={this.props.weatherData} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        weatherData: state.weatherPage.list,
    }
}

export default connect(mapStateToProps,
    {
        getWeather,
    })(WeatherPageContainer)