import { useState, useEffect } from "react";
import * as beersApi from '../../utilities/beers-api';
import BeerCard from '../../components/BeerCard/BeerCard';
import { Link } from "react-router-dom";
import './MyBeerListPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        /> 
    )
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <main className="MyBeerListPage">
            <h1>My Beer List</h1>
           <Link to="/flashcards" >
           <button>Flash Cards</button>
           </Link>
            <div>
                <div>
                    <Slider {...settings}>
                        {beerCards}
                    </Slider>
                </div>
            </div>
        </main>
    )
}