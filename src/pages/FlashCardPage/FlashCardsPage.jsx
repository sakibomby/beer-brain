import { useState, useEffect } from "react";
import * as beersApi from '../../utilities/beers-api';
import FlashCard from '../../components/FlashCard/FlashCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FlashCardsPage() {
    const [myFlashCards, setMyFlashCards] = useState([]);
    useEffect(() => {
        async function getBeers() {
            const cards = await beersApi.getAllMyBeers();
            setMyFlashCards(cards);
        }
        getBeers();
    }, []);

    const flashCards = myFlashCards.map((c) => <FlashCard
        card={c}
        key={c._id}
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
        <main>
            <h1>Flash Cards</h1>
            <div>
                <div>
                    <Slider {...settings}>
                        {flashCards}
                    </Slider>
                </div>
            </div>
        </main>
    )
}