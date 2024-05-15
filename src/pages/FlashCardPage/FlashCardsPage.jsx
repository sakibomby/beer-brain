import { useState, useEffect, useRef } from "react";
import * as beersApi from '../../utilities/beers-api';
import FlashCardList from "../../components/FlashCardList/FlashCardList";

export default function FlashCardsPage() {
    const [myFlashCards, setMyFlashCards] = useState([]);
    const [activeStyle, setActiveStyle] = useState('');
    const stylesRef = useRef([]);

    useEffect(() => {
        async function getBeers() {
            const cards = await beersApi.getAllMyBeers();
            stylesRef.current = [...new Set(cards.map(card => card.style.name))];
            setMyFlashCards(cards);
            setActiveStyle(stylesRef.current[0]);
        }
        getBeers();
    } , []);

    // const flashCards = myFlashCards.map((c) => <FlashCard 
    //     card={c}
    //     activeStyle={activeStyle} 
    //     key={c._id} 
    //     /> 
    // )

    return (
        <main>
            <h1>Flash Cards</h1>
            
                {/* {flashCards} */}
            <FlashCardList
        myFlashCards={myFlashCards.filter(card => card.style.name === activeStyle)}
      />
            
        </main>
    )
}