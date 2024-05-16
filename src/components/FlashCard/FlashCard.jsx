import { useState } from "react";
import './FlashCard.css';


export default function FlashCard({ card }) {
    const [flip, setFlip] = useState(true);

    return (
        <div>
            <div className="flashcard"
                onClick={() => setFlip(!flip)}
            >
                <div>
                    {flip ? <img src={card.imgSrc} alt='' width='100%' height='100%' /> :
                        <div className="card-info">
                            <p>Name: <div className="labels">{card.name}</div></p>
                            <p>Style: <div className="labels">{card.style.name}</div></p>
                            <p>Tasting Notes: <div className="labels">{card.tastingNotes}</div></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
