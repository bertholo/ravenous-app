import React from 'react';
import foodVideo from '../media/foodVideo.mp4';
import styles from './SearchBar.module.css';

//SearchBar component search for businesses on the yelp platform

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

function SearchBar() {

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((option) => {
            let sortByOptionValue = option[sortByOptions];
            return <li key={sortByOptionValue}>{option}</li>
        })
    }

    return (
    <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
            <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
            <input placeholder="Enter a restaurant"/>
            <input placeholder="Enter a location"/>
        </div>
            <button className={styles.SearchBarSubmit} >Let's Go!</button>
        <video src={foodVideo} autoPlay loop muted />
    </div>
    )
}

export default SearchBar;