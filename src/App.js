import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [addCountry, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, []);
  
  const handleAddCountry = (country) => {
    setCountry([...addCountry, country]);
  };
  const loadedCountryStyle = {
    textAlign: 'center',
    marginBottom: '70px',
    marginTop: '40px'
  }
  return (
    <div className="App">
      <div style={loadedCountryStyle}>
        <h1>Number of country loaded: {countries.length}</h1>
        <h2>Number of country added: {addCountry.length}</h2>
        <Cart addCountry={addCountry}></Cart>
      </div>
      <div className="parent-container">
      {
        countries.map((country) => <Country key={country.alpha3Code} country={country} className="country" handleAddCountry={handleAddCountry}></Country>)
      }
      </div> 
    </div>
  );
}

export default App;
