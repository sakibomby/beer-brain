import FlashCard from '../FlashCard/FlashCard';

export default function FlashCardList({ myFlashCards }) {
  const cards = myFlashCards.map(c =>
      <FlashCard
        key={c._id}
        card={c}
        />
      );
      

    return (
        <>
      <main className="FlashCardList">
        <div>
        {cards}
        </div>
      </main>
        </>
    );
  }