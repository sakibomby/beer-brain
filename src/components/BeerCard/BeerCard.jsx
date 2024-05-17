import './BeerCard.css';

export default function BeerCard({ beer, handleRemoveBeerFromMyList }) {
  return (
    <ul>
      <div className="beercard">
        <section className="innercard">
          <div><img src={beer.imgSrc} alt='' width='100%' height='100%' /></div>
          <div>
            <p>Name: <div className="labels">{beer.name}</div></p>
            <p>Style: <div className="labels">{beer.style.name}</div></p>
            <p>Tasting Notes: <div className="labels">{beer.tastingNotes}</div></p>
          </div>
        </section>
        <button onClick={() => handleRemoveBeerFromMyList(beer._id)}>remove</button>
      </div>
    </ul>
  );
}
