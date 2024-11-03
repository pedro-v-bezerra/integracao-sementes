import Link from "next/link";
import Image from "next/image";

export default function Semeadeira() {
  return (
    <div className="relative">
      <div className="relative bg-semeadeira bg-cover z-20 h-full"> {/* Aumentei o z-index aqui */}
        <div className="relative z-20 pt-[390px] pb-72 flex flex-col gap-y-8 px-8 md:px-40 lg:px-80 py-20">
          <h1 className="text-white font-openSans text-4xl font-bold text-center md:text-left">
            Mais do que máquinas<br />soluções de plantio!
          </h1>
          <Link href="/semeadeira" className="text-white w-max bg-[#A5BB3C] py-2 px-8 md:py-1 md:px-12 lg:py-1 lg:px-16 rounded-full mx-auto md:mx-0">
            SAIBA MAIS
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-10 h-[100px] bg-customGreen1"></div>
    </div>
  );
}
