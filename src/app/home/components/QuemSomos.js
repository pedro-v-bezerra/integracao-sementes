import React, { useRef } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

export default function QuemSomos() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className='px-28 pb-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 pl-0 md:pl-8 lg:pl-16 py-8 gap-4 md:gap-8">
          {/* TEXTOS */}
          <div className="flex flex-col justify-center px-4 md:pl-8 lg:pl-16 text-center md:text-left">
            <h1 className="text-[#2E664D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold pt-4 md:pt-0">
              Quem Somos
            </h1>
            <p className="text-[#354D4D] font-openSans py-4 md:pt-12 leading-7 font-medium lg:pr-40">
              Somos sustentabilidade, inovação, produtividade e lucratividade.
            </p>
            <p className="text-[#354D4D] font-openSans py-4 md:py-4 leading-7 font-medium lg:pr-40">
              Em um mundo cada vez mais preocupado em produzir para alimentar a população e conservar o planeta, integramos tecnologia e experiência para produzir e comercializar soluções em sementes forrageiras.
            </p>
            <p className="text-[#354D4D] font-openSans py-4 md:pb-12 leading-7 font-medium lg:pr-40">
              Somos a Integração Sementes e nascemos para semear o futuro e crescer com o agronegócio brasileiro
            </p>
            <Link href="/about" className="text-white w-max bg-[#A5BB3C] py-2 px-8 md:py-1 md:px-12 lg:py-1 lg:px-16 rounded-full mx-auto md:mx-0">
              SAIBA MAIS
            </Link>

          </div>

          {/* SLIDER */}
          <div className="relative overflow-hidden flex justify-center">
            <div className="w-full max-w-[300px] md:max-w-[400px]"> {/* Centraliza e define largura máxima do slider */}
              <Slider {...settings} ref={sliderRef}>
                <div className='flex justify-center items-center'>
                  <img src="/imgs/integracao/quem-somos-slide1.png" alt="Imagem 1" className="" />
                </div>
                <div>
                  <img src="/imgs/quem-somos-slide3.jpg" alt="Imagem 3" className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-lg object-cover" />
                </div>
              </Slider>

              {/* Container das Chevrons abaixo do slider */}
              <div className="flex justify-center space-x-4 mt-4">
                {/* Chevron Left */}
                <img
                  src="/imgs/integracao/chevron-left-green-soft.svg"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer"
                  onClick={() => sliderRef.current.slickPrev()}
                  alt="Previous Slide"
                />

                {/* Chevron Right */}
                <img
                  src="/imgs/integracao/chevron-right-green-soft.svg"
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer"
                  onClick={() => sliderRef.current.slickNext()}
                  alt="Next Slide"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
