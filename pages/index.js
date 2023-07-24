import Body from "@/components/Body";
import Header from "@/components/header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stock price</title>
        <link rel="icon" href="/stock.ico" />
      </Head>
      <main>
        <Header />
        <Body />
      </main>
    </>
  );
}
