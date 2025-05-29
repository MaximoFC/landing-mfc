import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbClockHour7 } from "react-icons/tb";
import { FaRegMessage } from "react-icons/fa6";


export default function Contact() {
    return (
        <div className="flex flex-col p-4 gap-6 scroll-mt-26" id="contact">
            <div className="flex flex-col items-center gap-6">
                <h2 className="p-2 border-2 border-red-500 rounded-xl text-red-500 text-lg border-dashed">Contacto</h2>
                <h3 className="text-4xl font-semibold text-center md:text-left">¿Listo para cuidar tu bicicleta?</h3>
                <p className="text-xl text-gray-700 text-center">Contactanos para agendar tu servicio o resolver cualquier duda. Estamos aquí para ayudarte.</p>
            </div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <div className="border-1 border-slate-300 rounded-xl p-4 shadow-xl flex flex-col shadow-slate-300 md:p-10 md:gap-4">
                        <div className="flex gap-2 items-center">
                            <IoLocationOutline className="w-10 h-10 text-red-500" />
                            <p className="text-3xl font-semibold">Ubicación</p>
                        </div>
                        <h2 className="text-gray-700 text-xl">Paraguay 1674, Yerba Buena, Tucumán</h2>
                    </div>
                    <div className="border-1 border-slate-300 rounded-xl p-4 shadow-xl flex flex-col shadow-slate-300 md:p-10 md:gap-4">
                        <div className="flex gap-2 items-center">
                            <IoCallOutline className="w-10 h-10 text-red-500" />
                            <p className="text-3xl font-semibold">Teléfono</p>
                        </div>
                        <h2 className="text-gray-700 text-xl">+54 9 381 547-5600</h2>
                    </div>
                    <div className="border-1 border-slate-300 rounded-xl p-4 shadow-xl flex flex-col shadow-slate-300 md:p-10 md:gap-4">
                        <div className="flex gap-2 items-center">
                            <MdOutlineMailOutline className="w-10 h-10 text-red-500" />
                            <p className="text-3xl font-semibold">Email</p>
                        </div>
                        <h2 className="text-gray-700 text-xl">mfcmecanicabici@gmail.com</h2>
                    </div>
                    <div className="border-1 border-slate-300 rounded-xl p-4 shadow-xl flex flex-col shadow-slate-300 md:p-10 md:gap-4">
                        <div className="flex gap-2 items-center">
                            <TbClockHour7 className="w-10 h-10 text-red-500" />
                            <p className="text-3xl font-semibold">Horarios</p>
                        </div>
                        <h2 className="text-gray-700 text-xl">Lunes a viernes de 09:00 a 18:00</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="border-1 border-slate-300 rounded-xl p-4 shadow-xl shadow-slate-300">
                    <div className="flex gap-2 items-center">
                        <FaRegMessage className="w-8 h-8 text-red-500" />
                        <p className="text-xl font-semibold">Envianos un mensaje</p>
                    </div>
                    <form
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Nombre completo</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Tu nombre completo"
                                className="border-1 border-slate-300 rounded-xl p-2"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="mobilenumber">Teléfono</label>
                            <input
                                id="mobilenumber"
                                type="text"
                                placeholder="Ej: 1 555 123-4567"
                                className="border-1 border-slate-300 rounded-xl p-2"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                type="text"
                                placeholder="tu@email.com"
                                className="border-1 border-slate-300 rounded-xl p-2"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message">Tu mensaje</label>
                            <textarea 
                                name="" 
                                id="message" 
                                placeholder="Contanos qué necesitas..."
                                className="border-1 border-slate-300 rounded-xl p-2"
                            />
                        </div>
                        <button className="bg-red-500 p-3 text-white rounded-xl font-semibold hover:bg-red-600">
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="border-1 border-slate-300 rounded-xl p-4 shadow-xl shadow-slate-300" >
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline className="w-8 h-8 text-red-500" />
                        <p className="text-xl font-semibold">Nuestra ubicación</p>
                    </div>
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.998858070766!2d-65.29520012523469!3d-26.80816498884238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d171b6290d%3A0x703db6c2bcf00631!2sParaguay%201674%2C%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1748533312607!5m2!1ses!2sar"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}