import Image from "next/image";
import Logo from "../../public/MFC.jpg";
import { MdCall } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 border-b-1 border-slate-300 top-0 sticky bg-white relative z-1">
            <Image 
                src={Logo}
                alt="Logo de Mecánica Facundo Callejas"
                width={70}
                height={70}
                className="rounded-xl"
            />
            <div className="hidden md:flex gap-6">
                <a href="#home" className="hover:text-red-600">Inicio</a>
                <a href="#services" className="hover:text-red-600">Servicios</a>
                <a href="#about" className="hover:text-red-600">Nosotros</a>
                <a href="#contact" className="hover:text-red-600">Contacto</a>
            </div>
            <div className="items-center hidden md:flex gap-4">
                <MdCall className="text-2xl" />
                <p>+54 9 381 547-5600</p>
                <a 
                    href="https://wa.me/5493815475600/?text=Hola,%20tengo%20una%20consulta" 
                    className="bg-red-500 p-3 text-white rounded-xl font-semibold hover:bg-red-600"
                >
                    Contactar
                </a>
            </div>
            <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <GiHamburgerMenu className="h-8 w-8" />
            </button>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 p-6 md:hidden border-b-1 border-slate-300 shadow-xl shadow-slate-400">
                    <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-red-500">Inicio</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-red-500">Servicios</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-red-500">Nosotros</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-red-500">Contacto</a>
                    <div className="flex gap-2 items-center justify-center">
                        <MdCall className="text-2xl" />
                        <p>+54 9 381 547-5600</p>
                        <a 
                            href="https://wa.me/5493815475600/?text=Hola,%20tengo%20una%20consulta" 
                            className="bg-red-500 p-2 text-white rounded-xl font-semibold hover:bg-red-600"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}