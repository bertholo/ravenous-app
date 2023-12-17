import React, { useState } from 'react';
import foodVideo from '../media/foodVideo.mp4';
import styles from './SearchBar.module.css';

//SearchBar component search for businesses on the yelp platform

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

function SearchBar() {

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleTerm = (event) => {
        setTerm(event.target.value);
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const handleSortBy = (sortByOption) => {
        setSortBy(sortByOption);
    }

    const handleSubmitButton = (event) => {
        event.preventDefault();
        
        console.log(`searching Yelp with ${term}, ${location}, ${sortBy}`);
        
    }
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((option) => {
            let sortByOptionValue = sortByOptions[option];
            return <li key={sortByOptionValue}
            onClick={() => {handleSortBy(sortByOptionValue)}}
            tabIndex='0'
            >{option}</li>
        })
    }

    return (
    <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
            <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
            <input value={term} onChange={handleTerm} placeholder="Enter a restaurant"/>
            <input value={location} onChange={handleLocation} placeholder="Enter a location"/>
        </div>
        <button className={styles.SearchBarSubmit} onClick={handleSubmitButton}>Let's Go!</button>
        <video src={foodVideo} autoPlay loop muted />
    </div>
    )
}

export default SearchBar;