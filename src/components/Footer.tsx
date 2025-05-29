import Image from "next/image"
import Logo from "../../public/MFC.jpg";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbClockHour7 } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-8 flex flex-col gap-10">
            <div className="flex gap-8 flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <Image 
                        src={Logo}
                        alt="Logo de Mecánica Facundo Callejas"
                        width={70}
                        height={70}
                        className="rounded-xl"
                    />
                    <p className="text-gray-400">
                        Taller especializado en mantenimiento y reparación de bicicletas. Más de 20 años cuidando tu pasión por el ciclismo
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1">
                    <h3>Enlaces rápidos</h3>
                    <a href="#home" className="text-gray-400 hover:text-gray-600">Inicio</a>
                    <a href="#services" className="text-gray-400 hover:text-gray-600">Servicios</a>
                    <a href="#about" className="text-gray-400 hover:text-gray-600">Nosotros</a>
                    <a href="#contact" className="text-gray-400 hover:text-gray-600">Contacto</a>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-1">
                    <h3>Contacto</h3>
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline className="w-6 h-6 text-red-500" />
                        <p className="text-gray-400">Paraguay 1674, Yerba Buena, Tucumán</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <IoCallOutline className="w-6 h-6 text-red-500" />
                        <p className="text-gray-400">+54 9 381 547-5600</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineMailOutline className="w-6 h-6 text-red-500" />
                        <p className="text-gray-400">mfcmecanicabici@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TbClockHour7 className="w-6 h-6 text-red-500" />
                        <p className="text-gray-400">Lun a Vie - 09:00 a 18:00</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t-1 border-slate-300 p-4 items-center">
                <p className="text-gray-400 text-center">@2025 MFC Detailing Service. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}