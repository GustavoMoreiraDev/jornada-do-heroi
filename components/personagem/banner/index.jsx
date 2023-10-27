import React from 'react';
import style from './style.module.css';
import { UseData } from '@/context/data';
import Image from 'next/image';

const Banner = () => {
    
    const { info } = UseData();

    return (
        <>
            <main className={style['b-container']}>
                <Image className={style['b-image']} src={info[0]?.images.lg} width={750} height={550} alt={'PDH'} />
            </main> 
        </>
    );
}

export default Banner;
