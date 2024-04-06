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

export const getTokenFromLocalStorage = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    return { accessToken, refreshToken };
};