import React, { useState } from 'react';
import styles from './App.module.css';

import  BusinessList from '../components/BusinessList/BusinessList'
import SearchBar from '../components/SearchBar/SearchBar';
import search from '../utils/yelpRequests';

const App = () => {

  const [businessesList, setBusinessesList] = useState([]);

  const searchYelp = async(term, location, sortBy) => {
    try{
      console.log('Searching Yelp with term:', term, 'location:', location, 'sortBy:', sortBy);
      const results = await search(term, location, sortBy);
      setBusinessesList(results);
    }
    catch(error){
      console.log('Error fetching data from Yelp API', error)
    }
  }

  return (
    <>
      <div className={styles.App}>
      <h1>RAVENOUS</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businessesList={businessesList} />
      </div>
    </>
  )
}

export default App;
