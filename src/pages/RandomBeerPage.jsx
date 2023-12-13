import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return (
    randomBeer && (
      <div className='BeerDetails'>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <div className='beer-details-container'>
          <h2>{randomBeer.name}</h2>
          <span id='attenuation-level'>{randomBeer.attenuation_level}</span>
        </div>
        <div className='beer-details-container'>
          <h3>{randomBeer.tagline}</h3>
          <span id='first-brewed'>{randomBeer.first_brewed}</span>
        </div>
        <p>{randomBeer.description}</p>
        <span>{randomBeer.contributed_by}</span>
      </div>
    )
  );
}

export default RandomBeersPage;
