
const Country = ({country}) => {
    console.log(country)
    const{name,continents,area,flags}= country
    return (
        <div style={{margin:'15px', padding:'15px', border:'2px solid blue', borderRadius:'10px'}}>
            <h3>Name:{name?.common}</h3>
            <h3>Continents:{continents}</h3>
            <img src={flags.png} alt="" />
            <h3>Area:{area}</h3>
            {/* <h3>Status:{status}</h3>
            <h3>Timezone:{timezones}</h3>
            <h3>Independent:{independent}</h3>
            <h3>Landlocked:{landlocked}</h3>
            <h3>Capital:{capital}</h3>
            <h3>Population:{population}</h3>
            <h3>Language:{languages}</h3> */}
        </div>
    );
};

export default Country;