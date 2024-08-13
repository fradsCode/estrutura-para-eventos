import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegLightbulb, FaTheaterMasks } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { TbBuildingCircus } from "react-icons/tb";
export function Service() {
    const infos = [
        {
            Icon: <GiSoundOn size={40} className="text-primary" />,
            title: 'Arquibancada metálica tubular completa',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            Icon: <SlScreenDesktop size={40} className="text-primary" />,
            title: '⁠Palcos todos os tamanhos',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        },
        {
            Icon: <FaTheaterMasks size={40} className="text-primary" />,
            title: 'Palco geospace (concha)',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <TbBuildingCircus size={40} className="text-primary" />,
            title: 'Camarotes todos os tamanhos',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <FaRegLightbulb size={40} className="text-primary" />,
            title: '⁠Tenda galpão todos os tamanhos',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <BiDotsHorizontalRounded size={40} className="text-primary" />,
            title: 'Outros',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
    ];
    return (
        <div className="h-auto w-full flex justify-center mb-10" id='serviço'>
            <main className=" max-w-[1600px] mt-10 flex flex-col items-center pb-8">
                <div className=" flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-bold mb-4 mt-10">Estruturas</h1>

                </div>
                <div className="max-w-[1400px] flex justify-center flex-wrap gap-5 px-5">
                    {infos.map((text, index) => (
                        <div key={index} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:bg-primary-foreground dark:bg-gray-800  dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/c1.jpeg" alt="" />
                            </a>
                            <div className="p-5 hover:bg-primary-foreground h-[90px]">
                                <a href="#">
                                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900  dark:text-white">{text.title}</h5>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}