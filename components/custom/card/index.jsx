import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { UseData } from '@/context/data';
import { GiPointySword } from 'react-icons/gi';
import { UsePerson } from '@/context/personagens';
import { BsFillShieldSlashFill, BsBoxArrowUpRight } from 'react-icons/bs';
import style from './style.module.css';

const Card = () => {

    const { info } = UseData();
    const { setPerson } = UsePerson();
    const { push } = useRouter();

    const pers = (i) => { setPerson([i]), push(`/personagens/${i.slug}`)};

    return (
        <>
            {info.map((i) => (
                <section key={i.id} className={style['c-container']}>
                    <button style={{width:'100%'}} onClick={() => pers(i)}>
                        <Image className={style['c-img']} src={i.images.sm} width={180} height={270} loading={'lazy'} alt={i.name} />
                    </button>                    
                    <button onClick={() => pers(i)} className={style['c-btn-page']} ><BsBoxArrowUpRight /></button>                    
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
