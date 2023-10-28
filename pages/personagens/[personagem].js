import Head from "next/head";
import { UseData } from "@/context/data";
import { UsePerson } from "@/context/personagens";

import Banner from "@/components/personagem/banner";
import Loading from "@/components/custom/loading";

export default function Personagem() {

  const { loading } = UseData();
  const { person } = UsePerson();

  if (loading) { return <Loading />};
  return (
    <>
        <Head>
          <title>Jonada do Heroi | {person[0]?.name || 'Não encontrado!!'}</title>
        </Head>
        <Banner />
    </>
  );
}
