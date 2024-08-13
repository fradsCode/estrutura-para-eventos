import { SessionTitle } from "../sessionTitle/sessionTitle";

export function Company() {
    return (
        <main className="flex flex-col m-8 h-[30vh] mt-8 space-y-4">
            <SessionTitle title="Empresa"/>
            <div className="flex flex-row w-full h-full justify-around">
                <div className="flex flex-col justify-center items-center rounded-s-full bg-primary w-52"> 
                    <span className="text-2xl">Quem somos?</span>
                </div>
                <div className="w-full border bg-blue-50/5 rounded-e-full ease-in-out animate-pulse hover:bg-blue-50/10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis explicabo eveniet velit eaque similique temporibus, quisquam dolore fuga impedit, doloribus
                    </p>
                </div>
           </div>
        </main>
    )
}