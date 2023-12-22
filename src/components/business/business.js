import React from 'react';
import styles from './Business.module.css';


//Represents how a business in Ravenous will be formated and styled.
function Business({business}){
   
    return (
    <div className={styles.Business}>
        <div className={styles.BusinessImage}>
            <img src={business.imageSrc} alt={business.name} />
        </div>
        <h2>{business.name}</h2>
        <div className={styles.BusinessInformation}>
            <div className={styles.BusinessAddress}>
                <h3>{business.address}</h3>
                <p>{business.city}</p>
                <p>{`${business.state}, ${business.zipCode}`}</p>
            </div>
            <div className={styles.BusinessReviews}>
                <h3>{business.category.toUpperCase()}</h3>
                <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                <p>{`${business.reviewCount} reviews`}</p>
            </div>
        </div>
    </div>
    );
};

export default Business;