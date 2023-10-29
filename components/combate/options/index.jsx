import React from 'react';
import Image from 'next/image';
import style from './style.module.css';
import { UseCombat } from '@/context/combate';

const Options = () => {

    const { info, lutadores, setLutadores } = UseCombat();

    const personagens = (i) => {
        if (lutadores.length < 2) {
            setLutadores([...lutadores, i]);
        }
    };

    return (
        <>
            <div className={style['o-container']}>
                {info.slice(0, 150).map((i) => (
                    <button onClick={() => personagens(i)} className={style['c-img-wrap']} key={i.id}>
                        <Image className={style['c-img']} src={i.images.sm} width={50} height={50} alt={'jdh'} />
                    </button>
                ))}
            </div>
        </>
    );
}

export default Options;