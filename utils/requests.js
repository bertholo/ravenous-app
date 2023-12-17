import 'whatwg-fetch';


const search = async(term, location, sortBy) => {
    try{
    const apiKey = '1lcxQCadIy8e3_ozHZG0o3xyNAx0LWk_6GvyOJvrjC0W5kPRbr1sBPldwEpKS8ZsDwerIVdMhSp4fmxUWs3e9fZ4QzvKW9nY00HZ38YPWzjsCWSeW65TQojfEE5YZXYx';
    const url = 'https://api.yelp.com/v3/businesses/search';
    const requests = `search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const endpoint = `${url}${requests}`;
    
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
    });
      
    if(response.ok){
         const jsonResponse = await response.json();
         console.log(jsonResponse);
         return jsonResponse;
      }


      throw new Error(`Request failed with status ${response.status}: ${errorResponse.error.description}`)
   } 
   catch(error){ 
    console.log(error)
    throw error;  
    };
  };

  export default search;