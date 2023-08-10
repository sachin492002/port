import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar";
import Applications from "@/components/applications";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Port</title>
        <link rel="icon" href="/musebox.jpg" />
      </Head>
      <Applications/>
    </main>
  )
}
