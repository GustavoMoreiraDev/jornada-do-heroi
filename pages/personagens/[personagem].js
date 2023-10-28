import Head from "next/head";
import { UsePerson } from "@/context/personagens";

import Banner from "@/components/personagem/banner";

export default function Personagem() {
  
  const { person } = UsePerson();

  return (
    <>
        <Head>
          <title>Jonada do Heroi | {person[0]?.name || 'Não encontrado!!'}</title>
        </Head>
        <Banner />
    </>
  );
}
