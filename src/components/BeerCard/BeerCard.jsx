export default function BeerCard({ beer, handleRemoveBeerFromMyList }) {
    return (
    <ul>
      <div className="beercard">
        <img src={beer.imgSrc} alt='' width={200} height={200}/>
        <label>Name: {beer.name}</label>
        <label>Style: {beer.style.name}</label>
        <label>Tasting Notes: {beer.tastingNotes}</label>
        <button onClick={() => handleRemoveBeerFromMyList(beer._id)}>remove</button>
      </div>
    </ul>
  );
}
