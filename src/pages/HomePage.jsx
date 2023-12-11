import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='HomePage'>
      <Link to='/beers'>
        <img src={beers} alt='beers image' />
        <div className='home-text-container'>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut libero non nisl molestie iaculis vel ut libero. Sed ut vehicula
            velit. Donec sodales est consectetur lectus finibus, tincidunt
            eleifend tellus dictum.
          </p>
        </div>
      </Link>
      <Link to='/random-beer'>
        <img src={randomBeer} alt='random beer image' />
        <div className='home-text-container'>
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut libero non nisl molestie iaculis vel ut libero. Sed ut vehicula
            velit. Donec sodales est consectetur lectus finibus, tincidunt
            eleifend tellus dictum.
          </p>
        </div>
      </Link>
      <Link to='/new-beer'>
        <img src={newBeer} alt='new beer image' />
        <div className='home-text-container'>
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut libero non nisl molestie iaculis vel ut libero. Sed ut vehicula
            velit. Donec sodales est consectetur lectus finibus, tincidunt
            eleifend tellus dictum.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
