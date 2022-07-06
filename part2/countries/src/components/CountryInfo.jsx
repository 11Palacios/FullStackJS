import React from 'react';

const CountryInfo = ({country, weather}) => {
    return (
        <div>
                <h1>{country.name.common}</h1>
                  <p>Capital {country.capital}</p>
                  <p>Population {country.population}</p>
                  <h2>Spoken languages</h2>
                  <ul>
                  {Object.values(country.languages).map((country, index) => (
                    <li key={index}>{country}</li>
                  ))}
                  </ul>
                  <div>
                  <img src={country.flags.svg} alt={`flag of ${country.name.common}`} width='250px' />
                  </div>
                  <div>
                    <h2>Weather in {country.capital}</h2>
                    <p><b>temperature:</b> {weather.temperature} celsius</p>
                    {/*<img src={weather.weather_icons[0]} alt={`weather in ${country.capital}, ${weather.weather_descriptions[0]}`} />
                    <p><b>wind:</b> {weather.wind_speed} direction {weather.wind_dir}</p>*/}
                  </div>
        </div>
    );
}

export default CountryInfo;
