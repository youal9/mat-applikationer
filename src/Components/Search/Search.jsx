import React, { useState, useRef } from 'react';
import './Search.css'

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState('');
  
  const [searchError, setSearchError] = useState('');

  const searchRef = useRef(null);

  const handleSearchClick = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRef.current.value}`);
    const data = await response.json();
    console.log(data);
    if (data.meals) {
      setFoodData(data.meals);
      setSearchError('');
     
    } else {
      setFoodData([]);
      setSearchError('Maten finns inte!'); /*  Det här sätter ett felmeddelande, på maten som inte existera */
    }
    
  };

  return (
    <div className='search' >
      <input className='input'  value={query} ref={searchRef} onChange={(e) => setQuery(e.target.value)} type="text" />
      <button disabled={!query.trim()} onClick={handleSearchClick}>Search</button>
     
      {searchError && <p className='searchError'>{searchError}</p>}
    </div>
  );
};

export default Search;
