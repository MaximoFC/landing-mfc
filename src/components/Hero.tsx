import Image from "next/image";
import HeroImage from "../../public/bikeservice3.jpg";

export default function Hero() {
    return (
        <section
            className="p-8 flex gap-2"
        >
            <div className="flex flex-col gap-4 items-start justify-center">
                <h1 className="text-4xl font-bold">Mecánica Facundo Callejas</h1>
                <p className="text-xl text-gray-700">Servicio profesional de <span className="text-red-500">bicicletas</span>.</p>
                <p className="text-xl text-gray-700">Mantenimiento, reparación y detailing especializado para tu bicicleta. Más de 20 años de experiencia.</p>
                <div className="flex gap-4 items-center">
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
            <Image 
                src={HeroImage}
                alt="Imagen de Facundo Callejas arreglando una bicicleta"
                width={400}
                height={350}
                className="rounded-xl shadow-xl shadow-slate-400"
            />
        </section>
    )
}