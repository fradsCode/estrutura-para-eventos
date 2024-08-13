"use client";
import Image from 'next/image';
import '../../../public/logo-light.png';
import '../../../public/logo.png';
import { Separator } from '../ui/separator';
import { ModeToggle } from './changeThemeButton';
import { DropMenu } from './dropDownMenu';

export function MainHeader() {
  return (
    <>    
        <header className=" w-full h-15 flex items-center justify-between py-1 px-8 gap-4">
          <div className='flex space-x-4 space-y-1'>
            <Image src='/logo.png' className="hidden dark:block" width={100} height={100} alt="Logo da empresa" />
            <Image src="/logo-light.png" className="block dark:hidden" width={100} height={100} alt="Logo da empresa"/>
            <Separator orientation="vertical" className="h-12" />
          </div>
            <nav  className='sm:flex hidden gap-4'>
              <a  rel="noopener noreferrer" href='#home' className=' hover:text-blue-400'>Home</a>
              <a href='#empresa' className=' hover:text-blue-400'>Empresa</a>
              <a href='#serviço' className=' hover:text-blue-400'>Serviços</a>
              <a href='#eventos' className=' hover:text-blue-400'>Eventos</a>
              <a href='#clientes' className=' hover:text-blue-400'>Clientes</a>
            </nav>
            <div className='flex gap-6'>
              <DropMenu/>
              <ModeToggle />
            </div>
        </header>
        <Separator orientation="horizontal" className="w-full" />
    </>
  );
}
