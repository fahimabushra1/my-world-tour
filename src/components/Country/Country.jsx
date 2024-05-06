import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries, handleNonVisitedCountries}) => {
    const{name,continents,area,flags,status,cca3}= country
    const[visited, setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountries)
    return (
        <div className="country">
           <div className='visited-country'>
           <div>
           <h2 style={{color:'blue', fontSize:'35px'}}>{name?.common}</h2>
            <h2 style={{color:'#7E3661',fontSize:'30px'}}>{continents}</h2>
           </div>
           <div>
           <button style={{backgroundColor:visited?'green':'red', marginTop:'40px'}} onClick={handleVisited}>{visited?'Visited': 'Visit'}</button>
           </div>
           </div>
            <img style={{width:'300px'}} src={flags.png} alt="" />
         <div style={{color:'#F04903', lineHeight:'10px'}}>
            <p>Area:{area}</p>
            <p>Status:{status}</p>
            <p>Code:{cca3}</p>
            <button style={{backgroundColor:'#5659C9',margin:'10px'}} onClick={()=> handleNonVisitedCountries(country)}>I want to visit</button>
            <button style={{backgroundColor:'#953163',margin:'10px'}} onClick={()=> handleVisitedCountries(country)}>I have visited</button>
         </div>
        </div>
    );
};

export default Country;