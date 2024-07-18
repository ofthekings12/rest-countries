import { useEffect, useState } from "react";
import "./Countries.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";



const URL = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const data = await result.json();
      setCountries(data);
      const uniqueRegions = [...new Set(data.map(country => country.region))];
      setRegions(uniqueRegions)
    }
    fetchData();
  }, []);

  const handleDropdownChange = (option) => {
    setSelectedRegion(option.value);
  }

  const filteredCountries = countries.filter(country => {
    return (
      (!selectedRegion || country.region === selectedRegion) &&
      (!searchTerm || country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });


  return (
    <>
    <div className="container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Dropdown
        className="dropdown"
        options={regions}
        onChange={handleDropdownChange}
        placeholder="Filter by Region"
      /> 
      </div>
      <div className="countries-grid">
        {filteredCountries.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="country-flag"
            />
            <div className='country-info'>
            <h3>{country.name.common}</h3>
            <p><b>Population:</b> {country.population}</p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Capital:</b> {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
      </>
  );
}

export default Countries;
