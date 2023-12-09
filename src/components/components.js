import React from "react";
import foodVideo from '../media/foodVideo.mp4';
import './components.css';

//Represents how a business in Ravenous will be formated and styled.
function Business(){
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }
    return (
    <li className="business">
        <img src={business.imageSrc} alt={business.name} />
        <h3 id="name">{business.name}</h3>
        <p id="location"><strong>{business.address}</strong><br />
        {business.city}<br />
        {business.state}, {business.zipCode}<br /></p>
        <p id="reputation"><strong>{business.category}</strong><br />
        <strong>{business.rating} stars</strong><br />
        {business.reviewCount} reviews<br /></p>
    </li>
    );
};

//Displays a list of businesses using the business component.
function BusinessList() {
    const businessesList = [{
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }, {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }, {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }];
    return (
        <ul>
            {businessesList.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </ul>
    );
}

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


export { BusinessList , SearchBar };
