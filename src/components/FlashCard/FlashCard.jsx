export default function FlashCard({ card }) {
    return (
    <ul>
      <div className="beercard">
        <img src={card.imgSrc} alt='' width={200} height={200}/>
        <label>Name: {card.name}</label>
        <label>Style: {card.style.name}</label>
        <label>Tasting Notes: {card.tastingNotes}</label>
      </div>
    </ul>
  );
}
