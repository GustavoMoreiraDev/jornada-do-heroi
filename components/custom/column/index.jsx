import React from 'react';
import style from './style.module.css';

const Column = ({ children }) => {
    
    return (
        <>
            <main className={style['c-container']}>
                {children}
            </main>
        </>
    );
}

export default Column;
