import { useAuth } from '../Auth/hooks';

function Navbar() {
    const { logout } = useAuth();
    return (
        <section className="navbar">
            <h3 className="navbar_title">Free man</h3>
            <button className="navbar_button" onClick={logout}>
                Logout
            </button>
        </section>
    );
}

export default Navbar;
