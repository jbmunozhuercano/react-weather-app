import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./forecast.module.scss";

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();

    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    return (
        <div className={styles.accordion_outer}>
            <label className={styles.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 6).map((item, index) => (
                    <AccordionItem
                        key={index}
                        className={styles.accordion_item}
                    >
                        <AccordionItemHeading
                            className={styles.accordion_heading}
                        >
                            <AccordionItemButton>
                                <div className={styles.daily_item}>
                                    <img
                                        alt="weather"
                                        className={styles.icon_small}
                                        src={`icons/${item.weather[0].icon}.svg`}
                                    />
                                    <label className={styles.day}>
                                        {forecastDays[index]}
                                    </label>
                                    <label className={styles.description}>
                                        {item.weather[0].description}
                                    </label>
                                    <label className={styles.min_max}>
                                        {item.main.temp_min.toFixed(0)} &#8451;
                                        / {item.main.temp_max.toFixed(0)}{" "}
                                        &#8451;
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={styles.accordion_panel}>
                            <div className={styles.daily_details_grid}>
                                <div className={styles.daily_details_grid_item}>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className={styles.daily_details_grid_item}>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className={styles.daily_details_grid_item}>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className={styles.daily_details_grid_item}>
                                    <label>Wind speed:</label>
                                    <label>
                                        {item.wind.speed.toFixed(0)} m/s
                                    </label>
                                </div>
                                <div className={styles.daily_details_grid_item}>
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className={styles.daily_details_grid_item}>
                                    <label>Feels like:</label>
                                    <label>
                                        {item.main.feels_like.toFixed(0)}&#8451;
                                    </label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;
