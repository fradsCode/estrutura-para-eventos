
export function Company() {
    return (
        <main id="empresa" className="flex flex-row justify-center align-middle -rotate-3 mt-12 h-auto gap-x-4 bg-blue-600 p-1 xl:p-5 mx-4 md:mx-10 rounded-2xl animate-accordion-down">
            <div className="flex justify-center w-full bg-blue-700 p-1 xl:p-10 rounded-2xl rotate-3">
                <div className="flex flex-row bg-auto bg-center rounded-2xl" style={{ backgroundImage: "url('/showBG.avif')" }}>
                    <div className="flex flex-col w-full bg-foreground/90 dark:bg-background/90 text-center py-10 px-4 md:px-10 text-white justify-center align-middle items-center space-y-4 rounded-2xl">
                        <h2 className="text-3xl font-bold mt-10">Estrutural Eventos</h2>
                        <p className="text-base text-white leading-6 md:w-3/4 xl:w-2/3 2xl:w-1/3">
                        Com mais de 20 anos de experiência no mercado, somos a principal empresa de montagem de estruturas para eventos no Rio de Janeiro. 
                        Nossa trajetória é marcada pela excelência, inovação e compromisso com a segurança e a qualidade em cada projeto que realizamos.
                        </p>
                        <h3 className="text-blue-400 font-bold">Quem somos?</h3> 
                        <p className="text-base text-foreground text-white leading-6 md:w-3/4 xl:w-2/3 2xl:w-1/3">
                        Desde nossa fundação, temos nos dedicado a transformar eventos em experiências inesquecíveis. 
                        Nossa equipe altamente qualificada e nossos equipamentos de ponta garantem a montagem de estruturas robustas e seguras, 
                        adaptadas às necessidades específicas de cada cliente de forma personalizada.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}