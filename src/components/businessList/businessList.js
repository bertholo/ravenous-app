import React from 'react';
import Business from '../Business/Business'
import styles from './BusinessList.module.css';


//Displays a list of businesses using the business component.
function BusinessList({businessesList}) {
    return (
        <div className={styles.BusinessList}>
            {businessesList.map((business) => (
                <Business key={business.id} business={business} />
            ))}
        </div>
    );
}

export default BusinessList;