import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center align-middle items-start w-full bg-muted py-8 gap-28 px-4">
            <div className="flex flex-col space-y-4">
                <span className="text-sm font-light text-foreground flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-primary p-1">
                        <MapPin size={18}/> 
                    </div>
                    Estrada das Pedrinhas, 615 galpão - Amendoeira - São Gonçalo - Rio de Janeiro
                </span>
                <span className="text-sm font-light text-foreground flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-primary p-1">
                        <Mail size={18}/> 
                    </div>
                    Contatoestruturaleventos@hotmail.com 
                </span>
                <span className="text-sm font-light text-foreground flex flex-row gap-1 items-center">
                    <div className="rounded-full bg-primary p-1">
                        <Phone size={18}/> 
                    </div>
                    (21) 96857-8118 / (21) 99257-5323 / (21) 2717-3264
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
                <div className="flex flex-col space-y-2">
                    <span>CNPJ - 06.876.822/0001-17</span>
                    <span>
                        CEP - 24.730-070
                    </span>
                </div>
            </div>
            <div>
                <span className="text-xs pt-8">Estrutural Eventos © 2024</span>
            </div>
        </footer>
    )
}