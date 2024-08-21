"use client"

import { useTheme } from "next-themes"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@radix-ui/react-separator";
export function InfoJobs() {
  const infos = [
    {
      title: 'Palcos Personalizados',
      info: 'Desenvolvemos palcos sob medida, atendendo a todos os tipos de eventos, desde shows e festivais até conferências e eventos corporativos.'
    },
    {
      title: 'Arenas Esportivas',
      info: 'Montamos Arenas Esportivas, inclusive para eventos de praia, com arquibancadas, camarotes, áreas de apoio, posto médico, restaurantes, cercamentos e tudo mais que o cliente precisar, atendendo com padrão internacional à todos os tipos de eventos esportivos.'
    },
    {
      title: 'Tendas e Coberturas',
      info: 'Oferecemos soluções versáteis e resistentes para proteção contra intempéries, garantindo o conforto e a segurança dos participantes.'
    },
    {
      title: 'Sistemas de Pisos',
      info: 'Nossos praticáveis são ideais para criar camarotes, arquibancadas, mezaninos e muito mais, proporcionando flexibilidade e funcionalidade.'
    },
    {
      title: 'Estruturas em Box Truss',
      info: 'Utilizamos tecnologia de ponta para montar estruturas leves e pesadas, extremamente seguras, que se adaptam a qualquer tipo de evento.'
    },
    {
      title: 'Barricadas e Grades de Contenção',
      info: 'Fabricadas com materiais de alta qualidade, nossas barricadas e grades garantem a segurança do público em grandes eventos.'
    },
  ];
  return (
    <>
      <div id='serviço' className="w-full justify-center mt-10 items-center flex">
        <h1 className="text-3xl font-bold mb-4 mt-10">Nossos Serviços</h1>
      </div>
      <div className="w-full justify-center  items-center grid lg:flex">
        <div className="max-w-[600px] p-10">
          <h2 className="text-lg mb-2">Por que escolher a Estrutural?</h2>
          <h2 className="mb-2">Experiência e Tradição: </h2>
          <p className="text-sm mb-2">Mais de duas décadas de atuação no mercado nos conferem a expertise necessária para realizar projetos de qualquer porte com excelência.</p>
          <h2 className="mb-2">Inovação e Tecnologia:</h2>
          <p className="text-sm mb-2">Investimos continuamente em tecnologia e inovação para oferecer as melhores soluções em estruturas de eventos.</p>
          <h2 className="mb-2">Compromisso com a Segurança</h2>
          <p className="text-sm mb-2">Seguimos rigorosamente todas as normas de segurança, garantindo a integridade de todos os envolvidos.</p>
          <h2 className="mb-2">Atendimento Personalizado: </h2>
          <p className="text-sm mb-2">Nossa equipe está sempre pronta para entender suas necessidades e oferecer soluções personalizadas que superem suas expectativas.</p>      
        </div>
        <div className=" mt-[60px] max-w-[600px] min-w-[370px] w-full items-center  rounded-lg  bg-muted">
          {infos.map((text, index) => (
            <div key={index} className="border-blue-50 gap-5 " >

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" >
                  <AccordionTrigger className="ml-[10px] ">{text.title}</AccordionTrigger>
                  <AccordionContent className="ml-[10px]">
                    {text.info}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>

          ))}
        </div>
      </div>
    </>
  )
}