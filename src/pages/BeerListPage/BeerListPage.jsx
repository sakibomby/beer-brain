import { useEffect, useRef, useState } from "react";
import * as beersAPI from '../../utilities/beers-api';
import { Link } from "react-router-dom";
import StyleList from "../../components/StyleList/StyleList";
import './BeerListPage.css';
import BeerList from "../../components/BeerList/BeerList";

export default function BeerListPage({user}) {
    const [beersList, setBeersList] = useState([]);
    const [activeStyle, setActiveStyle] = useState('');
    const stylesRef = useRef([]);

    useEffect(function () {
        async function getBeers() {
            const beers = await beersAPI.getAll();
            stylesRef.current = [...new Set(beers.map(beer => beer.style.name))];
            setBeersList(beers);
            setActiveStyle(stylesRef.current[0]);
        }
        getBeers();
    }, []);

    return (
        <main className="BeerListPage">
            <h2>Welcome! {user.name}</h2>
            <h1>Beers List</h1>
            <aside>
                <h2>Styles</h2>
                <StyleList
                    styles={stylesRef.current}
                    activeStyle={activeStyle}
                    setActiveStyle={setActiveStyle}
                />
                <Link to="/new-beer">
                    <button>
                        <label>Add New Beer</label>
                    </button>
                </Link>
            </aside>
            <h2>Click On Beer To Add To Your List</h2>
            <BeerList
        beersList={beersList.filter(beer => beer.style.name === activeStyle)}
      />
        </main>
    )
}

