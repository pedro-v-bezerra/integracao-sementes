import Image from "next/image";
import Link from "next/link";

export default function Produtos() {
  return (
    <>
      <div className="relative py-4">
        {/* BG CINZA */}
        <div className="absolute inset-0 h-full md:h-[80%] bg-customGreen1 z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 px-4 md:px-12 xl:px-40 gap-8 xl:gap-16 py-8">
          {/* IMAGENS */}
          <div>
            <Image
              src="/imgs/integracao/linhas.png"
              height={600}
              width={600}
            />
          </div>

          {/* TEXTOS */}
          <div className="flex flex-col justify-start text-center md:text-left ">
            <h1 className="text-[#2E664D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold">
              Nossas Linhas
            </h1>
            <p className="text-[#354D4D] font-openSans py-4 md:py-6 lg:py-8 md:pr-0 lg:pr-32 leading-7 font-medium">
              Os constantes investimentos em nossa Unidade de Beneficiamento de Sementes nos permite desenvolver e oferecer tecnologias que trazem grandes benefícios aos nossos clientes.
            </p>
            <Link href="/products" className="text-white w-max bg-[#A5BB3C] py-2 px-8 md:py-1 md:px-12 lg:py-1 lg:px-16 rounded-full mx-auto md:mx-0">
              VER MAIS
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
