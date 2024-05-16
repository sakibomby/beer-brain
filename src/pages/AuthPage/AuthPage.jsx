import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(true);
    
    const handleChange = () => {
        setShowSignUp(form => !form);
    };

    return (
        <main className="authpage">
            <h1>Welcome To BeerBrain!</h1>
           {showSignUp ?  <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
            <button onClick={handleChange}>
            {showSignUp ? 'Login' : 'Sign Up'}
            </button>
        </main>
    );
}