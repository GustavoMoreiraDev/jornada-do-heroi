import Head from "next/head"
import { UseData } from "@/context/data"
import Loading from "@/components/custom/loading"

import Header from "@/components/header"
export default function Home() {
  
  const { loading } = UseData();
  
  if (loading) { return <Loading />}
  
  return (
    <>
      <Head>
        <title>Jornada do Heroi</title>
      </Head>
      <Header />
    </>
  )
}
