import style from './WeatherHeader.module.css'


const WeatherHeader = (props) => {
    return (
        <header className={style.weather_header}>
            <form onSubmit={props.submitCity}>
                <input className={style.header_input} type='text' placeholder='Введіть назву міста' value={props.state.city} onChange={props.changeCity} />
            </form>
        </header>
    )
}

export default WeatherHeader