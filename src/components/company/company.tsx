import { FaPlus } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function Company() {
    return (
        <main className="flex flex-row justify-center align-middle mt-12 h-auto gap-x-4 bg-primary dark:bg-foreground p-10 mx-10 rounded-2xl">
            <div className="flex flex-row bg-secondary rounded-2xl p-4 py-20">
                <div className="w-1/2 flex flex-col space-y-4 p-4">
                <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className=" flex justify-between items-baseline text-xl px-4">
                                <div className="flex flex-row w-1/2 gap-4 items-center">
                                    <span className="text-4xl font-bold flex flex-row items-center gap-1">10<FaPlus size={20}/></span>
                                    <span className="text-lg text-start leading-4">Anos de experiência</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus maxime eius dolore
                                    enim officia similique quaerat asperiores laudantium repellendus praesentium 
                                    soluta sequi, iusto rerum velit! Unde earum et iure.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className=" flex justify-between items-baseline text-xl px-4">
                                <div className="flex flex-row w-1/2 gap-4 items-center">
                                    <span className="text-4xl font-bold flex flex-row items-center gap-1">10<FaPlus size={20}/></span>
                                    <span className="text-lg text-start leading-4">Anos de experiência</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus maxime eius dolore
                                    enim officia similique quaerat asperiores laudantium repellendus praesentium 
                                    soluta sequi, iusto rerum velit! Unde earum et iure.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className=" flex justify-between items-baseline text-xl px-4">
                                <div className="flex flex-row w-1/2 gap-4 items-center">
                                    <span className="text-4xl font-bold flex flex-row items-center gap-1">250<FaPlus size={20}/></span>
                                    <span className="text-lg text-start leading-4">Clientes atendidos</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus maxime eius dolore
                                    enim officia similique quaerat asperiores laudantium repellendus praesentium 
                                    soluta sequi, iusto rerum velit! Unde earum et iure.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex flex-col w-10/12 text-center justify-center align-middle items-center space-y-8 border rounded-2xl">
                    <h2 className="uppercase w-auto">Estrutural Eventos</h2>
                    <p className="text-base text-muted-foreground leading-6 xl:w-1/3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus repudiandae dolor, <span className="text-primary font-bold">eveniet minima</span> laudantium nostrum. 
                        Nam vitae expedita cumque non adipisci quos itaque iure! Ullam at placeat esse debitis perspiciatis.
                    </p>
                    <p className="text-base text-muted-foreground leading-6 xl:w-1/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus repudiandae dolor, <span className="text-primary font-bold">eveniet minima</span> laudantium nostrum. 
                        Nam vitae expedita cumque non adipisci quos itaque iure! Ullam at placeat esse debitis perspiciatis.
                    </p>
                </div>
            </div>
        </main>
    )
}