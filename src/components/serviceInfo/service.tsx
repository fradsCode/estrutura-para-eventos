import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegLightbulb, FaTheaterMasks } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { TbBuildingCircus } from "react-icons/tb";
export function Service() {
    const infos = [
        {
            Icon: '/arquibancada.jpg',
            title: 'Arquibancada',
        },
        {
            Icon: '/piramidal.jpeg',
            title: '⁠Piramidal',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        },
        {
            Icon: '/geo.jpg',
            title: 'Palco geospace (concha)',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: '/outros.jpg',
            title: 'Outros',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
    ];
    return (
        <div className="h-auto w-full flex justify-center mb-10" id='estrutura'>
            <main className=" max-w-[1600px] mt-10 flex flex-col items-center pb-8">
                <div className=" flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-bold mb-4 mt-10">Estruturas</h1>
                    <p className="max-w-[600px] text-center flex pl-5 pr-5">Criamos estruturas personalizadas para atender às suas necessidades específicas. Desde palcos e tendas até arquibancadas e passarelas, nossa equipe de profissionais experientes trabalha lado a lado com você para projetar e construir estruturas que impressionam.</p>

                </div>
                <div className="max-w-[1400px] flex justify-center flex-wrap gap-5 px-5">
                    {infos.map((text, index) => (
                        <Dialog key={index}>
                        <DialogTrigger><div key={index} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:bg-primary-foreground dark:bg-gray-800  dark:border-gray-700">
                            <a>
                                <Image className="rounded-t-lg" src={text.Icon} alt="" width={1000} height={1000}/>
                            </a>
                            <div className="p-5 hover:bg-primary-foreground h-[90px]">
                                <a>
                                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900  dark:text-white">{text.title}</h5>
                                    
                                </a>
                            </div>
                        </div></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription className="w-full">
                            <Image className="rounded-t-lg" src={text.Icon} alt="" width={1200} height={1000} />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                        
                    ))}
                </div>
            </main>
        </div>
    )
}