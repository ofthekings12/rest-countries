import { useEffect, useState } from "react";
import "./Countries.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["one", "two", "three"];

const URL = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const data = await result.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="container">
      <SearchBar />
      <Dropdown
        className="dropdown"
        options={options}
        placeholder="Select an option"
      /> 
      </div>
      <div className="countries-grid">
        {countries.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="country-flag"
            />
            <h3>{country.name.common}</h3>
            <p>{country.reigon}</p>
          </div>
        ))}
      </div>
      </>
  );
}

export default Countries;
