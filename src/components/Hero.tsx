import Image from "next/image";
import HeroImage from "../../public/bikeservice3.jpg";

export default function Hero() {
    return (
        <section
            className="p-8 flex flex-col gap-1 scroll-mt-26 items-center md:flex-row md:h-[calc(100dvh-90px)]"
            id="home"
        >
            <div className="flex flex-col gap-4 items-start justify-center w-full">
                <h1 className="text-center text-4xl font-bold">Mecánica Facundo Callejas</h1>
                <p className="text-2xl text-gray-700">Servicio profesional de <span className="text-red-500">bicicletas</span>.</p>
                <div className="flex flex-col gap-4 self-center py-8 md:flex-row md:gap-20">
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-semibold">20+</p>
                        <h2 className="text-lg text-gray-700">Años de experiencia</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-semibold">500+</p>
                        <h2 className="text-lg text-gray-700">Clientes satisfechos</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-semibold">24h</p>
                        <h2 className="text-lg text-gray-700">Servicio express</h2>
                    </div>
                </div>
                <div className="flex gap-4 items-center md:self-center">
                    <a 
                        href="https://wa.me/5493815475600/?text=Hola,%20quiero%20agendar%20un%20turno"
                        className="bg-red-500 p-3 text-white rounded-xl font-semibold hover:bg-red-600"
                    >
                        Pedí tu turno ahora
                    </a>
                    <a 
                        href=""
                        className="border-1 border-slate-300 text-black p-3 rounded-xl font-semibold hover:bg-slate-300"
                    >
                        Ver servicios
                    </a>
                </div>
            </div>
            <div className="w-70 h-70 md:w-150 md:h-100 flex items-center">
                <Image 
                    src={HeroImage}
                    alt="Imagen de Facundo Callejas arreglando una bicicleta"
                    sizes="fill"
                    className="rounded-xl shadow-xl shadow-slate-400"
                />
            </div>
        </section>
    )
}