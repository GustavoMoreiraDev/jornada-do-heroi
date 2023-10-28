import React from 'react';
import Image from 'next/image';
import style from './style.module.css';
import { UseCombat } from '@/context/combate';

const Arena = () => {
    const { lutadores } = UseCombat();

    return (
        <>
            <main className={style['a-container']}>
                {lutadores.length > 0 ? (
                    <>
                        <Personagem
                            img={lutadores[0].images.lg || '/userImg.png'}
                            name={lutadores[0].name}
                        />
                        <div className={style['a-result']}>
                            <h1>VS</h1>
                        </div>
                        {lutadores.length > 1 && (
                            <Personagem
                                img={lutadores[1].images.lg || '/userImg.png'}
                                name={lutadores[1].name}
                            />
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
                <Image
                    className={style['a-card-img']}
                    src={'/userImg.png'}
                    width={250}
                    height={250}
                    loading={'lazy'}
                    alt={'No data available'}
                />
            </div>
            <div className={style['a-result']}>
                <h1>VS</h1>
            </div>
            <div className={style['a-card']}>
                <Image
                    className={style['a-card-img']}
                    src={'/userImg.png'}
                    width={250}
                    height={250}
                    loading={'lazy'}
                    alt={'No data available'}
                />
            </div>
        </main>
    )
}
export default Arena;
