import Image from "next/image";
import Logo from "../../public/MFC.jpg";
import { MdCall } from "react-icons/md";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b-1 border-slate-300">
            <Image 
                src={Logo}
                alt="Logo de Mecánica Facundo Callejas"
                width={70}
                height={70}
                className="rounded-xl"
            />
            <div className="flex justify-center p-4 gap-6">
                <a href="#home" className="hover:text-red-600">Inicio</a>
                <a href="#services" className="hover:text-red-600">Servicios</a>
                <a href="#aboutus" className="hover:text-red-600">Nosotros</a>
                <a href="#contact" className="hover:text-red-600">Contacto</a>
            </div>
            <div className="flex gap-4 items-center">
                <MdCall className="text-2xl" />
                <p>+54 9 381 547-5600</p>
                <a 
                    href="https://wa.me/5493815475600/?text=Hola,%20tengo%20una%20consulta" 
                    className="bg-red-500 p-3 text-white rounded-xl font-semibold hover:bg-red-600"
                >
                    Contactar
                </a>
            </div>
        </nav>
    )
}