import Head from "next/head";
import { UseData } from "@/context/data";

import Header from "@/components/header";
import Navigation from "@/components/custom/navigation";
import Column from "@/components/custom/column";
import Card from "@/components/custom/card";
import Search from "@/components/custom/search";
import Loading from "@/components/custom/loading";
export default function PersonagensPage() {

  const { loading } = UseData();

  if (loading) { return <Loading />};
  
  return (
    <>
      <Head>
        <title>Jornada do Heroi | Personagens</title>
      </Head>
      <Header />
      <Search />
      <Column>
        <Card />
      </Column>
      <Navigation />
    </>
  );
}
