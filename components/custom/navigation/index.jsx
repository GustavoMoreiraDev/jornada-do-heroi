import React from 'react';
import style from './style.module.css';

const Navigation = ({ nav, setNav, max }) => {

    return (
        <>
            <div className={style['n-container']}>
                <Btn conteudo={'1'} on={() => { if (nav > 1) {setNav(1) }}}  dis={nav === 1} />
                <Btn conteudo={'<'} on={() => { if (nav > 1) {setNav(nav - 1)}}}  dis={nav === 1} />
                <Btn conteudo={'>'} on={() => { if (nav < max) {setNav(nav + 1)}}} />
                <Btn conteudo={`${max}`} on={() => { if (nav < max) {setNav(max)}}} />
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
