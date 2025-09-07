import { LiaMedalSolid } from "react-icons/lia";
import { MdOutlineWorkspacePremium, MdOutlineShield } from "react-icons/md";
import { GoPeople, GoDot } from "react-icons/go";
import ImageAbout from "../../public/image-about.jpg";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";

export default function About() {
  return (
    <section
      id="about"
      className="p-8 flex flex-col items-center gap-6 scroll-mt-26"
    >
      <h2 className="p-2 border-2 border-red-500 rounded-xl text-red-500 text-lg border-dashed">
        ¿Por qué elegirnos?
      </h2>
      <p className="text-4xl font-semibold text-center md:text-left">
        Experiencia y Confianza
      </p>
      <p className="text-xl text-gray-700 text-center">
        Somos un taller especializado con años de experiencia cuidando
        bicicletas de todo tipo. Tu satisfacción es nuestra prioridad
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <div className="flex flex-col items-center gap-3 border-1 border-slate-300 rounded-xl p-4 shadow-xl shadow-slate-300">
          <div className="bg-red-100 rounded-full p-4">
            <LiaMedalSolid className="w-15 h-15 text-red-500" />
          </div>
          <p className="text-3xl font-semibold">20+</p>
          <h2 className="text-lg font-semibold text-center">
            Años de experiencia
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Especializados en todo tipo de bicicletas
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 border-1 border-slate-300 rounded-xl p-4 shadow-xl shadow-slate-300">
          <div className="bg-red-100 rounded-full p-4">
            <GoPeople className="w-15 h-15 text-red-500" />
          </div>
          <p className="text-3xl font-semibold">500+</p>
          <h2 className="text-lg font-semibold">Clientes satisfechos</h2>
          <p className="text-lg text-gray-700 text-center">
            Confianza construida día a día
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 border-1 border-slate-300 rounded-xl p-4 shadow-xl shadow-slate-300">
          <div className="bg-red-100 rounded-full p-4">
            <MdOutlineWorkspacePremium className="w-15 h-15 text-red-500" />
          </div>
          <p className="text-3xl font-semibold">Premium</p>
          <h2 className="text-lg font-semibold text-center">
            Servicio de alta calidad
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Dejamos a punto tu bicicleta
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 border-1 border-slate-300 rounded-xl p-4 shadow-xl shadow-slate-300">
          <div className="bg-red-100 rounded-full p-4">
            <MdOutlineShield className="w-15 h-15 text-red-500" />
          </div>
          <p className="text-3xl font-semibold">6 meses</p>
          <h2 className="text-lg font-semibold">Garantía</h2>
          <p className="text-lg text-gray-700 text-center">
            En todas nuestras reparaciones
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8 items-center md:flex-row">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center md:text-left">
            Pasión por el ciclismo, compromiso con la calidad
          </h2>
          <p className="text-lg text-gray-700">
            En MFC entendemos que tu bicicleta es más que un medio de
            transporte: es tu compañera de aventuras, tu herramienta de
            ejercicio y tu pasión.
          </p>
          <p className="text-lg text-gray-700">
            Nuestro equipo cuenta con 24 años de experiencia trabajando con todo
            tipo de bicicletas, desde urbanas hasta de alta competencia.
          </p>
          <p className="text-lg text-gray-700">
            Utilizamos repuestos originales para garantizar que tu bicicleta
            funcione al máximo de su potencial.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex gap-2">
              <GoDot className="text-red-500 w-8 h-8" />
              Mecánicos experimentados
            </div>
            <div className="flex gap-2">
              <GoDot className="text-red-500 w-8 h-8" />
              Repuestos originales
            </div>
            <div className="flex gap-2">
              <GoDot className="text-red-500 w-8 h-8" />
              Garantía extendida
            </div>
            <div className="flex gap-2">
              <GoDot className="text-red-500 w-8 h-8" />
              Servicio personalizado
            </div>
          </div>
        </div>
        <div className="w-70 h-auto md:w-150">
          <Image
            src={ImageAbout}
            alt="Imagen de Facundo Callejas en bicicleta"
            sizes="fill"
            className="rounded-xl shadow-xl shadow-slate-400"
          />
        </div>
      </div>
    </section>
  );
}
