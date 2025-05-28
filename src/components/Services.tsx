import { MdCheckCircleOutline } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { PiEngineBold } from "react-icons/pi";
import { MdOutlineElectricBike } from "react-icons/md"
import { JSX } from "react";

const services = [
    {
        title: "Service General",
        description: "Revisión completa para bicicleta (cualquier marca)",
    },
    {
        title: "Service E-Bike",
        description: "Revisión completa para e-bike (cualquier marca)",
    },
    {
        title: "Service de motor de E-Bike",
        description: "Service completo y reparación de motores de E-Bike (cualquier marca)",
    },
    {
        title: "Service de tija telescópica (dropper)",
        description: "Service completo y reparación de dropper o tija telescópica (cualquier marca)",
    },
    {
        title: "Service de amortiguador (shock)",
        description: "Service completo y reparación de amortiguadores de todo tipo (cualquier marca)",
    },
    {
        title: "Service de suspensión",
        description: "Service completo y reparación de suspensiones de todo tipo (cualquier marca)",
    }
]

const iconMap: { [key: string]: JSX.Element } = {
    "Service General": <VscTools className="text-red-500 w-10 h-10" />,
    "Service E-Bike": <MdOutlineElectricBike className="text-red-500 w-10 h-10" />,
    "Service de motor de E-Bike": <PiEngineBold className="text-red-500 w-10 h-10" />,

}

export default function Services() {
    return (
        <section
            id="services"
            className="p-8 gap-6 flex flex-col items-center scroll-mt-26"
        >
            <h2 className="p-2 border-1 border-red-500 rounded-xl text-red-500 text-lg">Nuestros servicios</h2>
            <h3 className="text-4xl font-semibold">Servicios profesionales para tu bicicleta</h3>
            <p
                className="text-xl text-gray-700 text-center"
            >
                Ofrecemos una gama completa de servicios especializados para mantener tu bicicleta en perfectas condiciones
                y maximizar tu experiencia.
            </p>
            <div className="grid gap-4 grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border-1 border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-6 shadow-xl shadow-slate-300 min-h-[500px]"
                    >
                        <span role="img" aria-label={service.title} className="bg-red-100 rounded-full p-4">
                            {iconMap[service.title] ?? <VscTools className="text-red-500 h-10 w-10" />}
                        </span>
                        <h4 className="text-xl font-semibold">{service.title}</h4>
                        <p className="text-gray-700">{service.description}</p>
                        <div className="flex flex-col gap-4 text-gray-700">
                            <div className="flex gap-2 items-center">
                                <MdCheckCircleOutline size={25} className="text-green-500" />
                                <p>Diagnóstico gratuito</p>
                            </div><div className="flex gap-2 items-center">
                                <MdCheckCircleOutline size={25} className="text-green-500" />
                                <p>Repuestos originales</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdCheckCircleOutline size={25} className="text-green-500" />
                                <p>Garantía</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdCheckCircleOutline size={25} className="text-green-500" />
                                <p>Entrega en 24hs</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}