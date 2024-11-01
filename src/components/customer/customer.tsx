import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
export function Customer() {
    const infos = [
        {
            Icon: '/globo.png',
            title: 'Globo',
            info: 'mt-2',
            size: {
                h: 60,
                w: 60,
            },
        }, {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/record.png',
            title: 'Rede Record de Televisão',
            info: 'mt-3'
        }, {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/Flu.png',
            title: 'Fluminense',
            info: ' '
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/cbv.png',
            title: 'Confederação Brasileira de Volei',
            info: 'mt-3'
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/CBHb.png',
            title: 'Confederação Brasileira de Handebol',
            info: ''
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/LIESA.png',
            title: 'Liga Independente das Escolas de Samba do Rio de Janeiro',
            info: ''
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/gov-rio.png',
            title: 'Governo do Estado do Rio de Janeiro',
            info: '-mt-2'
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/Niteroi.png',
            title: 'Prefeitura de Niterói',
            info: '-mt-2'
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/sao-go.svg',
            title: 'Prefeitura de São Gonçalo',
            info: '-mt-2'
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/pmrio.png',
            title: 'Policia militar do Rio de Janeiro',
            info: '-mt-2'
        },
        {
            size: {
                h: 80,
                w: 110,
            },
            Icon: '/aeroporto.png',
            title: 'Aeroporto internacional do Galeão',
            info: 'mt-3'
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/fiocruz.png',
            title: 'Fundação Oswaldo Cruz',
            info: '-mt-2'
        },
        {
            size: {
                h: 60,
                w: 60,
            },
            Icon: '/comite.png',
            title: 'Comitê Olímpico Brasileiro',
            info: '-mt-2'
        },
        {
            size: {
                h: 80,
                w: 80,
            },
            Icon: '/centurion.png',
            title: 'Centurion FC',
            info: '-mt-2'
        },
    ];
    return (
        <div className="h-auto w-full flex justify-center mb-10" id='clientes'>
            <main className="w-full flex flex-col items-center pb-8 rounded-lg shadow-lg dark:shadow-blue-950/10 md:mx-20 isolate bg-muted/20 ring-1 ring-black/5">
                <div className=" flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-bold mb-4 mt-10">Clientes</h1>
                </div>
                <div className="max-w-[1400px] xl:max-w-[1000px] flex justify-center flex-wrap gap-5 px-5">
                    {infos.map((text, index) => (
                        <HoverCard key={index}>
                            <HoverCardTrigger>
                                <div
                                    key={index}
                                    className="block h-[120px] max-w-[150px] min-w-[150px] p-6 bg-blue-950 dark:bg-blue-950/20 hover:bg-blue-900 dark:hover:bg-muted/0 rounded-2xl"
                                    style={{boxShadow: '6px 6px 0 rgba(0, 0, 20, 0.5)'}}
                                >
                                <div>
                                    <p className="w-full flex justify-center mb-2"> <Image className={`${text.info}`} src={text.Icon} alt='' height={text.size.h} width={text.size.w} sizes='100wz' /></p>
                                </div>
                            </div></HoverCardTrigger>
                            <HoverCardContent>
                                <h5 className="w-full flex text-center justify-center mb-2 text-[17px] font-bold  tracking-tight text-foreground">
                                    {text.title}
                                </h5>
                            </HoverCardContent>
                        </HoverCard>

                    ))}
                </div>
            </main>
        </div>
    )
}