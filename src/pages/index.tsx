import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mecánica Facundo Callejas | Reparación y Servicio</title>
        <meta
          name="description"
          content="Taller de bicicletas en Tucumán. Reparaciones, mantenimiento, venta de repuestos y más. Atención personalizada y rápida."
        />
        <meta
          name="keywords"
          content="taller de bicicletas, reparación de bicicletas, bicicletería, mantenimiento de bicicletas"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mecánica Facundo Callejas" />
        <meta
          property="og:description"
          content="Reparación profesional de bicicletas, atención personalizada y rápida."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="" /> */}
        {/* <meta name="twitter:card" content="" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mecánica Facundo Callejas",
              telephone: "+54 9 381 547-5600",
              email: "mfcmecanicabici@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Paraguay 1674",
                addressLocality: "Yerba Buena",
                addressRegion: "Tucumán",
                postalCode: "4107",
                addressCountry: "AR",
              },
            }),
          }}
        />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
