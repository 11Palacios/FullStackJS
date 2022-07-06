import React from 'react';

const CountryList = ({filtered, handleClick}) => {
    return (
        filtered.map((country, index) => (
            <p key={index}>{country.name.common} <button onClick={() => handleClick(country.name.common)}>a</button></p>
          ))
    );
}

export default CountryList;
