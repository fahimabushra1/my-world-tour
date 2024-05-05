import './Country.css';
const Country = ({country}) => {
    console.log(country)
    const{name,continents,area,flags,status}= country
    return (
        <div className="country">
            <h2 style={{color:'blue', fontSize:'35px'}}>{name?.common}</h2>
            <h2 style={{color:'#7E3661',fontSize:'30px'}}>{continents}</h2>
            <img style={{width:'300px'}} src={flags.png} alt="" />
         <div style={{color:'#F04903', lineHeight:'10px'}}>
            <p>Area:{area}</p>
            <p>Status:{status}</p>
            {/* <p>Timezone:{timezones}</p> */}
         </div>
        </div>
    );
};

export default Country;