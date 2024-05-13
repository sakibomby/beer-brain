import { Link } from "react-router-dom";
import NewBeerPage from "../NewBeerPage/NewBeerPage";

export default function BeerList() {
    return (
        <main>
            <h1>Beers List</h1>
            <p>click on beer to add to your list</p>
            <div>All Beers</div>
            <Link to="/new-beer">
            <button>
            <p>Add New Beer</p>
            </button>
            </Link>
        </main>
    )
}

