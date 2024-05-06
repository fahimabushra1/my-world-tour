

const NonVisitedCountries = ({country}) => {
  const {name}=country;
    return (
        <div>
          <h3 style={{color:'#5659C9'}}>Countries that I want to visit</h3>
          <ol>
            <li>{name?.common}</li>
          </ol>
        </div>
    );
};

export default NonVisitedCountries;