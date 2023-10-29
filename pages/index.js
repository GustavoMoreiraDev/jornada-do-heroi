import Head from "next/head";

import Header from "@/components/header";
import Options from "@/components/combate/options";
import Arena from "@/components/combate/arena";
import { UseCombat } from "@/context/combate";
import Loading from "@/components/custom/loading";
import Navigation from "@/components/custom/navigation";
export default function Home() {

  const { loading, nav, setNav } = UseCombat();

  if (loading) { return <Loading />}

  return (
    <>
      <Head>
        <title>Jornada do Heroi</title>
      </Head>
      <Header />
      <Arena />
      <Options />
      <Navigation nav={nav} setNav={setNav} max={4} />
    </>
  );
}
