import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { GiHamburgerMenu } from "react-icons/gi";
  export function DropMenu() {
    return (
      <div className="sm:hidden mt-1 after:bg-white">
      <DropdownMenu>
      <DropdownMenuTrigger><GiHamburgerMenu/></DropdownMenuTrigger>
      <DropdownMenuContent>
        <a href='#home'>
        <DropdownMenuItem>Home</DropdownMenuItem>
        </a>
        <a href='#empresa'>
        <DropdownMenuItem>Empresa</DropdownMenuItem>
        </a>
        <a href="#serviço">
        <DropdownMenuItem>serviço</DropdownMenuItem>
        </a>
        <a href="#estrutura">
        <DropdownMenuItem>Estruturas</DropdownMenuItem>
        </a>
        <a href="#clientes">
        <DropdownMenuItem>Clientes</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    );
  }
  