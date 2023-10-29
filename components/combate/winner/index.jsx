import React from 'react';
import { UseCombat } from '@/context/combate';
import style from './style.module.css';

const Winner = () => {

    const { lutadores, setLutadores, setModal } = UseCombat();

    const newCombat = () => {
        setLutadores([]);
        setModal(false);
    };

    const Lutador1 = Object.values(lutadores[0].powerstats).reduce((a, b) => a + b);
    const Lutador2 = Object.values(lutadores[1].powerstats).reduce((a, b) => a + b);

    const vencedor = Lutador1 > Lutador2 ? lutadores[0].name : lutadores[1].name;

    return (
        <>
            <div className={style['w-container']}>
                <h3>Winner</h3>
                <h4>{vencedor}</h4>
                <div className={style['w-data']}>
                    <WinnerData align={"left"}
                        ataque={lutadores[0].powerstats.combat}
                        defesa={lutadores[0].powerstats.durability}
                        velocidade={lutadores[0].powerstats.speed}
                        forca={lutadores[0].powerstats.strength}
                        inteligencia={lutadores[0].powerstats.intelligence}
                        poder={lutadores[0].powerstats.power}
                    />
                    <WinnerData align={"center"}
                        ataque={"Ataque"} defesa={"Defesa"} velocidade={"Velocidade"}
                        inteligencia={"Inteligência"} forca={"Força"} poder={"Poder"}

                    />
                    <WinnerData align={"right"}
                        ataque={lutadores[1].powerstats.combat}
                        defesa={lutadores[1].powerstats.durability}
                        velocidade={lutadores[1].powerstats.speed}
                        forca={lutadores[1].powerstats.strength}
                        inteligencia={lutadores[1].powerstats.intelligence}
                        poder={lutadores[1].powerstats.power}
                    />
                </div>
                <button className={style['w-btn']} onClick={() => newCombat()}>
                    novo combate
                </button>
            </div>
        </>
    );
};

function WinnerData({ forca, defesa, ataque, inteligencia, poder, velocidade, align }) {

    return (
        <div className={style['w-data-op']} style={{ textAlign: align }}>
            <p>{ataque}</p><p>{defesa}</p><p>{velocidade}</p>
            <p>{forca}</p><p>{inteligencia}</p><p>{poder}</p>
        </div>
    )
}

export default Winner;
