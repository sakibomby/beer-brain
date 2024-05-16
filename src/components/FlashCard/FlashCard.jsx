import { useState } from "react";
import './FlashCard.css';


export default function FlashCard({ card }) {
    const [flip, setFlip] = useState(true);
   
    return (
        <div>
                <div className="flashcard"
                    onClick={() => setFlip(!flip)}
                >
                    <div className="flashcard-inner">
                        {flip ? <img src={card.imgSrc} alt='' width={350} height={400} /> :
                            <div className="card-info">
                                <p>Name: {card.name}</p>
                                <p>Style: {card.style.name}</p>
                                <p> Tasting Notes: {card.tastingNotes}</p>
                            </div>
                        }
                    </div>
                </div>
        </div>
    );
}
