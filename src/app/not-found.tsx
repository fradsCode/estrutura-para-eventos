'use client'

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {

    const router = useRouter()
    useEffect(() => {
      const timeOut = setTimeout(() => router.push('/'), 4000)
      return () => {
        clearTimeout(timeOut)
      }
    }, [])
return (
    <div className="flex h-screen w-full items-center justify-center">
        <div className="flex gap-3 text-xl align-middle items-center">
            <span className="flex flex-col text-xl">
                Página não encontrada
                <small className="text-xs">você será redirecionado a página principal.</small>
            </span>
            <Separator orientation="vertical" className="h-10"/>
            <span className="text-4xl text-blue-500">404</span>
        </div>
    </div>
)
}