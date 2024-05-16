import { useState, useEffect, useRef } from "react";
import * as beersApi from '../../utilities/beers-api';
import FlashCard from '../../components/FlashCard/FlashCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FlashCardPage.css';

export default function FlashCardPage() {
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

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <main className="flashcardpage">
            <h1>Flash Cards</h1>
            <p>Click Card To Flip</p>
            <div>
                <div>
                    <Slider ref={slider => {
                        sliderRef = slider;
                    }}{...settings}>
                        {flashCards}
                    </Slider>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button className="button" onClick={previous}>
                            Previous
                        </button>
                        <button className="button" onClick={next}>
                            Next
                        </button>
                    </div>
                </div>
        </main>
    )
}