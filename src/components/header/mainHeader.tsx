"use client";
import Image from 'next/image';
import '../../../public/logo-light.png';
import '../../../public/logo.png';
import { ModeToggle } from './changeThemeButton';
import { DropMenu } from './dropDownMenu';

export function MainHeader() {
  return (
    <>    
        <header className="w-full h-15 sticky justify-end md:justify-center top-0 z-10 flex items-center py-1 px-8 gap-4 bg-background">
            <nav  className='sm:flex hidden gap-12 items-center px-8 w-full justify-center'>
              <a  rel="noopener noreferrer" href='#home' className=' hover:text-blue-400'>Home</a>
              <a href='#empresa' className=' hover:text-blue-400'>Empresa</a>
              <div className='flex space-x-4 space-y-1'>
                <Image src='/logo.png' className="hidden dark:block" width={100} height={100} alt="Logo da empresa" />
                <Image src="/logo-light.png" className="block dark:hidden" width={100} height={100} alt="Logo da empresa"/>
              </div>
              <a href='#serviço' className=' hover:text-blue-400'>Serviços</a>
              <a href='#estrutura' className=' hover:text-blue-400'>Estruturas</a>
              <a href='#clientes' className=' hover:text-blue-400'>Clientes</a>
            </nav>
            <div className='flex gap-6 justify-end'>
              <DropMenu/>
              <ModeToggle />
            </div>
        </header>
    </>
  );
}
