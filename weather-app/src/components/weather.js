import React from 'react';

const Weather = (props) => {
    return (
        <div>
            <p className="weather__paragraph">Country:<span>{props.country}</span></p>
            <p className="weather__paragraph">City:<span>{props.city}</span></p>
            <p className="weather__paragraph">Temperature:<span>{props.temp}</span></p>
            <p className="weather__paragraph">Humidity:<span>{props.humidity}</span></p>
            <p className="weather__paragraph">Weather Description:<span>{props.description}</span></p>
            <p className="weather__paragraph"><span>{props.error}</span></p>
        </div>
    );
}

export default Weather;