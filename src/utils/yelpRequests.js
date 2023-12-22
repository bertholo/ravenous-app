

const search = async(term, location, sortBy) => {
    try{
    const apiKey = '1lcxQCadIy8e3_ozHZG0o3xyNAx0LWk_6GvyOJvrjC0W5kPRbr1sBPldwEpKS8ZsDwerIVdMhSp4fmxUWs3e9fZ4QzvKW9nY00HZ38YPWzjsCWSeW65TQojfEE5YZXYx';
    const url = 'https://api.yelp.com/v3/businesses/';
    const searchParams = `search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const endpoint = `${url}${searchParams}`;
    
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
    });
      
    if(response.ok){
         const jsonResponse = await response.json();

         console.log(jsonResponse);
         
         if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            name: business.name,
            imageSrc: business.image_url,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));

        };
      }

      throw new Error()
   } 
   catch(error){ 
    console.log(error)
    throw error;  
    };
  };

  export default search;