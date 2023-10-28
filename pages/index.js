import Head from "next/head"

import Header from "@/components/header"
import Options from "@/components/combate/options"
import Arena from "@/components/combate/arena"
export default function Home() {
    
  return (
    <>
      <Head>
        <title>Jornada do Heroi</title>
      </Head>
      <Header />
      <Arena />
      <Options />
    </>
  )
}
