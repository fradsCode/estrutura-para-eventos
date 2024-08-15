
export function Company() {
    return (
        <main className="flex flex-row justify-center align-middle -rotate-3 mt-12 h-auto gap-x-4 bg-blue-600 p-2 xl:p-5 mx-10 rounded-2xl animate-accordion-down">
            <div className="flex justify-center w-full bg-blue-700 p-2 xl:p-10 rounded-2xl rotate-3">
                <div className="flex flex-row bg-auto bg-center rounded-2xl" style={{ backgroundImage: "url('/showBG.avif')" }}>
                    <div className="flex flex-col w-full text-center bg-foreground/90 dark:bg-background/90 py-10 px-4 md:px-10 text-foreground justify-center align-middle items-center space-y-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-4 mt-10">Estrutural Eventos</h2>
                        <p className="text-base text-white leading-6 xl:w-1/3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Temporibus repudiandae dolor, <span className="text-primary font-bold">eveniet minima</span> laudantium nostrum. 
                            Nam vitae expedita cumque non adipisci quos itaque iure! Ullam at placeat esse debitis perspiciatis.
                        </p>
                        <p className="text-base text-foreground text-white leading-6 xl:w-1/3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Temporibus repudiandae dolor, <span className="text-primary font-bold">eveniet minima</span> laudantium nostrum. 
                            Nam vitae expedita cumque non adipisci quos itaque iure! Ullam at placeat esse debitis perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}