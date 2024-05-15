import { useState, useEffect } from "react";
import * as beersApi from '../../utilities/beers-api';
import BeerCard from '../../components/BeerCard/BeerCard';

export default function MyBeerListPage() {
    const [myBeers, setMyBeers] = useState([]);
    useEffect(() => {
        async function getBeers() {
            const beers = await beersApi.getAllMyBeers();
            setMyBeers(beers);
        }
        getBeers();
    } , []);

    async function handleRemoveBeerFromMyList(beerId) {
        const updatedBeerList = await beersApi.removeMyBeer(beerId);
        setMyBeers(updatedBeerList);
    }

    const beerCards = myBeers.map((b) => <BeerCard 
        beer={b} 
        handleRemoveBeerFromMyList={handleRemoveBeerFromMyList}
        key={b._id} 
    />)

    return (
        <main>
            <h1>My Beer List</h1>
            <ul>
                <div>{beerCards}</div>
                {/* <div>{myBeers.map((b, idx)=> <p>{b.name}</p>)}</div> */}
            </ul>
        </main>
    )
}