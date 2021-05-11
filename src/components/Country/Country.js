import React from "react";
import "./Country.css";

const Country = (props) => {
   const {name, capital, flag, population, region, languages} = props.country;
   const handleAddCountry = props.handleAddCountry;
   return (
      <div className="country-container">
         <h3>{name}</h3>
         <img className="flag" src={flag} alt="" width="80"/>
         <p>capital: {capital}</p>
         <p>languages: {languages[0].nativeName}, {languages[0].name}</p>
         <p>population: {population}</p>
         <p>region: {region}</p>
         <button onClick={() => handleAddCountry(props.country)} className="add-btn">Add Country</button>
      </div>
  );
};

export default Country;
