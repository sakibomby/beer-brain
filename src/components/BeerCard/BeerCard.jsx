import './BeerCard.css';

export default function BeerCard({ beer, handleRemoveBeerFromMyList }) {
    return (
    <ul>
      <div className="beercard">
        <img src={beer.imgSrc} alt='' width='100%' height='100%' />
        <p>Name: {beer.name}</p>
        <p>Style: {beer.style.name}</p>
        <p>Tasting Notes: {beer.tastingNotes}</p>
      <button onClick={() => handleRemoveBeerFromMyList(beer._id)}>remove</button>
      </div>
    </ul>
  );
}
