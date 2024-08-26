"use client";
import Image from 'next/image';
import '../../../public/logo.png';
import { Separator } from '../ui/separator';
export function WhatsIcon() {
  return (

    <>
          <a href='https://www.instagram.com/estruturaparaeventos/'  target="_blank" className='fixed  right-[28px] bottom-[65px] '>
            <Image src="/Instagram_icon.png" width={40} height={40} alt='a'/>
        </a>  
        <a href="https://wa.me/21968578118"  target="_blank" className='fixed  right-0 bottom-0 '>
            <Image src="/whats.png" width={100} height={100} alt='a'/>
        </a>
        
    </>
  );
}
