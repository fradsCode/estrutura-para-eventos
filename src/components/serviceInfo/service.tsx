import { FaRegLightbulb, FaTheaterMasks, FaWhatsapp } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GiSoundOn } from "react-icons/gi";
import { TbBuildingCircus } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";
export function Service() {
    const infos = [
        {
            Icon: <GiSoundOn size={40} />,
            title: 'Som',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            Icon: <SlScreenDesktop size={40} />,
            title: 'Imagem',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        },
        {
            Icon: <FaTheaterMasks  size={40} />,
            title: 'Palcos',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <TbBuildingCircus  size={40} />,
            title: 'Estrutura',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <FaRegLightbulb size={40} />,
            title: 'Iluminação',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            Icon: <BiDotsHorizontalRounded  size={40} />,
            title: 'Outros',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
    ];
    return (
        <div id='serviço' className="h-screen w-full flex justify-center max-h-[700px] mb-10">
            <main className=" max-w-[1600px] mt-10 flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div className=" flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-bold mb-4 mt-10">Serviços</h1>
                    <p className="text-center max-w-[800px] pl-5 pr-5">
                        Contamos com uma equipe de profissionais altamente treinados para oferecer todo o suporte necessário, além de equipamentos de primeira linha. Nosso objetivo é alcançar a máxima satisfação dos nossos clientes, transformando seus eventos em verdadeiros sucessos.
                    </p>
                </div>
                <div className="max-w-[1400px] flex ml-[120px] flex-wrap gap-5 pl-5 pr-5">
                    {infos.map((text, index) => (

                        <a
                            key={index}
                            href="#"
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-800"
                        >
                            
                            <div>
                            <p className="w-full flex justify-center ">{text.Icon}</p>
                                <h5 className="w-full flex justify-center mb-2 text-2xl font-bold  tracking-tight text-gray-900 dark:text-white">
                                    {text.title}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {text.info}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}