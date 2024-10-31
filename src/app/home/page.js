import React, { useRef } from "react";
import Header from "../components/Header";
import MainIndex from "./components/MainIndex";
import Footer from "../components/Footer";
import GrupoWhatsApp from "./components/GrupoWhatsApp";
import CotacaoWhatsApp from "./components/CotacaoWhtasApp";

export default function Home() {
  const footerRef = useRef(null);

  return (
    <>
      <div className="relative">
        <GrupoWhatsApp />
        <Header footerRef={footerRef} />
        <MainIndex />
        <Footer ref={footerRef} />
        <CotacaoWhatsApp/>
      </div>
    </>
  );
}
