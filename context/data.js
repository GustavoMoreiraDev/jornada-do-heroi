import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const DataContext = createContext({});

const DataProv = ({ children }) => {

    const [ loading, setLoading] = useState(true);
    const [ info, setInfo ] = useState([]);
    const [ nav, setNav ] = useState(1);
    const [ perPage, setPerPage ] = useState(10);

    useEffect(() => {
        const Dados = async ()  => {
            try {
              const response = await axios.get("/api");
              setInfo(response.data);
              setLoading(false);  
            } catch (error) {
                console.log('erro');
            } 
        };
        Dados();
    },[]);

    const indexOfLastElement = nav * perPage;
    const indexOfFirstElement = indexOfLastElement - perPage;
    const currentElements = info.slice(indexOfFirstElement, indexOfLastElement);

    return (
        <DataContext.Provider value={{ info: currentElements, loading, nav, setNav, setPerPage }}>
            {children}
        </DataContext.Provider>
    )
};

export const UseData = () => {
    return useContext(DataContext);
};

export default DataProv;