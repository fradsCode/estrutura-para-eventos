import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center align-middle items-start w-full bg-muted py-8 md:gap-28 px-4">
            <div className="flex flex-col space-y-4 mb-5">
                <span className="text-sm font-light text-foreground flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-primary p-1">
                        <MapPin size={18} />
                    </div>
                    Estrada das Pedrinhas, 615 galpão - Amendoeira - São Gonçalo - Rio de Janeiro
                </span>
                <span className="text-sm font-light text-foreground flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-primary p-1">
                        <Mail size={18} />
                    </div>
                    Contatoestruturaleventos@hotmail.com
                </span>
                <span className="text-sm font-light text-foreground grid md:flex flex-row gap-1 items-center">

                  <p className="flex"><FaWhatsapp size={15} className="mt-1 ml-1 mr-1" />(21) 96857-8118 </p> <p className="flex"><FaWhatsapp size={15} className="mt-1 ml-1 mr-1"/>(21) 99257-5323  </p><p className="flex"><Phone size={15} className="mt-1 ml-1 mr-1"/> (21) 2717-3264</p>
                </span>
            </div>
            <div className="flex flex-col text-xs gap-8">
                <a
                    className="flex flex-row space-x-1 hover:text-primary w-4"
                    href="https://www.instagram.com/estruturaparaeventos/"
                    target="_blank"
                >
                    <Instagram size={18} />
                </a>
                <div className="flex flex-col space-y-2 md:mt-[0px] mt-[-20px] mb-4">
                    <span>CNPJ - 06.876.822/0001-17</span>
                    <span>
                        CEP - 24.730-070
                    </span>
                </div>
            </div>
            <div className="absolute md:mt-[120px] mt-[280px]  md:ml-[0px]  flex-row justify-center align-middle">
                <span className="text-xs pt-8  ">Estrutural Eventos © 2024</span>
            </div>
        </footer>
    )
}