import * as beersApi from '../../utilities/beers-api';
import './BeerListBeer.css';
import MyBeerListPage from '../../pages/MyBeerListPage/MyBeerListPage';

export default function BeerListBeer({ beer }) {
  async function handleAddBeerToList() {
    const addToBeerList = await beersApi.add(beer);
  }
  
  return (
      <div className="BeerListBeer" onClick={handleAddBeerToList} >
        <label>Name: {beer.name}</label>
        <img src={beer.imgSrc} alt='' width={200} height={200}/>
        <label>Style: {beer.style.name}</label>
        <label>Tasting Notes: {beer.tastingNotes}</label>
      </div>
    );
  }