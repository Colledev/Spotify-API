export const getQueryParams = (search) => {
    const queryParams = {};
    const query = search.substring(1);
    if (!query) return queryParams; 

    const params = query.split('&');
    
    params.forEach(param => {
      const [key, value] = param.split('=');
      if (key) { 
          queryParams[key] = decodeURIComponent(value);
      }
    });
  
    return queryParams;
};


export const storeTokenLocally = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
};

export const retrieveTokenLocally = () => {
    return localStorage.getItem('accessToken');
};