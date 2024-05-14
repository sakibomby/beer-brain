import BeerListBeer from '../BeerListBeer/BeerListBeer';
import './BeerList.css';

export default function BeerList({ beersList }) {
    const beers = beersList.map(beer =>
      <BeerListBeer
        key={beer._id}
        beer={beer}
      />
    );
    return (
      <main className="BeerList">
        {beers}
      </main>
    );
  }