import React from 'react';
import style from './style.module.css';
import { UseData } from '@/context/data';

const Navigation = () => {

    const { nav, setNav } = UseData();

    return (
        <>
            <div className={style['n-container']}>
                <Btn conteudo={'1'} on={() => { if (nav > 1) {setNav(1) }}}  dis={nav === 1} />
                <Btn conteudo={'<'} on={() => { if (nav > 1) {setNav(nav - 1)}}}  dis={nav === 1} />
                <Btn conteudo={'>'} on={() => { if (nav < 38) {setNav(nav + 1)}}} />
                <Btn conteudo={'38'} on={() => { if (nav < 38) {setNav(38)}}} />
            </div>
        </>
    );
}

function Btn ({ on, conteudo, dis }) {
    return (
        <button onClick={on} disabled={dis}>
            {conteudo}
        </button>
    )
}


export default Navigation;
