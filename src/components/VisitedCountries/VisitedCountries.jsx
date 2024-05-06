

const VisitedCountries = ({country}) => {
    console.log(country)
    const {name}=country
    return (
        <div>
            <h3 style={{color:'#953163'}}>My visited countries</h3>
            <ol>
                <li>{name?.common}</li>
            </ol>
        </div>
    );
};

export default VisitedCountries;