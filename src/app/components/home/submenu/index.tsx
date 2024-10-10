"use client";
import { ChevronDownIcon, AlignJustify } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export function SubMenu() {
  return (
    <main className="w-full">
      <Breadcrumb className="max-w-screen-xl  px-5 mx-auto">
        <BreadcrumbList>
          <BreadcrumbItem className=" hidden sm:flex border-solid text-white px-2 rounded-xl border-black border-2 bg-black ">
            <BreadcrumbLink href="/">Pagina 1</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className=" hidden sm:flex border-solid text-white px-2 rounded-xl border-black border-2 bg-black">
            <BreadcrumbLink href="/components">Pagina 2</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 sm:hidden">
            <AlignJustify />
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" sm:hidden" align="start">
            <DropdownMenuItem>Page 1</DropdownMenuItem>
            <DropdownMenuItem>Page 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Breadcrumb>
    </main>
  );
}
