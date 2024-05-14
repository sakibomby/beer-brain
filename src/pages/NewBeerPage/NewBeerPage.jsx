import { useState } from 'react';
import * as beersAPI from '../../utilities/beers-api';
import NewBeerForm from '../../components/NewBeerForm/NewBeerForm';

export default function NewBeerPage() {
    const [beers, setBeers] = useState([]);

    async function addBeer(beer) {
        const newBeer = await beersAPI.add({ beer });
        setBeers([...beers, newBeer]);
    }

    return (
        <main>
            <h1>Add New Beer</h1>
           
            <NewBeerForm addBeer={addBeer} />
        </main>

    );
}