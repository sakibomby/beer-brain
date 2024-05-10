import { Link } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';

export default function HomePage({ setUser }) {
    return (
        <main>
            <h2>Welcome</h2>
            <h2>To</h2>
            <h1>BeerBrain!</h1>
            <Link to="/auth">
            <button onClick={ <AuthPage setUser={setUser}/> }>
            <p>Login/SignUp</p>
            </button>
            </Link>
        </main>
    );
}