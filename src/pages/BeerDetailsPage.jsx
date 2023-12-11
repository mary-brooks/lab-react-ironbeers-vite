import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [beerDetails, setBeerDetails] = useState(null);

  const fetchBeerDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(response.data);
      setBeerDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBeerDetails();
  }, []);

  return (
    beerDetails && (
      <div className='BeerDetails'>
        <img src={beerDetails.image_url} alt={beerDetails.name} />
        <div className='beer-details-container'>
          <h2>{beerDetails.name}</h2>
          <span id='attenuation-level'>{beerDetails.attenuation_level}</span>
        </div>
        <div className='beer-details-container'>
          <h3>{beerDetails.tagline}</h3>
          <span id='first-brewed'>{beerDetails.first_brewed}</span>
        </div>
        <p>{beerDetails.description}</p>
        <span>{beerDetails.contributed_by}</span>
      </div>
    )
  );
}

export default BeerDetailsPage;
