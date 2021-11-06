import React, { useState, useEffect } from 'react'
import fire from './fire'
import './App.css';
import Login from './Login'
import Hero from './Hero'

export default function App() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    //clear Input Fields
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    //clear Errors 
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    } 

    //Login Handler
    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    //Signup Handler
    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        setEmailError(err.message);
                        break;
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    //Logout Handler
    const handleLogout = () => {
        fire.auth().signOut();
    }

    //
    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user)
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    },[])

  return (
      <div className="App">

          {!user ? (
              <Login

                  //states
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  emailError={emailError}
                  passwordError={passwordError}
                  setHasAccount={setHasAccount}

                  //handlers
                  handleLogin={handleLogin}
                  handleSignUp={handleSignUp}
                  hasAccount={hasAccount}

              />
          ) : (
          <Hero handleLogout={handleLogout} />
          )}

    </div>
  );
}