"use client"
import Header from "../components/Header"
import GrupoWhatsApp from "../components/GrupoWhatsApp"
import MainSemeadeira from "./components/MainSemeadeira"
import Contato from "../components/Contato"
import Footer from "../components/Footer"
import CotacaoWhatsApp from "../home/components/CotacaoWpp"
import React, { useRef } from "react";


export default function Semeadeira() {
  const footerRef = useRef(null);

  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      <MainSemeadeira />
      <CotacaoWhatsApp />
      <Contato />
      <Footer ref={footerRef} />
    </>
  )
}




