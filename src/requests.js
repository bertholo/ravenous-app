const getData = async() => {
    try{
    const response = await fetch('https://api.yelp.com/v3/businesses/search');
      if(response.ok){
        const jsonResponse = await response.json();
      }
      throw new Error('Request failed.')
   } catch(error){ console.log(error)};
  };

  export default getData;