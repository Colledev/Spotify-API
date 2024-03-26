import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { getQueryParams, storeTokenLocally } from '../utils/utils';

const Auth = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 

    useEffect(() => {
        const queryParams = getQueryParams(location.search);
        console.log('Query Params:', queryParams); // Passo 1: Verificar se os tokens estão sendo extraídos corretamente

        const { access_token, refresh_token } = queryParams;

        if (access_token) {
            storeTokenLocally(access_token, refresh_token);
            console.log('Tokens armazenados localmente:', access_token, refresh_token); // Passo 2: Verificar se os tokens estão sendo armazenados corretamente
            navigate('/home'); 
            console.log('Redirecting to /home'); // Passo 3: Verificar se o redirecionamento está ocorrendo corretamente
        } else {
            navigate('/');
            console.log('Redirecting to /'); // Passo 3: Verificar se o redirecionamento está ocorrendo corretamente
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
