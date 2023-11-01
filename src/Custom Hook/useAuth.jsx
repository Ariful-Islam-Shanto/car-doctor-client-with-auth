import React, { useContext } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';

//? Why do we use custom hook to prevent the repeat the exact same code 
//? twice.

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;