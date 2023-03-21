import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Auth/hooks';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn(email, password);
    };

    return (
        <div className="formContainer">
            <section className="formWrapper">
                <h1 className="title">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type={'email'} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type={'text'} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
                <p>
                    You don't have an account? <Link to="/register">Register</Link>
                </p>
            </section>
        </div>
    );
}

export default Login;
