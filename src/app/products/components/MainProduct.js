'use client'
import { React, useRef ,useContext } from 'react';
import Header from '@/app/components/Header';
import ImageGrid from './ImageGrid';
import Description from './Description';
import Footer from '@/app/components/Footer';
import Semente from './Semente';
import Menu from './Menu';
import { ProductContext } from '../context/ProductContext';


export default function MainProducts() {

  const { datas, selectedCategory, selectedSeed, handleSeedSelect } = useContext(ProductContext)
  const footerRef = useRef(null);

  return (
    <>
      <Header footerRef={footerRef}/>
      {/* MENU */}
      <Menu />
      {/* Condicional: Exibe a grid ou a descrição da semente */}
      {selectedSeed === null ? (
        <div>
          <ImageGrid
            images={datas[selectedCategory].images}
            titles={datas[selectedCategory].titles}
            descriptions={datas[selectedCategory].descriptions}
            onImageClick={handleSeedSelect} // Passa a função para o componente ImageGrid
          />

          <Description/>
        </div>
      ) : (
        <Semente />
      )}
      <Footer ref={footerRef}/>

    </>

  );
}
