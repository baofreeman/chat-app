import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="formContainer">
            <section className="formWrapper">
                <h1 className="title">Login</h1>
                <form>
                    <input type={'text'} placeholder="Email" />
                    <input type={'text'} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>
                    You don'y have an account? <Link to="/register">Register</Link>
                </p>
            </section>
        </div>
    );
}

export default Login;
