import axios from 'axios';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response.data);
      setBeers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div className='AllBeers'>
      {beers &&
        beers.map(beer => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <div className='beer-card'>
                <div className='image-container'>
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <div>
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <span>Created by:</span> {beer.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
