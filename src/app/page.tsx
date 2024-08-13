"use client";

import ImageSlider from "@/components/carousel/carousel";
import { Footer } from "@/components/footer/footer";
import { InfoHeader } from "@/components/header/infoHeader";
import { MainHeader } from "@/components/header/mainHeader";
import { Service } from "@/components/serviceInfo/service";
import { WhatsIcon } from "@/components/whatsIcon/whatsIcon";

export default function Home() {
  return (
    <>
      <InfoHeader />
      <MainHeader />
      <ImageSlider/>
      <Service/>
      <WhatsIcon/>
      <Footer />
    </>
  );
}
