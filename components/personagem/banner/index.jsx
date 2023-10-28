import React from 'react';
import { AiOutlineThunderbolt, AiOutlineBulb } from 'react-icons/ai';
import { BsFillShieldSlashFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { UsePerson } from '@/context/personagens';
import { GiPointySword } from 'react-icons/gi';
import { FaDumbbell } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import style from './style.module.css';

const Banner = () => {

    const { person } = UsePerson();
    const { back } = useRouter();

    return (
        <>
            <main className={style['b-container']}>
                <section className={style['b-content']}>
                    <button className={style['b-back-btn']} onClick={() => back()}>
                        <BiLeftArrowCircle />
                    </button>
                    {person.length === 0 && ( <h1 className={style['b-alert']}>Personagem não encontrado</h1>)}
                    {person.length !== 0 && (
                        <>
                            <div className={style['b-info']}>
                                <h1>{person[0]?.name}</h1>
                                <h5>{person[0]?.biography?.fullName}</h5>
                                <div className={style['b-info-p']}>
                                    <p>{person[0]?.connections?.groupAffiliation}</p>
                                    <p>{person[0]?.connections?.relatives}</p>
                                </div>
                                <div className={style['b-hab']}>
                                    <Habilidade icon={GiPointySword} value={person[0]?.powerstats?.combat} color={'red'} />
                                    <Habilidade icon={BsFillShieldSlashFill} value={person[0]?.powerstats?.durability} color={'blue'} />
                                    <Habilidade icon={AiOutlineThunderbolt} value={person[0]?.powerstats?.speed} color={'yellow'} />
                                    <Habilidade icon={FaDumbbell} value={person[0]?.powerstats?.strength} color={'#696464'} />
                                    <Habilidade icon={AiOutlineBulb} value={person[0]?.powerstats?.intelligence} color={'green'} />
                                    <Habilidade icon={BsFillBrightnessHighFill} value={person[0]?.powerstats?.power} color={'pink'} />
                                </div>
                            </div>
                            <Image className={style['b-image']} src={person[0]?.images.lg} loading={'lazy'} width={1850} height={1080} alt={person[0]?.name} />
                        </>
                    )}
                </section>
            </main>
        </>
    );
}

function Habilidade({ icon, value, color }) {

    const Icone = icon;
    return (
        <div className={style['b-habilidade']}>
            <Icone className={style['b-hab-icon']} style={{ background: color }} />
            <p>{value}</p>
        </div>
    )
}


export default Banner;