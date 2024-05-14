import { useState, useEffect } from "react";
import * as beersApi from '../../utilities/beers-api';
import BeerCard from '../../components/BeerCard/BeerCard';

export default function MyBeerListPage() {
    const [myBeers, setMyBeers] = useState([]);
    useEffect(() => {
        async function getBeers() {
            const beers = await beersApi.getAllMyBeers();
            console.log(beers);
            setMyBeers(beers);
        }
        getBeers();
    } , [])
    const beerCard = myBeers.map((b, idx) => <BeerCard beer={b} key={idx} />)

    return (
        <main>
            <h1>My Beer List</h1>
            <ul>
                <div>{beerCard}</div>
                {/* <div>{myBeers.map((b, idx)=> <p>{b.name}</p>)}</div> */}
            </ul>
        </main>
    )
}