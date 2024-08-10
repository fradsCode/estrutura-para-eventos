"use client";
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function CarouselHero() {
  const Imgs = ['/c1.jpeg', '/c2.jpeg', '/c3.jpeg', '/c1.jpeg', '/c1.jpeg']
  return (
    <div id='Home'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 200000,
          }),
        ]}>
        <CarouselContent >
          {Imgs.map((img, index) => (
            <CarouselItem  key={index}>
              <div  >
                <Card>
                  <CardContent className="w-full  border-none "  >
                     <Image  src={img}priority alt={`Image ${index}`} sizes="100vw" width={100} height={100} style={{
                      width: '100%',
                      maxWidth: '1800px',
                    }} /> 
                
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}