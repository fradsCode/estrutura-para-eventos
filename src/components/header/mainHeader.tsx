"use client";
import Image from 'next/image';
import '../../../public/logo-light.png';
import '../../../public/logo.png';
import { Separator } from '../ui/separator';
import { ModeToggle } from './changeThemeButton';

export function MainHeader() {
  return (
    <>    
        <header className=" w-full h-15 flex items-center justify-between py-1 px-8 gap-4">
          <div className='flex space-x-4 space-y-1'>
            <Image src='/logo.png' className="hidden dark:block" width={100} height={100} alt="Logo da empresa" />
            <Image src="/logo-light.png" className="block dark:hidden" width={100} height={100} alt="Logo da empresa"/>
            <Separator orientation="vertical" className="h-12" />
          </div>
            <nav className='flex gap-4'>
              <a  href='#home' className=' hover:text-blue-400'>Home</a>
              <a href='#home' className=' hover:text-blue-400'>Empresa</a>
              <a href='#home' className=' hover:text-blue-400'>Serviços</a>
              <a href='#home' className=' hover:text-blue-400'>Eventos</a>
              <a href='#home' className=' hover:text-blue-400'>Clientes</a>
            </nav>
            <div>
              <ModeToggle />
            </div>
        </header>
        <Separator orientation="horizontal" className="w-full" />
    </>
  );
}
