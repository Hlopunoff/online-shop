import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Auth = ({children}) => {
    const location = useLocation();
    const {isAuth} = useAuth();

    if(!isAuth) {
        return <Navigate to='/register' state={{from: location}}/>
    }

    return children;
}

export default Auth;