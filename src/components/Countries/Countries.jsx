import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries]= useState([])
    const[visitedCountries, setVisitedCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])


    const handleVisitedCountries=country=>{
      const newVisitedCountrty=[...visitedCountries, country];
      setVisitedCountries(newVisitedCountrty);
    }
    return (
        <div>
          <h1>Countries:{countries.length}</h1>
        <div className="countries">
        {
            countries.map(country=><Country key={country.cca3}
               country={country}
               handleVisitedCountries={ handleVisitedCountries}
               ></Country>)
          } 
        </div>
        </div>
    );
};

export default Countries;