"use client";
import Image from 'next/image';
import '../../../public/logo.png';
import { Separator } from '../ui/separator';
export function WhatsIcon() {
  return (
    <>    
        <a href='#' className='fixed  right-0 bottom-0'>
            <Image src="/whats.png" width={100} height={100} alt='a'/>
        </a>
        
    </>
  );
}
