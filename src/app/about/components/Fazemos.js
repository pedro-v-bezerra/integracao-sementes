
export default function Fazemos() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full z-10 h-[100px] bg-[#F3F8F4]"></div>
      <div className="relative bg-fazemos bg-cover xl:bg-bannerPosition-3 z-20 w-full"> {/* Aumentei o z-index aqui */}
        <div className="relative z-20 pt-40 pb-40 flex flex-col gap-y-8 px-8 md:px-8 lg:px-40 py-20 lg:grid grid-cols-2">
          <div className="flex flex-col gap-y-12">
            <h1 className="text-white font-openSans text-4xl font-bold text-center md:text-left">
              O que fazemos
            </h1>
            <p className="text-white font-openSans leading-7 font-medium tracking-wider leading-8 md:pr-12 xl:pr-32">
              Produzimos e comercializamos produtos e soluções inovadoras em sementes para que as propriedade rurais consigam obter resultados positivos, ajudando de pequenos a grandes agropecuaristas e contribuindo com a sustentabilidade do planeta e com a alimentação de qualidade das pessoas.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-10 h-[100px] bg-[#FFFBEF]"></div>
    </div>
  );
}
