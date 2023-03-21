import Context from './Context';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Provider({ children }) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
        });

        return unsubscribe;
    }, []);
    console.log(user);

    //Register
    const register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                const data = {
                    uid: cred.user.uid,
                    displayName: name,
                    email: email,
                    photoURL: '',
                };
                console.log(cred);
            })
            .then(() => {
                console.log('Success');
                navigate('/');
            })
            .catch((err) => setError(err.message));
    };

    //Login

    const signIn = (email, password) => {
        signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => setError(err.message));
    };

    //Logout
    const logout = () => {
        signOut(auth);
        localStorage.clear();
        navigate('/login');
    };

    const value = {
        register,
        signIn,
        logout,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
