import React from 'react';
import Image from 'next/image';
import style from './style.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { UseCombat } from '@/context/combate';
import Winner from '../winner';

const Arena = () => {

    const { lutadores, modal, setModal } = UseCombat();

    return (
        <>
            <main className={style['a-container']}>
                {lutadores.length > 0 ? (
                    <>
                        <Personagem img={lutadores[0].images.lg} name={lutadores[0].name} />
                        <div className={style['a-result']}>
                            {modal && (
                                <Winner />
                            )}
                            {!modal && ( <h1>VS</h1> )}
                            {!modal && lutadores.length > 1 && (
                                <button onClick={() => setModal(!modal)} className={style['a-result-btn-fight']}>
                                    Lutar
                                </button>
                            )}
                        </div>
                        {lutadores.length > 1 && (
                            <Personagem img={lutadores[1].images.lg} name={lutadores[1].name} />
                        )}
                    </>
                ) : (
                    <DefaultOp />
                )}
            </main>
        </>
    );
};
function Personagem({ name, img }) {

    return (
        <div className={style['a-card']}>
            <Image className={style['a-card-img']} src={img} width={250} height={250} loading={'lazy'} alt={name} />
            <h4>{name}</h4>
        </div>
    )
}

function DefaultOp() {
    return (
        <main className={style['a-container']}>
            <div className={style['a-card']}>
                <FaUserCircle className={style['a-card-icon']} />
            </div>
            <div className={style['a-result']}>
                <h1>VS</h1>
            </div>
            <div className={style['a-card']}>
                <FaUserCircle className={style['a-card-icon']} />
            </div>
        </main>
    )
}
export default Arena;
