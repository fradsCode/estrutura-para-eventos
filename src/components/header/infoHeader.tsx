"use client";
import { Instagram, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export function InfoHeader() {
  return (
    <header className=" w-full flex items-center sm:justify-center bg-primary sm:gap-12 gap-8 py-1">
      <a
        className="flex flex-row space-x-1 hover:text-blue-800"
        href="https://www.google.com/maps/place/Estrutural+Eventos/@-22.8324147,-42.989587,17z/data=!4m15!1m8!3m7!1s0x9990f9cf685c79:0x8c35987f75ad1558!2sEstr.+das+Pedrinhas,+615+-+Coelho,+S%C3%A3o+Gon%C3%A7alo+-+RJ,+24730-070!3b1!8m2!3d-22.8324147!4d-42.989587!16s%2Fg%2F11csd2twj_!3m5!1s0x9990088abac47d:0x4e03a282a42ebf8f!8m2!3d-22.8317!4d-42.9894452!16s%2Fg%2F11c6ydqmff?entry=ttu"
        target="_blank"
      >
        <div className="flex flex-row text-xs text-center sm:-mr-[0px] ml-[10px] -mr-[20px]">
          <MapPin size={15} />
          <p  className="sm:flex hidden">
          Estrada das Pedrinhas, 615 galpão- Amendoeira - São Gonçalo - Rio de
          Janeiro
          </p>
        </div>
      </a>
      <div className="flex flex-row text-xs text-center space-x-4">
        <a
          className="flex flex-row space-x-1 hover:text-blue-800"
          href=""
          target="_blank"
        >
          <span className="flex flex-row text-xs text-center gap-1">
            <FaWhatsapp size={15}/>
            <p className="lg:flex hidden" >21 96857-8118</p>
          </span>
        </a>
        <a
          className="flex flex-row space-x-1 hover:text-blue-800"
          href=""
          target="_blank"
        >
          <span className="flex flex-row text-xs text-center gap-1">
          <FaWhatsapp size={15}/>
            <p className=" lg:flex hidden" > 21 99257-5323</p>
          </span>
          </a>
   
        <span className=" lg:flex hidden flex-row text-xs text-center gap-1">
          <Phone size={15} />
          <p className="" > 21 2717-3264</p>
        </span>
        <a
          className="flex flex-row space-x-1 hover:text-blue-800"
          href="https://www.instagram.com/estruturaparaeventos/"
          target="_blank"
        >
          <Instagram size={15} />
          <span className="lg:flex text-xs font-bold hidden">@estruturaparaeventos</span>
        </a>
      </div>
    </header>
  );
}
