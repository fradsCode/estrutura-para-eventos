"use client";
import Image from 'next/image';
import '../../../public/logo.png';
import { Separator } from '../ui/separator';
export function MainHeader() {
  return (
    <>    
        <header className=" w-full h-15 flex items-center justify-between py-1 px-8 gap-4">
            <Image src='/logo.png' width={100} height={100} alt='logo'/>
            <Separator orientation="vertical" className="h-12" />
            <nav className='flex gap-4'>
              <a  href='#home' className=' hover:text-blue-400'>Home</a>
              <a href='#home' className=' hover:text-blue-400'>Empresa</a>
              <a href='#home' className=' hover:text-blue-400'>Serviços</a>
              <a href='#home' className=' hover:text-blue-400'>Eventos</a>
              <a href='#home' className=' hover:text-blue-400'>Clientes</a>
            </nav>
        </header>
        <Separator orientation="horizontal" className="w-full" />
    </>
  );
}
