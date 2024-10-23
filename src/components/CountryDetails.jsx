import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryDetails.css";

function CountryDetails() {
  const { countryCode } = useParams(); //get country code from url
  const [country, setCountry] = useState(null);

  // fetch data
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error! ✋🏽", error);
      }
    };
    fetchCountryData();
  }, [countryCode]);

  if (!country) return <div>"Loading..."</div>;

  return (
    <>

      <div className="flag-details-container">
        {/* <div className='country-flag'> */}
        <img
          className="flag-img"
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
        {/* </div> */}
          <div className="country-details-2">
        <div className="country-details">
          <div className="country-details-left">
            <div className="country-name">{country.name.common}</div>
            <p>
              <strong>Native Name:</strong> {country.name.official}
            </p>
            <p>
              <strong>Population:</strong> {country.population}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p>
              <strong>Capital:</strong>
              {country.capital}
            </p>
          </div>
          <div className="country-details-right">
            <p>
              <strong>Top Level Domain:</strong> {country.tld.join(", ")}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {Object.values(country.languages).join(", ")}
            </p>
          </div>
        </div>
        <div className="country-details-bottom">
              <p>
                <strong>Border Countries:</strong>
                {country.borders?.length > 0 ? (
                  country.borders.map((borderCode) => (
                    <Link to={`/country/${borderCode}`} key={borderCode}>
                    <button key={borderCode} className="border-button">
                      {borderCode}
                    </button>
                    </Link>
                  ))
                ) : (
                  <span>None</span>
                )}
              </p>
              </div>
            </div>
      </div>
      
    </>
  );
}

export default CountryDetails;
