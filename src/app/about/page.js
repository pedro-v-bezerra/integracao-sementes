"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainAbout from "./components/MainAbout";
import Contato from "../components/Contato";
import GrupoWhatsApp from "../components/GrupoWhatsApp";
import React, { useRef } from "react";


export default function About() {
  const footerRef = useRef(null);

  return (
    <>
      <GrupoWhatsApp/>
      <Header footerRef={footerRef} />
      <MainAbout />
      <Contato />
      <Footer ref={footerRef} />
    </>
  )
}