"use client"

import HeaderBlog from "@/app/semeadeira/components/HeaderBlog";
import Footer from "@/app/components/Footer";
import React, { useRef } from "react";


export default function Post() {
  const footerRef = useRef(null);

  return (
    <>
      <HeaderBlog footerRef={footerRef} />
      <h1 className="text-center font-openSans font-bold text-5xl py-24">POST 1</h1>
      <Footer ref={footerRef} />
    </>
  )
}
