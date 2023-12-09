import React from 'react';
import foodVideo from '../media/foodVideo.mp4';
import './searchBar.css';

//SearchBar component search for businesses on the yelp platform

function SearchBar() {
    return (
    <div className="header">
        <h1 id="ravenous">RAVENOUS</h1>
        <div id="anchor">
        <a href="" >Best<br />
        match</a>
        <a href="" >Highest<br />
        rated</a>
        <a href="" >Most<br />
        reviwed</a>
        </div>
        <form id="searchBar" action="#" method="GET">
            <div className="input">
            <input type="text" name="terms" placeholder="Enter a restaurant"/>
            <input type="text" name="location" placeholder="Enter a location"/>
            </div>
            <button id="btn" >Let's Go!</button>
        </form>
        <video src={foodVideo} autoPlay loop muted />
    </div>
    )
}

export default SearchBar;