import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import VisitedCountries from "../VisitedCountries/VisitedCountries";
import './Countries.css';
import NonVisitedCountries from "../NonVisitedCountries/NonVisitedCountries";

const Countries = () => {
    const [countries, setCountries]= useState([])
    const[visitedCountries, setVisitedCountries]=useState([]);
    const [nonVisitedCountries, setNonVisitedCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])


    const handleVisitedCountries=country=>{
      const newVisitedCountry=[...visitedCountries, country];
      setVisitedCountries(newVisitedCountry);
    }


    const handleNonVisitedCountries=country=>{
      const newNonVisitedCountry=[...nonVisitedCountries, country];
      setNonVisitedCountries(newNonVisitedCountry);
    }
    return (
        <div>
          <h1>Countries:{countries.length}</h1>
      <div className="countries-list">
       <div style={{backgroundColor:'#97CE68',margin:'10px',padding:'10px'}}>
       {
          visitedCountries.map(country=><VisitedCountries key={country.cca3} country={country}></VisitedCountries>)
        }
       </div>
       <div style={{backgroundColor:'#97CE68',margin:'10px',padding:'10px'}}>
        {
          nonVisitedCountries.map(country=><NonVisitedCountries key={country.cca3} country={country}></NonVisitedCountries>)
        }
       </div>
      </div>
        <div className="countries">
        {
            countries.map(country=><Country key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleNonVisitedCountries={handleNonVisitedCountries}></Country>)
          } 
        </div>
        </div>
    );
};

export default Countries;