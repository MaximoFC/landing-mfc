import Head from "next/head";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mecánica Facundo Callejas | Reparación y Servicio</title>
        <meta name="description" content="Taller de bicicletas en Tucumán. Reparaciones, mantenimiento, venta de repuestos y más. Atención personalizada y rápida." />
        <meta name="keywords" content="taller de bicicletas, reparación de bicicletas, bicicletería, mantenimiento de bicicletas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mecánica Facundo Callejas" />
        <meta property="og:description" content="Reparación profesional de bicicletas, atención personalizada y rápida." />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="" /> */}
        {/* <meta name="twitter:card" content="" /> */}
      </Head>
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
