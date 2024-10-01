import React, { createContext } from 'react';

export const defaultUser = {
    email:'',
    password:'',
    isLoggedIn: false,
};

export const defaultLogout = () => {};

const AppContext = createContext({ 
    user: defaultUser,
    logOut: defaultLogout, 
});

export default AppContext;