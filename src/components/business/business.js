import React from 'react';
import './business.css';

//Represents how a business in Ravenous will be formated and styled.
function Business({business}){
   
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

export default Business;