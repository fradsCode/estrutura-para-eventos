import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from 'next/image';
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { GiHamburgerMenu } from "react-icons/gi";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
  export function DropMenu() {
    return (
      <Sheet>
        <SheetTrigger><GiHamburgerMenu/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image src='/logo.png' className="hidden dark:block" width={100} height={100} alt="Logo da empresa" />
              <Image src="/logo-light.png" className="block dark:hidden" width={100} height={100} alt="Logo da empresa"/>
            </SheetTitle>
              <Separator orientation="horizontal"/>
          </SheetHeader>
          <div className="mt-4 flex flex-col gap-y-2">
            <Button asChild variant="ghost">
              <a href="#home">
                Home
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#empresa">
                Empresa
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#serviço">
                Serviço
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#estruturas">
                Estruturas
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#clientes">
                Clientes
              </a>
            </Button>

          </div>
        </SheetContent>
    </Sheet>
    );
  }
  