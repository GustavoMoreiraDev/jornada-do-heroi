import Head from "next/head";

import Header from "@/components/header";
import Navigation from "@/components/custom/navigation";
import Column from "@/components/custom/column";
import Card from "@/components/custom/card";
import Search from "@/components/custom/search";
export default function PersonagensPage() {
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
