"use client";
import { Instagram, MapPin, Phone } from "lucide-react";

export function InfoHeader() {
  return (
    <header className=" w-full flex items-center justify-center bg-primary gap-12 py-1 text-blue-50">
      <a
        className="flex flex-row space-x-1 hover:text-blue-800"
        href="https://www.google.com/maps/place/Estrutural+Eventos/@-22.8324147,-42.989587,17z/data=!4m15!1m8!3m7!1s0x9990f9cf685c79:0x8c35987f75ad1558!2sEstr.+das+Pedrinhas,+615+-+Coelho,+S%C3%A3o+Gon%C3%A7alo+-+RJ,+24730-070!3b1!8m2!3d-22.8324147!4d-42.989587!16s%2Fg%2F11csd2twj_!3m5!1s0x9990088abac47d:0x4e03a282a42ebf8f!8m2!3d-22.8317!4d-42.9894452!16s%2Fg%2F11c6ydqmff?entry=ttu"
        target="_blank"
      >
        <div className="flex flex-row text-xs text-center">
          <MapPin size={15} />
          Estrada das Pedrinhas, 615 galpão- Amendoeira - São Gonçalo - Rio de
          Janeiro
        </div>
      </a>
      <div className="flex flex-row text-xs text-center space-x-4">
        <a
          className="flex flex-row space-x-1 hover:text-blue-800"
          href=""
          target="_blank"
        >
          <span className="flex flex-row text-xs text-center gap-1">
            <Phone size={15} />
            21 96857-8118
          </span>
        </a>
        <a
          className="flex flex-row space-x-1 hover:text-blue-800"
          href=""
          target="_blank"
        >
          <span className="flex flex-row text-xs text-center gap-1">
            <Phone size={15} />
            21 99257-5323
          </span>
        </a>
        <span className="flex flex-row text-xs text-center gap-1">
          <Phone size={15} />
          21 2717-3264
        </span>
        <a
          className="flex flex-row space-x-1 hover:text-blue-800"
          href="https://www.instagram.com/estruturaparaeventos/"
          target="_blank"
        >
          <Instagram size={15} />
          <span className="text-xs font-bold">@estruturaparaeventos</span>
        </a>
      </div>
    </header>
  );
}
