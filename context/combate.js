import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const CombateContext = createContext({});

const CombateProv = ({ children }) => {

    const [ info, setInfo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ lutadores, setLutadores ] = useState([]);
    const [ modal, setModal ] = useState(false);

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

    return (
        <CombateContext.Provider value={{ info, loading, lutadores, setLutadores, modal, setModal }}>
            {children}
        </CombateContext.Provider>
    );
}

export const UseCombat = () => {
    return useContext(CombateContext);
};

export default CombateProv;