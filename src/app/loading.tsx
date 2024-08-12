'use client'

import { LoaderCircle } from "lucide-react";

export default function Loading() {
return (
    <div className="flex h-screen w-full items-center justify-center transition-all duration-1000 text-2xl">
        <span className="animate-bounce flex gap-4 items-center">
            Carregando <LoaderCircle className="animate-spin" size={40} />
        </span>
    </div>
)
}