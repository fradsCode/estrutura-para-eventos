"use client";

import { CarouselHero } from "@/components/carousel/carousel";
import { InfoHeader } from "@/components/header/infoHeader";
import { MainHeader } from "@/components/header/mainHeader";

export default function Home() {
  return (
    <>
      <InfoHeader />
      <MainHeader />
      <CarouselHero/>
    </>
  );
}
