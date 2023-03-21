import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/hooks';

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { register } = useAuth();

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        register(name, email, password);
    };

    return (
        <div className="formContainer">
            <section className="formWrapper">
                <h1 className="title">Register</h1>
                <form onSubmit={hanldeSubmit}>
                    <input type={'text'} placeholder="User name" onChange={(e) => setName(e.target.value)} />
                    <input type={'email'} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type={'text'} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    You do have an account? <Link to="/login">Login</Link>
                </p>
            </section>
        </div>
    );
}

export default Register;
