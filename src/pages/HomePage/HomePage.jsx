import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ setUser }) {
    return (
        <main className="homepage">
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>BeerBrain!</h1>
            <Link to="/auth">
                <button>
                    Login/SignUp
                </button>
            </Link>
        </main>
    );
}