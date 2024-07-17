import { useEffect, useState } from 'react';
import './Countries.css';
import './SearchBar'
import SearchBar from './SearchBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];

const URL = "https://restcountries.com/v3.1/all"

function Countries() {

  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      console.log(result.json());
    }
    fetchData();
  })

  return (
    <div className='container'>
      <SearchBar/>
      <Dropdown className='dropdown' options={options} placeholder="Select an option"/>

    </div>
  )
}

export default Countries;