import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //? get the current user email to send it to the req
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);

      //? if there is a user we will generate a token.
      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-eight-sage.vercel.app/jwt",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      } 
      else {
        console.log('Log out');
        axios
          .post(
            "https://car-doctor-server-eight-sage.vercel.app/clearCookie",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  });

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { createUser, signIn, logOut, user, loading, setLoading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
