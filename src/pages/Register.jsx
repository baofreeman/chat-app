import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="formContainer">
            <section className="formWrapper">
                <h1 className="title">Register</h1>
                <form>
                    <input type={'text'} placeholder="User name" />
                    <input type={'text'} placeholder="Email" />
                    <input type={'text'} placeholder="Password" />
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
