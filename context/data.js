import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const DataContext = createContext({});

const DataProv = ({ children }) => {

    const [ loading, setLoading] = useState(true);
    const [ info, setInfo ] = useState([]);
    const [ nav, setNav ] = useState(5);
    const [ perPage, setPerPage ] = useState(15);

    useEffect(() => {
        const Dados = async ()  => {
            const baseUrl = "http://homologacao3.azapfy.com.br/api/ps/metahumans";
            try {
              const response = await axios.get(baseUrl);
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
        <DataContext.Provider value={{ info: currentElements, loading, nav, setNav }}>
            {children}
        </DataContext.Provider>
    )
};

export const UseData = () => {
    return useContext(DataContext);
};

export default DataProv;