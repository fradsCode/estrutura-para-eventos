"use client";

import ImageSlider from "@/components/carousel/carousel";
import { Company } from "@/components/company/company";
import { Customer } from "@/components/customer/customer";
import { Footer } from "@/components/footer/footer";
import { InfoHeader } from "@/components/header/infoHeader";
import { MainHeader } from "@/components/header/mainHeader";
import { InfoJobs } from "@/components/infoJobs/jobs";
import { Service } from "@/components/serviceInfo/service";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WhatsIcon } from "@/components/whatsIcon/whatsIcon";

export default function Home() {
  return (
    <>
      <ScrollArea className=" h-[100vh] z-50">
        <div className="relative scroll-smooth">
        <div className="scroll-smooth">
        <InfoHeader />
        <MainHeader />
        <ImageSlider/>
        <Company />
        <InfoJobs/>
        <Service/>
        <Customer/>
        <WhatsIcon/>
        </div>
        <Footer />
        </div>
      </ScrollArea>
    </>
  );
}
