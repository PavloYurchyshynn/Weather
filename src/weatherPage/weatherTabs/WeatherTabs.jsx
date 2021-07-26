import style from './WeatherTabs.module.css'
import { Tab } from "bootstrap"
import { Tabs } from "react-bootstrap"
import WeatherDay from "./weatherDay/WeatherDay"


const WeatherTabs = (props) => {
    return (
        <div className={style.weather_container}>
            <Tabs defaultActiveKey="day1" id="uncontrolled-tab-example" className={style.weather_tabs} transition={false}>
                <Tab eventKey="day1" title="day 1" className={style.weather_tab} >
                    < WeatherDay weatherData={props.weatherData} a={0} b={8} />
                </Tab>
                <Tab eventKey="day2" title="day 2" className={style.weather_tab} >
                    < WeatherDay weatherData={props.weatherData} a={8} b={16} />
                </Tab>
                <Tab eventKey="day3" title="day 3" className={style.weather_tab} >
                    < WeatherDay weatherData={props.weatherData} a={16} b={24} />
                </Tab>
                <Tab eventKey="day4" title="day 4" className={style.weather_tab} >
                    < WeatherDay weatherData={props.weatherData} a={24} b={32} />
                </Tab>
                <Tab eventKey="day5" title="day 5" className={style.weather_tab} >
                    < WeatherDay weatherData={props.weatherData} a={32} b={40} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default WeatherTabs