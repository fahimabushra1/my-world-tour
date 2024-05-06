
const VisitedCountries = ({country}) => {
    const {name}= country;

    return (
        <div>
            <ul>
                <li>{name?.common}</li>
            </ul>
        </div>
    );
};

export default VisitedCountries;