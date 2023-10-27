import Head from "next/head"
import { UseData } from "@/context/data"

import Banner from "@/components/personagem/banner";

export default function Personagem () {

    const { info } = UseData();

    return (
        <>
            <Head>
                <title>Personagem</title>
            </Head>
            <Banner />
        </>
    )
};