import React from 'react';
import './Countries.css';
import './SearchBar'
import SearchBar from './SearchBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];

function Countries() {
  return (
    <div className='container'>
      <SearchBar/>
      <Dropdown className='dropdown' options={options} placeholder="Select an option"/>
    </div>
  )
}

export default Countries;