import Header from "../components/Header"
import GrupoWhatsApp from "../components/GrupoWhatsApp"
import MainSemeadeira from "./components/MainSemeadeira"
import Contato from "../components/Contato"
import Footer from "../components/Footer"
import CotacaoWhatsApp from "../home/components/CotacaoWpp"


export default function Semeadeira() {

  return (
    <>
      <GrupoWhatsApp />
      <Header />
      <MainSemeadeira />
      <CotacaoWhatsApp />
      <Contato />
      <Footer />
    </>
  )
}


