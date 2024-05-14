import './BeerListBeer.css';

export default function BeerListBeer({ beer }) {
    return (
      <div className="BeerListBeer">
        <label>Name: {beer.name}</label>
        <img src={beer.imgSrc}  width={200} height={200}/>
        <label>Style: {beer.style.name}</label>
        <label>Tasting Notes: {beer.tastingNotes}</label>
        
      </div>
    );
  }