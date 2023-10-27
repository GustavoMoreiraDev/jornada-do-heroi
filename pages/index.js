import Head from "next/head"
import { UseData } from "@/context/data"

import Header from "@/components/header"
import Column from "@/components/custom/column"
import Card from "@/components/custom/card"
import Loading from "@/components/custom/loading"
export default function Home() {
  
  const { loading } = UseData();
  
  if (loading) { return <Loading />}
  
  return (
    <>
      <Head>
        <title>Jornada do Heroi</title>
      </Head>
      <Header />
      <Column>
        <Card />
      </Column>
    </>
  )
}
