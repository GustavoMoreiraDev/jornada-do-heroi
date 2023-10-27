import React from 'react';
import Image from 'next/image';
import style from './style.module.css';
import { UseData } from '@/context/data';
import { GiPointySword } from 'react-icons/gi';
import { BsFillShieldSlashFill } from 'react-icons/bs';

const Card = () => {

    const { info } = UseData();

    return (
        <>
            {info.map((i) => (
                <section key={i.id} className={style['c-container']}>
                    <Image className={style['c-img']} src={i.images.sm} width={180} height={270} loading={'lazy'} alt={i.name} />
                    <h4>{i.name}</h4>
                    <div className={style['c-info']}>
                        <Hability icon={GiPointySword} habilidade={i.powerstats.combat} />
                        <Hability icon={BsFillShieldSlashFill} habilidade={i.powerstats.durability} />
                    </div>
                </section>
            ))}
        </>
    )
};

function Hability({ icon, habilidade }) {
    const Icone = icon;
    return (
        <div className={style['c-info-hab']}>
            <Icone />
            <p>{habilidade}</p>
        </div>
    )
};

export default Card;
