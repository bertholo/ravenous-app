import React from 'react';
import Business from '../business/business'
import './businessList.css';


//Displays a list of businesses using the business component.
function BusinessList({businessesList}) {
    return (
        <ul>
            {businessesList.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </ul>
    );
}

export default BusinessList;