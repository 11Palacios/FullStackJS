import {useState, useEffect} from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import CountryList from './components/Country.List';
import CountryInfo from './components/CountryInfo';

function App() {
  const [allCountries, setAllCountries] = useState();
  const [loaded, setLoaded] = useState(false);
  const [filtered, setFiltered] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setAllCountries(response.data);
      setLoaded(true);
    })
  }, [])
  if(filtered !== undefined){
    if(filtered.length === 1 && weather === undefined){
      const link = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${filtered[0].capital}`
    axios.get(link)
    .then(response=>{
      setWeather(response.data);
    })
    }
  }
console.log(weather)
  const handleInput = (e) => {
    setFiltered(allCountries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const handleClick = (name) => {
    setFiltered(allCountries.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase())))
  }


  return (
    <div>
      <SearchInput handleInput={handleInput} />
    {
    loaded ?   
      filtered === undefined || filtered.length === 250 
      ? 
        <p>please type a country</p> 
      :
        filtered.length === 1 ?
            <CountryInfo country={filtered[0]} weather={weather} />
            :

            filtered.length > 10 ?
            <p>please, be more specific</p>
            :
              <CountryList filtered={filtered} handleClick={handleClick}/>
    :
    <p>loading...</p>
    }
    </div>
  );
}

export default App;
