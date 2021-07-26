import style from "./WeatherDay.module.css"

const WeatherDay = (props) => {
    return (
        <div className={style.main_item}>
            <div>
                <div>Дата:</div>
                <div>Час:</div>
                <div>Температура, °C </div>
                <div>Відчувається як </div>
                <div>Тиск, мм</div>
                <div>Вологість, % </div>
                <div>Ймовірність опадів, % </div>
            </div>
            <div className={style.weather_info}>
                {
                    props.weatherData.map(e =>
                        <div className={style.item}>
                            <div>
                                {e.dt_txt.slice(0, 11)}
                            </div>
                            <div>
                                {e.dt_txt.slice(11)}
                            </div>
                            <div>
                                {Math.round(e.main.temp - 273)}
                            </div>
                            <div>
                                {Math.round(e.main.feels_like - 273)}
                            </div>
                            <div>
                                {Math.round(e.main.pressure - 273)}
                            </div>
                            <div>
                                {e.main.humidity}
                            </div>
                            <div>
                                {e.pop != 0 ? Math.round(e.pop * 100) : e.pop}
                            </div>
                        </div>
                    ).slice(props.a, props.b)
                }
            </div>
        </div>
    )
}

export default WeatherDay