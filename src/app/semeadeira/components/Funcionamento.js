import Image from "next/image";

export default function Funcionamento() {
  return (
    <>
      <div className="px-6 md:px-20 lg:px-40 py-8">
        <h1 className="text-[#2E664D] font-openSans text-xl md:text-2xl lg:text-3xl font-bold pt-4 md:pt-0 pb-6 md:pb-12 text-center md:text-left">
          Veja em funcionamento
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-8 md:gap-y-12">
          <Image
            src="/imgs/integracao/video.png"
            width={800}
            height={300}
            className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-full"
          />
          <button className="text-white font-openSans font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-8 py-2 bg-[#A5BB3C] rounded">
            COMPRE AGORA
          </button>
        </div>
      </div>
    </>
  );
}
