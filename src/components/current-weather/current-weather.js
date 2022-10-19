import styles from "./current-weather.module.scss";

const CurrentWeather = ({ data }) => {
    return (
        <div className={styles.weather}>
            <div className={styles.top}>
                <div>
                    <p className={styles.city}>{data.city}</p>
                    <p className={styles.weather_description}>
                        {data.weather[0].description}
                    </p>
                </div>
                <img
                    alt="weather"
                    className={styles.weaher_icon}
                    src={`icons/${data.weather[0].icon}.svg`}
                />
            </div>
            <div className={styles.bottom}>
                <p className={styles.temperature}>
                    {data.main.temp.toFixed(0)}&#8451;
                </p>
                <div className={styles.details}>
                    <div className={styles.parameter_row}>
                        <span className={styles.parameter_label}>Details</span>
                    </div>
                    <div className={styles.parameter_row}>
                        <span className={styles.parameter_label}>
                            Feels like
                        </span>
                        <span className={styles.parameter_value}>
                            {data.main.feels_like.toFixed(0)} &#8451;
                        </span>
                    </div>
                    <div className={styles.parameter_row}>
                        <span className={styles.parameter_label}>Wind</span>
                        <span className={styles.parameter_value}>
                            {data.wind.speed.toFixed(0)} m/s
                        </span>
                    </div>
                    <div className={styles.parameter_row}>
                        <span className={styles.parameter_label}>Humidity</span>
                        <span className={styles.parameter_value}>
                            {data.main.humidity} %
                        </span>
                    </div>
                    <div className={styles.parameter_row}>
                        <span className={styles.parameter_label}>Pressure</span>
                        <span className={styles.parameter_value}>
                            {data.main.pressure} hPa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
