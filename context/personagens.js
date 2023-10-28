import React, { createContext, useContext, useState } from 'react';

export const PersonContext = createContext({});

const PersoProv = ({ children }) => {
    
    const [ person, setPerson ] = useState([]);

    return (
        <PersonContext.Provider value={{ person, setPerson }}>
            {children}
        </PersonContext.Provider>
    );
}

export const UsePerson = () => {
    return useContext(PersonContext);
}

export default PersoProv;
