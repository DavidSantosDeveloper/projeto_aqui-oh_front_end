

import Footer from "../../shared/components/footer/Footer"
import Header from "../../shared/components/Header/Header"
import FiltroDenuncias from "./components/FiltroDenuncias/FiltroDenuncias"
import ListagemDenuncias from "./components/ListagemDenuncias/ListagemDenuncias.jsx"
import "./HomePage.css"



export default function HomePage() {
  return (
    <>
       <Header></Header>

        <section>
            <FiltroDenuncias></FiltroDenuncias>
            <ListagemDenuncias></ListagemDenuncias>
        </section>
       
        
       <Footer></Footer>
      
    </>
  )
}
