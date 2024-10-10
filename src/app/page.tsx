import Image from "next/image";
import { Container } from "./components/container";
import { SubMenu } from "./components/home/submenu";

export default function Home() {
  return (
    <main className="w-full">
      <SubMenu />
      <Container>
        <div className="bg-slate-900 h-96 mt-11 ">asd</div>
        <div className="bg-slate-100 h-96 mt-44 ">asdasddd</div>
        <div className="bg-slate-500 h-96 mt-44 ">asdasdasd</div>
      </Container>
    </main>
  );
}
