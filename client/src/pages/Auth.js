import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { getQueryParams, storeTokenLocally } from '../utils/utils';

const Auth = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 

    useEffect(() => {
        const queryParams = getQueryParams(location.search);
        console.log('Query Params:', queryParams); 

        const { access_token, refresh_token } = queryParams;

        if (access_token) {
            storeTokenLocally(access_token, refresh_token);
            console.log('Tokens armazenados localmente:', access_token, refresh_token); 
            navigate('/home'); 
            console.log('Redirecting to /home'); 
        } else {
            navigate('/');
            console.log('Redirecting to /'); 
        }
    }, [location, navigate]); 

    return (
        <div>
            {console.log('Auth.js')}
            Carregando...
        </div>
    );
}

export default Auth;
