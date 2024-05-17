import { useState, useEffect } from 'react';
import * as beersAPI from '../../utilities/beers-api';
import * as stylesAPI from '../../utilities/styles-api';
import NewBeerForm from '../../components/NewBeerForm/NewBeerForm';

export default function NewBeerPage() {
    const [beers, setBeers] = useState([]);
    const [styles, setStyles] = useState([]);

    useEffect(() => {
        async function getStyles() {
            const styles = await stylesAPI.getAll();
            setStyles(styles);
        }
        getStyles();
    }, []);

    async function addBeer(beer) {
        const newBeer = await beersAPI.add(beer);
        setBeers([...beers, newBeer]);
    }

    return (
        <main>
            <h1>Add A New Beer</h1>
            <NewBeerForm addBeer={addBeer} styles={styles} />
        </main>

    );
}