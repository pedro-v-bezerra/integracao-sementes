'use client'

import React, { useRef } from "react";
import Header from "../components/Header";
import MainIndex from "./components/MainIndex";
import Footer from "../components/Footer";
import GrupoWhatsApp from "../components/GrupoWhatsApp";
import CotacaoWhatsApp from "./components/CotacaoWpp";
import Contato from "../components/Contato";
export default function Home() {
  const footerRef = useRef(null);

  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      <MainIndex />
      <Contato/>
      <Footer ref={footerRef} />
      <CotacaoWhatsApp/>
    </>
  );
}
