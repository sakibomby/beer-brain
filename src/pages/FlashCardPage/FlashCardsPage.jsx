import { useState, useEffect } from "react";
import * as beersApi from '../../utilities/beers-api';
import FlashCard from '../../components/FlashCard/FlashCard';

export default function FlashCardsPage() {
    const [myFlashCards, setMyFlashCards] = useState([]);
    useEffect(() => {
        async function getBeers() {
            const cards = await beersApi.getAllMyBeers();
            setMyFlashCards(cards);
        }
        getBeers();
    } , []);

    const flashCards = myFlashCards.map((c) => <FlashCard 
        card={c} 
        key={c._id} 
        /> 
    )

    return (
        <main>
            <h1>Flash Cards</h1>
            <ul>
                <div>{flashCards}</div>
            </ul>
        </main>
    )
}