import Image from "next/image"

export default function Mvv() {
  return (
    <>
      <div className="grid lg:grid-cols-3 px-8 xl:px-40 bg-[#FFFBEF] gap-x-8 xl:gap-x-28 gap-y-8 py-20">
        <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <Image
              src='/imgs/integracao/missao.png'
              width={50}
              height={50}
              className=""
            />
            <h1 className="text-[#2E664D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold">
              Missão
            </h1>
          </div>
          <p className="text-[#354D4D] font-openSans leading-7 font-medium xl:tracking-wider text-sm lg:text-base xl:leading-8 text-center">
            Comercializar Sementes forrageiras de alta qualidade e desempenho para agricultores e pecuaristas, contribuindo para uma produção eficiente e sustentável.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <Image
              src='/imgs/integracao/visao.png'
              width={50}
              height={50}
              className=""
            />
            <h1 className="text-[#2E664D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold">
              Visão
            </h1>
          </div>
          <p className="text-[#354D4D] font-openSans leading-7 font-medium xl:tracking-wider text-sm lg:text-base xl:leading-8 text-center">
            Ser reconhecida no mercado de sementes forrageiras e de cobertura por qualidade e custo-benefício.
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <Image
              src='/imgs/integracao/valores.png'
              width={50}
              height={50}
              className=""
            />
            <h1 className="text-[#2E664D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold">
              Valores
            </h1>
          </div>
          <p className="text-[#354D4D] font-openSans leading-7 font-medium xl:tracking-wider text-sm lg:text-base xl:leading-8 text-center">
            Senso de dono<br/>Compromentimento<br/>Espiríto Vencedor<br/>Respeito
          </p>
        </div>

      </div>
    </>
  )
}