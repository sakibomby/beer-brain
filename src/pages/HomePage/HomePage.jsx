import { Link } from 'react-router-dom';

export default function HomePage({ setUser }) {
    return (
        <main>
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>BeerBrain!</h1>
            <Link to="/auth">
            <button>
            <p>Login/SignUp</p>
            </button>
            </Link>
        </main>
    );
}