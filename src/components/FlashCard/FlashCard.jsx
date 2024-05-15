import { useState } from "react";

export default function FlashCard({ card }) {
    const [flip, setFlip] = useState(true);
    return (
    <ul>
      <div className="flashcard"
      onClick={() => setFlip(!flip)}
      >
        {flip ? <img src={card.imgSrc} alt='' width={200} height={200}/> :
        <p>
            Name: {card.name}
            Style: {card.style.name}
            Tasting Notes: {card.tastingNotes}
        </p>
        }
      </div>
    </ul>
  );
}
