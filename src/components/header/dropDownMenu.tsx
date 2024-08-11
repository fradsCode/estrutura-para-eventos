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
        <a href="#Home">
        <DropdownMenuItem>Home</DropdownMenuItem>
        </a>
        <a href="#Empresa">
        <DropdownMenuItem>Empresa</DropdownMenuItem>
        </a>
        <a href="#Serviços">
        <DropdownMenuItem>Serviços</DropdownMenuItem>
        </a>
        <a href="#Eventos">
        <DropdownMenuItem>Eventos</DropdownMenuItem>
        </a>
        <a href="#Clientes">
        <DropdownMenuItem>Clientes</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    );
  }
  