"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

export function Header() {
  const [scroll, setscroll] = useState(true);

  const scrollhandler = () => {
    window.scrollY > 10 ? setscroll(false) : setscroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);

    return () => window.removeEventListener("scroll", scrollhandler);
  }, [scroll]);

  return (
    <header className=" w-full h-24">
      <Breadcrumb
        className={` p-5 max-w-screen-xl mx-auto flex items-center justify-center sm:justify-between  ${
          scroll ? " text-white " : " opacity-90   shadow-xl"
        }
    fixed top-0 left-0 right-0 z-99`}
      >
        <h2 className="text-black hidden font-bold text-xl sm:flex ">
          DevMotors
        </h2>
        <BreadcrumbList>
          <BreadcrumbItem className="text-black  hover:text-cyan-400 hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-black  hover:text-cyan-400 hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/servic">Services</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-black  hover:text-cyan-400 hover:scale-110 transition-all duration-700">
            <BreadcrumbLink href="/">Contatos</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
