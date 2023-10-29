import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const CombateContext = createContext({});

const CombateProv = ({ children }) => {

    const [ info, setInfo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ lutadores, setLutadores ] = useState([]);
    const [ perPage, setPerPage ] = useState(150);
    const [ modal, setModal ] = useState(false);
    const [ nav, setNav ] = useState(1);

    useEffect(() => {
        const Personagens = async () => {
            try {
                const response = await axios.get("/api");
                setInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.log('erro', error);
            }
        };
        Personagens();
    },[]);

    const end = nav * perPage;
    const start = end - perPage;
    const currentElements = info.slice( start, end);

    return (
        <CombateContext.Provider value={{ info: currentElements, loading, lutadores, setLutadores, modal, setModal, nav, setNav }}>
            {children}
        </CombateContext.Provider>
    );
}

export const UseCombat = () => {
    return useContext(CombateContext);
};

export default CombateProv;