import { useState } from 'react';
import * as beersApi from '../../utilities/beers-api';
import './BeerListBeer.css';

export default function BeerListBeer({ beer }) {
  const [msg, setMsg] = useState('');

  async function handleAddBeerToList() {
    await beersApi.addToMyList(beer._id);
    setMsg('Beer Added to Your List!');
  }


  return (
    <div className="BeerListBeer" onClick={handleAddBeerToList} >
      <label>Name: {beer.name}</label>
      <img src={beer.imgSrc} alt='' width={250} height={300} />
      <label>Style: {beer.style.name}</label>
      <label>Tasting Notes: {beer.tastingNotes}</label>
      <p>&nbsp;{msg}</p>
    </div>
  );
}