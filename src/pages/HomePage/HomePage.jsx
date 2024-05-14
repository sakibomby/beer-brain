import { Link } from 'react-router-dom';

export default function HomePage({ setUser }) {
    return (
        <main>
            <h2>Welcome</h2>
            <h2>To</h2>
            <h1>BeerBrain!</h1>
            <Link to="/auth">
            <button>
            <p>Login/SignUp</p>
            </button>
            </Link>
        </main>
    );
}