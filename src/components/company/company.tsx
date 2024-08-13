import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function Company() {
    return (
        <main className="flex flex-col m-8 h-screen mt-8 space-y-4">
            <div className="w-1/2 flex flex-col space-y-4">
               <Accordion type="single" collapsible className="border rounded-lg px-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="flex justify-start items-baseline gap-2 text-xl">
                            <span className="text-3xl">10</span> Anos de experiência
                        </AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="border rounded-lg px-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="flex justify-start items-baseline gap-2 text-xl">
                            <span className="text-3xl">10</span> Anos de experiência
                        </AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}