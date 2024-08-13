import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegLightbulb, FaTheaterMasks } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { TbBuildingCircus } from "react-icons/tb";
export function Customer() {
    const infos = [
        {
            Icon: <GiSoundOn size={40} className="text-primary" />,
            title: 'Som',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            Icon: <SlScreenDesktop size={40} className="text-primary" />,
            title: 'Imagem',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        },
        {
            Icon: <FaTheaterMasks  size={40} className="text-primary" />,
            title: 'Palcos',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <TbBuildingCircus  size={40} className="text-primary" />,
            title: 'Estrutura',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <FaRegLightbulb size={40} className="text-primary" />,
            title: 'Iluminação',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <BiDotsHorizontalRounded  size={40} className="text-primary" />,
            title: 'Outros',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
    ];
    return (
        <div className="h-auto w-full flex justify-center mb-10" id='clientes'>
            <main className=" max-w-[1600px] mt-10 flex flex-col items-center pb-8 border border-gray-200 rounded-lg shadow bg-muted dark:border-gray-700 ">
                <div className=" flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-bold mb-4 mt-10">Clientes</h1>
                    
                </div>
                <div className="max-w-[1400px] flex justify-center flex-wrap gap-5 px-5">
                    {infos.map((text, index) => (

                        <a
                            key={index}
                            className="block max-w-sm min-w-[300px] p-6 bg-primary-foreground/20 border border-gray-200 rounded-lg shadow dark:border-gray-700 hover:bg-primary-foreground"
                        >
                            
                            <div>
                            <p className="w-full flex justify-center ">{text.Icon}</p>
                                <h5 className="w-full flex justify-center mb-2 text-2xl font-bold  tracking-tight text-foreground">
                                    {text.title}
                                </h5>

                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}